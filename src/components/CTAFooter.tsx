import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTAFooter = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl p-12 md:p-16 text-center text-primary-foreground" style={{ background: "var(--hero-gradient)" }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready to share your skills?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
            Join a growing community of people who believe knowledge should be freely exchanged.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full text-base px-8 gap-2 font-semibold"
            onClick={() => navigate("/my-skills")}
          >
            Join SkillSwap <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;
