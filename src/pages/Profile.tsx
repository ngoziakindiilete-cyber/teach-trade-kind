import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { db, storage } from "@/lib/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useToast } from "@/hooks/use-toast";
import { Plus, X, Upload, Camera, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
  "Ekiti", "Enugu", "FCT Abuja", "Gombe", "Imo", "Jigawa",
  "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun",
  "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

const SKILL_CATEGORIES = [
  "Technology", "Music", "Art & Design", "Cooking", "Languages",
  "Photography", "Fitness & Yoga", "Writing", "Business", "Crafts", "Other",
];

interface SkillTeach {
  id?: string;
  skill_name: string;
  category: string;
  proficiency: string;
}

interface SkillLearn {
  id?: string;
  skill_name: string;
  category: string;
  preferred_format: string;
}

const Profile = () => {
  const { user, profile, loading, refreshProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [teachSkills, setTeachSkills] = useState<SkillTeach[]>([]);
  const [learnSkills, setLearnSkills] = useState<SkillLearn[]>([]);

  const [newTeach, setNewTeach] = useState({ skill_name: "", category: "Other", proficiency: "Beginner" });
  const [newLearn, setNewLearn] = useState({ skill_name: "", category: "Other", preferred_format: "Both" });

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || "");
      setBio(profile.bio || "");
      setLocation(profile.location || "");
      setPhone(profile.phone || "");
      setAvatarUrl(profile.avatar_url);
    }
  }, [profile]);

  useEffect(() => {
    if (user) {
      loadSkills();
    }
  }, [user]);

  const loadSkills = async () => {
    if (!user) return;
    const [teachSnap, learnSnap] = await Promise.all([
      getDocs(collection(db, "users", user.uid, "skills_teach")),
      getDocs(collection(db, "users", user.uid, "skills_learn")),
    ]);
    setTeachSkills(teachSnap.docs.map((d) => ({ id: d.id, ...d.data() }) as SkillTeach));
    setLearnSkills(learnSnap.docs.map((d) => ({ id: d.id, ...d.data() }) as SkillLearn));
  };

  const completeness = (() => {
    let score = 0;
    if (fullName) score += 20;
    if (bio) score += 20;
    if (location) score += 15;
    if (avatarUrl) score += 15;
    if (teachSkills.length > 0) score += 15;
    if (learnSkills.length > 0) score += 15;
    return score;
  })();

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const filePath = `avatars/${user.uid}/${Date.now()}.${fileExt}`;

    try {
      const storageRef = ref(storage, filePath);
      await uploadBytes(storageRef, file);
      const publicUrl = await getDownloadURL(storageRef);
      setAvatarUrl(publicUrl);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Upload failed";
      toast({ title: "Upload failed", description: message, variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!user) return;
    setSaving(true);

    const isComplete = !!(fullName && bio && location && avatarUrl && teachSkills.length > 0 && learnSkills.length > 0);

    try {
      await updateDoc(doc(db, "users", user.uid), {
        full_name: fullName,
        bio,
        location,
        phone,
        avatar_url: avatarUrl,
        profile_complete: isComplete,
      });
      await refreshProfile();
      toast({ title: "Profile updated!", description: "Your changes have been saved." });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Save failed";
      toast({ title: "Error saving profile", description: message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const addTeachSkill = async () => {
    if (!newTeach.skill_name || !user) return;
    await addDoc(collection(db, "users", user.uid, "skills_teach"), {
      skill_name: newTeach.skill_name,
      category: newTeach.category,
      proficiency: newTeach.proficiency,
    });
    setNewTeach({ skill_name: "", category: "Other", proficiency: "Beginner" });
    loadSkills();
  };

  const addLearnSkill = async () => {
    if (!newLearn.skill_name || !user) return;
    await addDoc(collection(db, "users", user.uid, "skills_learn"), {
      skill_name: newLearn.skill_name,
      category: newLearn.category,
      preferred_format: newLearn.preferred_format,
    });
    setNewLearn({ skill_name: "", category: "Other", preferred_format: "Both" });
    loadSkills();
  };

  const removeTeachSkill = async (id: string) => {
    if (!user) return;
    await deleteDoc(doc(db, "users", user.uid, "skills_teach", id));
    loadSkills();
  };

  const removeLearnSkill = async (id: string) => {
    if (!user) return;
    await deleteDoc(doc(db, "users", user.uid, "skills_learn", id));
    loadSkills();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <h1 className="text-2xl font-bold text-foreground mb-2">Your Profile</h1>

        {/* Completeness Indicator */}
        <div className="bg-card border border-border rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Profile Completeness</span>
            <span className="text-sm font-bold text-primary">{completeness}%</span>
          </div>
          <Progress value={completeness} className="h-2" />
          {completeness < 100 && (
            <p className="text-xs text-muted-foreground mt-2">Complete your profile to get better skill matches!</p>
          )}
        </div>

        {/* Avatar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center overflow-hidden border-2 border-border">
              {avatarUrl ? (
                <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <Camera className="w-8 h-8 text-muted-foreground" />
              )}
            </div>
            <label className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
              <Upload className="w-3.5 h-3.5" />
              <input type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} disabled={uploading} />
            </label>
          </div>
          <div>
            <p className="font-semibold text-foreground">{fullName || "Your Name"}</p>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="space-y-4 mb-8">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell others about yourself..." value={bio} onChange={(e) => setBio(e.target.value)} rows={3} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Location</Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
                <SelectContent>
                  {NIGERIAN_STATES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Skills I Can Teach */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-3">Skills I Can Teach</h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {teachSkills.map((s) => (
              <Badge key={s.id} variant="default" className="rounded-full gap-1 pr-1">
                {s.skill_name} · {s.proficiency}
                <button onClick={() => s.id && removeTeachSkill(s.id)} className="ml-1 hover:bg-primary-foreground/20 rounded-full p-0.5">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            <Input placeholder="Skill name" value={newTeach.skill_name} onChange={(e) => setNewTeach({ ...newTeach, skill_name: e.target.value })} className="flex-1 min-w-[140px]" />
            <Select value={newTeach.category} onValueChange={(v) => setNewTeach({ ...newTeach, category: v })}>
              <SelectTrigger className="w-[130px]"><SelectValue /></SelectTrigger>
              <SelectContent>{SKILL_CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
            <Select value={newTeach.proficiency} onValueChange={(v) => setNewTeach({ ...newTeach, proficiency: v })}>
              <SelectTrigger className="w-[130px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Expert">Expert</SelectItem>
              </SelectContent>
            </Select>
            <Button size="icon" variant="outline" onClick={addTeachSkill}><Plus className="w-4 h-4" /></Button>
          </div>
        </div>

        {/* Skills I Want to Learn */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-3">Skills I Want to Learn</h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {learnSkills.map((s) => (
              <Badge key={s.id} variant="secondary" className="rounded-full gap-1 pr-1">
                {s.skill_name} · {s.preferred_format}
                <button onClick={() => s.id && removeLearnSkill(s.id)} className="ml-1 hover:bg-secondary-foreground/20 rounded-full p-0.5">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            <Input placeholder="Skill name" value={newLearn.skill_name} onChange={(e) => setNewLearn({ ...newLearn, skill_name: e.target.value })} className="flex-1 min-w-[140px]" />
            <Select value={newLearn.category} onValueChange={(v) => setNewLearn({ ...newLearn, category: v })}>
              <SelectTrigger className="w-[130px]"><SelectValue /></SelectTrigger>
              <SelectContent>{SKILL_CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
            <Select value={newLearn.preferred_format} onValueChange={(v) => setNewLearn({ ...newLearn, preferred_format: v })}>
              <SelectTrigger className="w-[130px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="In-person">In-person</SelectItem>
                <SelectItem value="Both">Both</SelectItem>
              </SelectContent>
            </Select>
            <Button size="icon" variant="outline" onClick={addLearnSkill}><Plus className="w-4 h-4" /></Button>
          </div>
        </div>

        <Button className="w-full rounded-full" onClick={handleSaveProfile} disabled={saving}>
          {saving ? "Saving..." : "Save Profile"}
        </Button>
      </div>
    </div>
  );
};

export default Profile;
