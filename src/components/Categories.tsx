const categories = [
  { emoji: "🍳", name: "Cooking", count: 48 },
  { emoji: "📸", name: "Photography", count: 35 },
  { emoji: "💻", name: "Programming", count: 62 },
  { emoji: "🎨", name: "Art & Design", count: 41 },
  { emoji: "🎸", name: "Music", count: 29 },
  { emoji: "🗣️", name: "Languages", count: 53 },
  { emoji: "🧘", name: "Fitness & Yoga", count: 22 },
  { emoji: "✍️", name: "Writing", count: 18 },
];

import { useScrollAnimate, useStaggeredAnimate } from "@/hooks/use-scroll-animate";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const sectionRef = useScrollAnimate<HTMLElement>();
  const gridRef = useStaggeredAnimate<HTMLDivElement>(100);
  const navigate = useNavigate();
  return (
    <section id="categories" ref={sectionRef} className="py-20 bg-card scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Popular categories
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore skills people are sharing
          </p>
        </div>
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => navigate(`/browse?category=${encodeURIComponent(cat.name)}`)}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-border bg-background hover:border-primary/40 hover:shadow-[var(--card-shadow)] transition-all duration-200 group cursor-pointer"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{cat.emoji}</span>
              <span className="font-semibold text-foreground text-sm">{cat.name}</span>
              <span className="text-xs text-muted-foreground">{cat.count} people</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
