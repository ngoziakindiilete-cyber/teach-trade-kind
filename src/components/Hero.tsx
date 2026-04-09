import heroImage from "@/assets/hero-illustration.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              🤝 No money. Just skills.
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-balance leading-tight">
              Swap skills,
              <br />
              <span className="text-primary">grow together</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md text-balance">
              Teach what you know, learn what you love. Connect with people who
              want to exchange skills — no money needed.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-full text-base px-8 gap-2"
                onClick={() => navigate("/my-skills")}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base px-8"
                onClick={() => navigate("/browse")}
              >
                Browse Skills
              </Button>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl opacity-20"
              style={{ background: "var(--warm-gradient)" }}
            />
            <img
              src={heroImage}
              alt="People exchanging skills together"
              width={1280}
              height={720}
              className="rounded-3xl shadow-lg relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
