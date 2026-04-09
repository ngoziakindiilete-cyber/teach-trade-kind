import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Plus, X, Users, Repeat } from "lucide-react";

const LEVELS = [
  { value: "beginner", label: "Beginner" },
  { value: "mid-level", label: "Mid-level" },
  { value: "advanced", label: "Advanced" },
  { value: "expert", label: "Expert / Professional" },
];

const TEACH_CAPACITY = [
  "1 person",
  "2–3 people",
  "4–6 people",
  "7–10 people",
  "10+ people",
];

interface Skill {
  id: string;
  name: string;
  level: string;
  canTeach: boolean;
  capacity: string;
}

const MySkills = () => {
  const navigate = useNavigate();

  const [skills, setSkills] = useState<Skill[]>([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("mid-level");
  const [canTeach, setCanTeach] = useState(true);
  const [capacity, setCapacity] = useState("2–3 people");
  const [nameError, setNameError] = useState("");

  const handleAdd = () => {
    if (!name.trim()) {
      setNameError("Please enter a skill name.");
      return;
    }
    setNameError("");
    setSkills((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: name.trim(),
        level,
        canTeach,
        capacity: canTeach ? capacity : "",
      },
    ]);
    setName("");
    setLevel("mid-level");
    setCanTeach(true);
    setCapacity("2–3 people");
  };

  const handleRemove = (id: string) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const levelLabel = (val: string) =>
    LEVELS.find((l) => l.value === val)?.label ?? val;

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar with back button */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex items-center h-16 gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <Repeat className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="text-base font-bold text-foreground">SkillSwap</span>
            </div>
          </div>
          {/* spacer to keep logo centred */}
          <div className="w-[120px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-4">
            🤝 Tell us what you know
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            Get Started
          </h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Add the skills you have. Tell us your level and whether you're open
            to teaching others — you can add as many as you like.
          </p>
        </div>

        {/* Add skill form */}
        <div className="rounded-2xl border border-border bg-card p-6 space-y-5 mb-8 shadow-sm">
          <h2 className="font-semibold text-foreground text-base">Add a skill</h2>

          {/* Skill name */}
          <div className="space-y-1.5">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="skill-name"
            >
              Skill name
            </label>
            <Input
              id="skill-name"
              placeholder="e.g. Guitar, Python, Baking, Spanish…"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (nameError) setNameError("");
              }}
              onKeyDown={handleKeyDown}
              className="rounded-xl"
            />
            {nameError && (
              <p className="text-xs text-destructive">{nameError}</p>
            )}
          </div>

          {/* Level */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              How good are you at it?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {LEVELS.map((l) => (
                <button
                  key={l.value}
                  type="button"
                  onClick={() => setLevel(l.value)}
                  className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-150 text-left ${
                    level === l.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Can teach toggle */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Are you open to teaching this skill?
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setCanTeach(true)}
                className={`flex-1 rounded-xl border py-2.5 text-sm font-medium transition-all duration-150 ${
                  canTeach
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary/50"
                }`}
              >
                Yes, I can teach
              </button>
              <button
                type="button"
                onClick={() => setCanTeach(false)}
                className={`flex-1 rounded-xl border py-2.5 text-sm font-medium transition-all duration-150 ${
                  !canTeach
                    ? "bg-secondary text-secondary-foreground border-border"
                    : "bg-background text-foreground border-border hover:border-primary/50"
                }`}
              >
                Not right now
              </button>
            </div>
          </div>

          {/* Capacity — only shown when canTeach */}
          {canTeach && (
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                <Users className="w-4 h-4 text-muted-foreground" />
                How many people can you teach at a time?
              </label>
              <Select value={capacity} onValueChange={setCapacity}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TEACH_CAPACITY.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <Button
            onClick={handleAdd}
            className="w-full rounded-xl gap-2"
            disabled={!name.trim()}
          >
            <Plus className="w-4 h-4" />
            Add this skill
          </Button>
        </div>

        {/* Added skills list */}
        {skills.length > 0 && (
          <div className="mb-8 space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Your skills ({skills.length})
            </h2>
            <div className="space-y-2">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
                >
                  <div className="flex flex-wrap items-center gap-2 min-w-0">
                    <span className="font-semibold text-foreground truncate">
                      {skill.name}
                    </span>
                    <Badge
                      variant="secondary"
                      className="rounded-full text-xs shrink-0"
                    >
                      {levelLabel(skill.level)}
                    </Badge>
                    {skill.canTeach && (
                      <Badge
                        variant="outline"
                        className="rounded-full text-xs shrink-0 border-primary/30 text-primary"
                      >
                        Teaches · {skill.capacity}
                      </Badge>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemove(skill.id)}
                    className="ml-3 text-muted-foreground hover:text-destructive transition-colors shrink-0"
                    aria-label={`Remove ${skill.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Continue CTA */}
        <div className="space-y-3">
          <Button
            size="lg"
            className="w-full rounded-full gap-2 text-base"
            disabled={skills.length === 0}
            onClick={() => navigate("/browse")}
          >
            Find people to match with <ArrowRight className="w-4 h-4" />
          </Button>
          {skills.length === 0 && (
            <p className="text-center text-xs text-muted-foreground">
              Add at least one skill to continue
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
