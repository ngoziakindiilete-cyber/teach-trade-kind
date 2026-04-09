import { UserPlus, Search, Repeat } from "lucide-react";
import { useScrollAnimate, useStaggeredAnimate } from "@/hooks/use-scroll-animate";

const steps = [
  {
    icon: UserPlus,
    title: "Create your profile",
    description: "List the skills you can teach and the ones you want to learn.",
  },
  {
    icon: Search,
    title: "Find a match",
    description: "Browse people whose skills complement yours and send a request.",
  },
  {
    icon: Repeat,
    title: "Exchange & grow",
    description: "Meet up (online or in person) and teach each other. Simple as that!",
  },
];

const HowItWorks = () => {
  const sectionRef = useScrollAnimate<HTMLElement>();
  const gridRef = useStaggeredAnimate<HTMLDivElement>(150);
  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-card scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Three simple steps to start exchanging skills today
          </p>
        </div>
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
