import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  TrendingUp,
  Trophy,
  Star,
  Clock,
  Users,
  Award,
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  Download,
} from "lucide-react";

export default function Index() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const downloadAPK = () => {
    const apkUrl = "https://cdn.builder.io/o/assets%2F13b3c1ebc5c1456f8fd0c704523ca25b%2F2922deedc6274265bef9b5ffc40e0204?alt=media&token=12726350-8f1d-45d8-afa4-f7538153bbe9&apiKey=13b3c1ebc5c1456f8fd0c704523ca25b";
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 'app-release.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const liveResults = [
    { game: "Milan Day", result: "459-18", time: "12:00 PM", status: "live" },
    {
      game: "Rajdhani Day",
      result: "167-49",
      time: "1:00 PM",
      status: "upcoming",
    },
    {
      game: "Time Bazar",
      result: "234-89",
      time: "2:00 PM",
      status: "upcoming",
    },
    { game: "Kalyan", result: "890-72", time: "9:45 PM", status: "upcoming" },
  ];

    const aboutFeatures = [
    {
      title: "Trusted Platform",
      description: "India's most reliable Satta Matka platform with 10+ years of experience",
      icon: "🏆",
    },
    {
      title: "Fair Play",
      description: "100% transparent results with live streaming and verified outcomes",
      icon: "⚖️",
    },
    {
      title: "Instant Payouts",
      description: "Quick and secure withdrawals processed within minutes",
      icon: "💸",
    },
    {
      title: "24/7 Support",
      description: "Round the clock customer service via WhatsApp and phone",
      icon: "📞",
    },
    {
      title: "Mobile App",
      description: "Easy-to-use mobile application for gaming on the go",
      icon: "📱",
    },
    {
      title: "Secure Gaming",
      description: "Advanced security measures to protect your data and transactions",
      icon: "🔒",
    },
  ];

  const topWinners = [
    { name: "Rajesh K.", amount: "₹2,50,000", game: "Kalyan" },
    { name: "Priya S.", amount: "₹1,80,000", game: "Milan Day" },
    { name: "Amit P.", amount: "₹95,000", game: "Time Bazar" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-warning rounded-lg flex items-center justify-center">
                <span className="text-gold-foreground font-bold text-lg">
                  M
                </span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gold to-warning bg-clip-text text-transparent">
                thematkaHub
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-foreground hover:text-gold transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                Games
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                Results
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                Live Draws
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                Promotions
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                Contact
              </a>
            </nav>

                        {/* User Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                className="bg-gold hover:bg-gold/90 text-gold-foreground"
                size="sm"
                onClick={downloadAPK}
              >
                <Download className="mr-2 h-4 w-4" />
                Download App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="text-foreground hover:text-gold transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Games
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Results
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Live Draws
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Promotions
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Contact
                </a>
                                <div className="flex justify-center pt-4">
                  <Button
                    className="bg-gold hover:bg-gold/90 text-gold-foreground flex-1"
                    size="sm"
                    onClick={downloadAPK}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download App
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-background to-accent/10"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              India's Most Trusted{" "}
              <span className="bg-gradient-to-r from-gold to-warning bg-clip-text text-transparent">
                Satta Matka
              </span>{" "}
              Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the thrill of authentic Satta Matka with live results,
              instant payouts, and 24/7 customer support. Join thousands of
              winners today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-gold-foreground px-8 py-6 text-lg"
                onClick={() => window.open('https://thematka.in', '_blank')}
              >
                <Play className="mr-2 h-5 w-5" />
                Play Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-gold text-gold hover:bg-gold/10"
                onClick={downloadAPK}
              >
                <Download className="mr-2 h-5 w-5" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Results Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Live Results & Upcoming Draws
            </h2>
            <p className="text-muted-foreground">
              Stay updated with real-time results and upcoming draw schedules
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveResults.map((result, index) => (
              <Card
                key={index}
                className="border-border hover:border-gold/50 transition-colors"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{result.game}</CardTitle>
                    <Badge
                      variant={
                        result.status === "live" ? "destructive" : "secondary"
                      }
                      className={
                        result.status === "live" ? "bg-live-indicator" : ""
                      }
                    >
                      {result.status === "live" ? "LIVE" : "UPCOMING"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gold mb-2">
                    {result.result}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {result.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

            {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About thematkaHub</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              thematkaHub is India's premier online Satta Matka platform, dedicated to providing
              a safe, fair, and exciting gaming experience. With over a decade of expertise
              in the industry, we've built a trusted community of passionate players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aboutFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:border-gold/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              To provide the most authentic and reliable Satta Matka experience while
              maintaining the highest standards of fairness, security, and customer service.
              We believe in responsible gaming and creating a community where everyone can
              enjoy the thrill of the game safely.
            </p>
            <div className="flex justify-center">
              <Button
                className="bg-gold hover:bg-gold/90 text-gold-foreground"
                onClick={downloadAPK}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Our App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Winners Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Today's Top Winners</h2>
            <p className="text-muted-foreground">
              Celebrating our biggest winners of the day
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {topWinners.map((winner, index) => (
              <Card key={index} className="mb-4 border-border">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-warning rounded-full flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-gold-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">{winner.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {winner.game}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-success">
                      {winner.amount}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Won Today
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose thematkaHub?</h2>
            <p className="text-muted-foreground">
              Experience the best in online Satta Matka gaming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Platform</h3>
              <p className="text-muted-foreground">
                Verified and trusted by thousands of players across India
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Payouts</h3>
              <p className="text-muted-foreground">
                Lightning-fast withdrawals and secure payment processing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock customer support for all your queries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-warning rounded-lg flex items-center justify-center">
                  <span className="text-gold-foreground font-bold text-lg">
                    M
                  </span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-gold to-warning bg-clip-text text-transparent">
                  thematkaHub
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                India's most trusted Satta Matka platform with live results and
                instant payouts.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Games
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Results
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Live Draws
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    How to Play
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>support@matkahub.com</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MessageCircle className="h-4 w-4" />
                  <span>24/7 Live Chat</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2024 thematkaHub. All rights reserved. | Responsible Gaming |
              18+ Only
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
