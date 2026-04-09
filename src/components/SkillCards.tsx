import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Star } from "lucide-react";
import { useScrollAnimate, useStaggeredAnimate } from "@/hooks/use-scroll-animate";

const people = [
  {
    name: "Maria Lopez",
    avatar: "👩‍🍳",
    teaches: ["Cooking", "Baking"],
    wants: ["Photography", "Graphic Design"],
    rating: 4.9,
    exchanges: 12,
  },
  {
    name: "James Chen",
    avatar: "📸",
    teaches: ["Photography", "Lightroom"],
    wants: ["Cooking", "Guitar"],
    rating: 4.8,
    exchanges: 8,
  },
  {
    name: "Aisha Patel",
    avatar: "🎨",
    teaches: ["Painting", "Illustration"],
    wants: ["Web Development", "Yoga"],
    rating: 5.0,
    exchanges: 15,
  },
  {
    name: "David Kim",
    avatar: "💻",
    teaches: ["Web Development", "Python"],
    wants: ["Painting", "Piano"],
    rating: 4.7,
    exchanges: 10,
  },
  {
    name: "Sophie Brown",
    avatar: "🎸",
    teaches: ["Guitar", "Music Theory"],
    wants: ["Cooking", "Spanish"],
    rating: 4.9,
    exchanges: 6,
  },
  {
    name: "Omar Hassan",
    avatar: "🧘",
    teaches: ["Yoga", "Meditation"],
    wants: ["Photography", "Guitar"],
    rating: 4.6,
    exchanges: 9,
  },
];

const SkillCards = () => {
  const sectionRef = useScrollAnimate<HTMLElement>();
  const gridRef = useStaggeredAnimate<HTMLDivElement>(110);
  return (
    <section id="browse-skills" ref={sectionRef} className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            People ready to exchange
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Find someone whose skills match what you want to learn
          </p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {people.map((person) => (
            <div
              key={person.name}
              className="bg-card rounded-2xl p-6 border border-border transition-shadow duration-300 hover:shadow-[var(--card-shadow-hover)] shadow-[var(--card-shadow)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                  {person.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{person.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                    {person.rating} · {person.exchanges} exchanges
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5">
                    Can teach
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {person.teaches.map((s) => (
                      <Badge key={s} variant="default" className="rounded-full font-medium text-xs">
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
                      <Badge key={s} variant="secondary" className="rounded-full font-medium text-xs">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full rounded-full gap-2">
                <MessageSquare className="w-4 h-4" /> Request Exchange
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCards;
