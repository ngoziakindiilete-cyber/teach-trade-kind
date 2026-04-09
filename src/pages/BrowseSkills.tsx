import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Search, Star, Users, ArrowLeft, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useStaggeredAnimate } from "@/hooks/use-scroll-animate";
import { useNavigate, useSearchParams } from "react-router-dom";

const CATEGORIES = [
  "All",
  "Cooking",
  "Photography",
  "Programming",
  "Art & Design",
  "Music",
  "Languages",
  "Fitness & Yoga",
  "Writing",
];

const people = [
  {
    name: "Maria Lopez",
    avatar: "👩‍🍳",
    teaches: ["Cooking", "Baking"],
    wants: ["Photography", "Graphic Design"],
    rating: 4.9,
    exchanges: 12,
    category: "Cooking",
    currentlyTeaching: 3,
    totalMatches: 12,
  },
  {
    name: "James Chen",
    avatar: "📸",
    teaches: ["Photography", "Lightroom"],
    wants: ["Cooking", "Guitar"],
    rating: 4.8,
    exchanges: 8,
    category: "Photography",
    currentlyTeaching: 2,
    totalMatches: 8,
  },
  {
    name: "Aisha Patel",
    avatar: "🎨",
    teaches: ["Painting", "Illustration"],
    wants: ["Web Development", "Yoga"],
    rating: 5.0,
    exchanges: 15,
    category: "Art & Design",
    currentlyTeaching: 5,
    totalMatches: 15,
  },
  {
    name: "David Kim",
    avatar: "💻",
    teaches: ["Web Development", "Python"],
    wants: ["Painting", "Piano"],
    rating: 4.7,
    exchanges: 10,
    category: "Programming",
    currentlyTeaching: 4,
    totalMatches: 10,
  },
  {
    name: "Sophie Brown",
    avatar: "🎸",
    teaches: ["Guitar", "Music Theory"],
    wants: ["Cooking", "Spanish"],
    rating: 4.9,
    exchanges: 6,
    category: "Music",
    currentlyTeaching: 1,
    totalMatches: 6,
  },
  {
    name: "Omar Hassan",
    avatar: "🧘",
    teaches: ["Yoga", "Meditation"],
    wants: ["Photography", "Guitar"],
    rating: 4.6,
    exchanges: 9,
    category: "Fitness & Yoga",
    currentlyTeaching: 6,
    totalMatches: 9,
  },
  {
    name: "Priya Nair",
    avatar: "✍️",
    teaches: ["Creative Writing", "Copywriting"],
    wants: ["Photography", "Cooking"],
    rating: 4.8,
    exchanges: 7,
    category: "Writing",
    currentlyTeaching: 2,
    totalMatches: 7,
  },
  {
    name: "Carlos Mendez",
    avatar: "🗣️",
    teaches: ["Spanish", "French"],
    wants: ["Programming", "Music Theory"],
    rating: 4.7,
    exchanges: 11,
    category: "Languages",
    currentlyTeaching: 4,
    totalMatches: 11,
  },
  {
    name: "Yuki Tanaka",
    avatar: "🎹",
    teaches: ["Piano", "Music Theory"],
    wants: ["Painting", "Yoga"],
    rating: 5.0,
    exchanges: 14,
    category: "Music",
    currentlyTeaching: 3,
    totalMatches: 14,
  },
];

const BrowseSkills = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialise category from URL query param (e.g. ?category=Photography)
  const urlCategory = searchParams.get("category");
  const initialCategory =
    urlCategory && CATEGORIES.includes(urlCategory) ? urlCategory : "All";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const gridRef = useStaggeredAnimate<HTMLDivElement>(80);

  // Keep state & URL in sync
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && CATEGORIES.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filtered = people.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      search.trim() === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.teaches.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
      p.wants.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            {activeCategory === "All" ? "Browse Skills" : activeCategory}
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            {activeCategory === "All"
              ? "Discover people ready to exchange their knowledge with you"
              : `People teaching ${activeCategory} on SkillSwap`}
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            className="pl-9 rounded-full"
            placeholder="Search by name or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground text-center mb-6">
          {filtered.length} {filtered.length === 1 ? "person" : "people"} found
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div
            ref={gridRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {filtered.map((person) => (
              <div
                key={person.name}
                className="bg-card rounded-2xl p-6 border border-border transition-shadow duration-300 hover:shadow-[var(--card-shadow-hover)] shadow-[var(--card-shadow)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                    {person.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {person.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                      {person.rating} · {person.exchanges} exchanges
                    </div>
                  </div>
                </div>

                {/* Teaching & match stats */}
                <div className="flex gap-3 mb-4">
                  <div className="flex items-center gap-1.5 rounded-lg bg-primary/8 px-2.5 py-1.5 text-xs font-medium text-primary">
                    <BookOpen className="w-3.5 h-3.5" />
                    Teaching {person.currentlyTeaching} now
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg bg-secondary px-2.5 py-1.5 text-xs font-medium text-secondary-foreground">
                    <Users className="w-3.5 h-3.5" />
                    {person.totalMatches} matched
                  </div>
                </div>

                <div className="space-y-3 mb-5">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5">
                      Can teach
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {person.teaches.map((s) => (
                        <Badge
                          key={s}
                          variant="default"
                          className="rounded-full font-medium text-xs"
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5">
                      Wants to learn
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {person.wants.map((s) => (
                        <Badge
                          key={s}
                          variant="secondary"
                          className="rounded-full font-medium text-xs"
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full rounded-xl gap-2"
                  variant="outline"
                  size="sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send swap request
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg font-medium mb-1">No results found</p>
            <p className="text-sm">Try a different category or search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseSkills;
