import { Button } from "@/components/ui/button";
import { Repeat, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, profile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const displayName = profile?.full_name?.split(" ")[0] || user?.email?.split("@")[0] || "User";

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Repeat className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">SkillSwap</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="/#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
          <a href="/#browse-skills" className="hover:text-foreground transition-colors">Browse Skills</a>
          <a href="/#categories" className="hover:text-foreground transition-colors">Categories</a>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Button variant="ghost" size="sm" className="rounded-full gap-1" asChild>
                <Link to="/profile">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Hi, {displayName}</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-1" /> Log out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" className="rounded-full" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button size="sm" className="rounded-full" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
