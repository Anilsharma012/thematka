import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-gold to-warning rounded-lg flex items-center justify-center">
            <span className="text-gold-foreground font-bold text-2xl">M</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-gold to-warning bg-clip-text text-transparent">
            thematkaHub
          </span>
        </div>

        {/* 404 Error */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-gold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="border-gold text-gold hover:bg-gold/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-gold hover:bg-gold/90 text-gold-foreground"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
