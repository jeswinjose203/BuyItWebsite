import { ShoppingCart, Package, Truck, ArrowRight, Store, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Logo.png";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
      window.scrollTo({
        top: middle,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="BuyIt Logo" className="h-20 w-auto" />
            </div>
            <ul className="hidden md:flex gap-8 text-white font-medium">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-primary transition-smooth"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-primary transition-smooth"
                >
                  About
                </button>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-smooth">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => scrollToSection('download')}
                className="bg-white text-secondary hover:bg-white/90 font-semibold shadow-medium hidden md:inline-flex"
              >
                Get the App
              </Button>
              <button
                className="md:hidden text-white"
                onClick={() => {
                  const nav = document.querySelector('.mobile-nav');
                  nav?.classList.toggle('hidden');
                }}
                aria-label="Toggle navigation"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Navigation */}
          <div className="mobile-nav hidden md:hidden mt-2 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4 text-white">
              <button
                onClick={() => {
                  scrollToSection('features');
                  const nav = document.querySelector('.mobile-nav');
                  nav?.classList.add('hidden');
                }}
                className="text-left hover:text-primary transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => {
                  scrollToSection('about');
                  const nav = document.querySelector('.mobile-nav');
                  nav?.classList.add('hidden');
                }}
                className="text-left hover:text-primary transition-colors"
              >
                About
              </button>
              <Link to="/careers" className="hover:text-primary transition-colors" onClick={() => {
                const nav = document.querySelector('.mobile-nav');
                nav?.classList.add('hidden');
              }}>
                Careers
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors" onClick={() => {
                const nav = document.querySelector('.mobile-nav');
                nav?.classList.add('hidden');
              }}>
                Contact
              </Link>
              <Button
                onClick={() => {
                  scrollToSection('download');
                  const nav = document.querySelector('.mobile-nav');
                  nav?.classList.add('hidden');
                }}
                className="bg-white text-secondary hover:bg-white/90 font-semibold shadow-medium w-full"
              >
                Get the App
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in">
            Shop from Any Store,<br />
            Delivered to Your Doorstep
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            BuyIt lets you browse multiple shops, add items to your cart, and get everything delivered for free.
          </p>
          <Button 
            onClick={() => scrollToSection('download')}
            size="lg"
            className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6 font-semibold shadow-strong transition-bounce hover:scale-105 animate-scale-in"
          >
            Download Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Why Choose BuyIt?
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Experience the future of shopping with our innovative features
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group gradient-card rounded-3xl p-8 shadow-soft hover:shadow-strong transition-smooth hover:-translate-y-2">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                <Store className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Multiple Shops</h3>
              <p className="text-muted-foreground leading-relaxed">
                Browse a wide variety of shops all in one place. From groceries to electronics, we've got you covered.
              </p>
            </div>

            <div className="group gradient-card rounded-3xl p-8 shadow-soft hover:shadow-strong transition-smooth hover:-translate-y-2">
              <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                <ShoppingCart className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Easy Cart</h3>
              <p className="text-muted-foreground leading-relaxed">
                Add items from different shops to a single cart seamlessly. Shop smarter, not harder.
              </p>
            </div>

            <div className="group gradient-card rounded-3xl p-8 shadow-soft hover:shadow-strong transition-smooth hover:-translate-y-2">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                <Truck className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Free Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get your orders delivered to your doorstep with no delivery charges. Always free, always fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Package className="h-16 w-16 text-white mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About BuyIt
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              BuyIt is a revolutionary app that brings shopping from multiple stores right to your home. 
              Whether you want groceries, electronics, or anything else, BuyIt makes it easy and convenient.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              We partner with local stores to bring you the best selection, the best prices, and the best service. 
              Our mission is to make shopping effortless, so you can spend more time doing what you love.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get BuyIt Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Download the app and start shopping from your favorite stores with free delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="gradient-primary text-white hover:opacity-90 text-lg px-8 py-6 font-semibold shadow-medium transition-bounce hover:scale-105"
              >
                Download for iOS
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 font-semibold transition-smooth"
              >
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-white/80">buyit4all0910@gmail.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-white/80">+91 94005 26562</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-white/80">Nationwide Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary/90 text-white text-center">
        <p className="text-white/80">
          &copy; {new Date().getFullYear()} BuyIt. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
