import { Repeat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
            <Repeat className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground">SkillSwap</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 SkillSwap by Ngozi Akindiilete. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
