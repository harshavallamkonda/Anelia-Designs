// ...existing code...
import React, { useState } from 'react';
import './App.css';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import {
  Building2,
  Home,
  Palette,
  Users,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Linkedin,
  MessageCircle
} from 'lucide-react';

// Import images (high-quality replacements)
import aneliaLogo from '/anelia-logo-optimized.png';
import heroImage from './assets/eZ06CspCzSC8.jpg'; // Placeholder, video will be used
import interiorImage from './assets/interior1.jpg'; // High-quality luxury interior
import constructionImage from './assets/construction1.jpg'; // High-quality construction exterior
import project1 from './assets/construction2.jpg'; // High-quality construction project
import project2 from './assets/construction3.jpg'; // High-quality modern construction
import project3 from './assets/interior2.jpg'; // High-quality interior kitchen
import project4 from './assets/interior3.webp'; // High-quality contemporary interior
import project5 from './assets/construction1.jpg'; // High-quality luxury construction
import project6 from './assets/interior1.jpg'; // High-quality luxury interior
import interior1 from './assets/interior1.jpg'; // High-quality luxury living room
import interior2 from './assets/interior2.jpg'; // High-quality modern kitchen
import interior3 from './assets/interior3.webp'; // High-quality contemporary interior

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State for package dropdowns
  const [isStandardExpanded, setIsStandardExpanded] = useState(false);
  const [isClassicExpanded, setIsClassicExpanded] = useState(false);
  const [isPremiumExpanded, setIsPremiumExpanded] = useState(false);
  const [isEliteExpanded, setIsEliteExpanded] = useState(false);
  
  // State for individual package item dropdowns
  const [standardDropdowns, setStandardDropdowns] = useState({
    designs: false,
    structure: false,
    kitchen: false,
    bathroom: false,
    doors: false,
    painting: false,
    flooring: false,
    electricals: false,
    miscellaneous: false
  });
  
  const [classicDropdowns, setClassicDropdowns] = useState({
    designs: false,
    structure: false,
    kitchen: false,
    bathroom: false,
    doors: false,
    painting: false,
    flooring: false,
    electricals: false,
    miscellaneous: false
  });
  
  const [premiumDropdowns, setPremiumDropdowns] = useState({
    designs: false,
    structure: false,
    kitchen: false,
    bathroom: false,
    doors: false,
    painting: false,
    flooring: false,
    electricals: false,
    miscellaneous: false
  });
  
  const [eliteDropdowns, setEliteDropdowns] = useState({
    designs: false,
    structure: false,
    kitchen: false,
    bathroom: false,
    doors: false,
    painting: false,
    flooring: false,
    electricals: false,
    miscellaneous: false
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ConstructionCompany",
            "name": "Anelia Designs",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6, N Park Rd, Nehru Nagar",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560020",
              "addressCountry": "IN"
            },
            "telephone": "+919108867676",
            "email": "sales@aneliadesign.com",
            "url": "https://aneliadesigns.com",
            "logo": "https://aneliadesigns.com/logo.png",
            "sameAs": [
              "https://www.instagram.com/aneliadesign",
              "https://www.linkedin.com/company/anelia-design-studio-akshaya-constructions/"
            ]
          }
        `}
      </script>

      {/* Performance Optimization - Preload Critical Resources */}
      <link rel="preload" href="/anelia-logo-optimized.png" as="image" />
      <link rel="preload" href="/hero_background.mp4" as="video" type="video/mp4" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={aneliaLogo} alt="Anelia Designs" className="h-12 w-auto" />
              <h1 className="text-2xl font-heading font-bold text-primary">Anelia Designs</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button className="btn-primary"
                onClick={() => window.open('tel:+919108867676', '_self')}>
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
                <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
                <Button className="btn-primary w-fit"
                  onClick={() => window.open('tel:+919108867676', '_self')}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section (Landing Page) */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero_background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
              Crafting Exceptional living spaces since 1997
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 font-body">
              Bangalore's premier construction and interior design company. 
              We create exceptional homes with quality construction and stunning interiors.
            </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4">About Anelia Designs</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Your Trusted Partner in <span className="text-gradient">Construction & Design</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              With years of experience in Bangalore's construction industry, we specialize in creating 
              beautiful homes that combine quality construction with stunning interior design.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-heading">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  Licensed architects, skilled contractors, and creative interior designers working together.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-heading">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  Premium materials, meticulous craftsmanship, and rigorous quality checks at every stage.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-heading">Timely Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  Efficient project management ensuring on-time completion without compromising quality.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-heading">Why Choose Anelia Designs?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 font-heading">End-to-End Solutions</h4>
                    <p className="text-muted-foreground font-body">From architectural design to interior finishing, we handle everything.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 font-heading">Transparent Pricing</h4>
                    <p className="text-muted-foreground font-body">Clear, upfront pricing with no hidden costs or surprises.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 font-heading">Local Expertise</h4>
                    <p className="text-muted-foreground font-body">Deep understanding of Bangalore's building regulations and climate.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 font-heading">10-Year Warranty</h4>
                    <p className="text-muted-foreground font-body">Comprehensive warranty on structural work and waterproofing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={constructionImage} 
                alt="Modern construction project" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Complete <span className="text-gradient">Construction & Interior</span> Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              From foundation to finishing touches, we provide comprehensive services 
              to bring your dream home to life.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Construction Services */}
            <Card className="card-hover overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={project1} 
                  alt="Construction Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Construction Services</CardTitle>
                <CardDescription className="font-body">Complete construction solutions for your dream home</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 font-body">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Residential Construction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Commercial Construction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Renovation & Remodeling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Structural Engineering</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Interior Design Services */}
            <Card className="card-hover overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={interiorImage} 
                  alt="Interior Design Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Interior Design Services</CardTitle>
                <CardDescription className="font-body">Transform your space with stunning interior design</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 font-body">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Complete Home Interiors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Modular Kitchens</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Bedroom & Living Room Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Office Interiors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Interior Design Packages</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Our <span className="text-gradient">Interior Design Packages</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Choose from our comprehensive interior design packages tailored to your needs and budget.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Standard Package */}
            <Card className="card-hover text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-accent font-heading">Standard Package</CardTitle>
                <div className="text-3xl font-bold text-primary font-heading">₹1,779/sqft</div>
                <p className="text-sm text-muted-foreground font-body">Inc. GST</p>
              </CardHeader>
              <CardContent className="space-y-2">
                {/* Designs & Drawings */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setStandardDropdowns({...standardDropdowns, designs: !standardDropdowns.designs})}
                  >
                    <span className="font-medium">Designs & Drawings</span>
                    <span className="text-primary">{standardDropdowns.designs ? '-' : '+'}</span>
                  </button>
                  {standardDropdowns.designs && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Architectural Layout | 2D / 3D</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Structural Design</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>3D Elevation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>MEP Drawings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Digital site survey</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Structure */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setStandardDropdowns({...standardDropdowns, structure: !standardDropdowns.structure})}
                  >
                    <span className="font-medium">Structure</span>
                    <span className="text-primary">{standardDropdowns.structure ? '-' : '+'}</span>
                  </button>
                  {standardDropdowns.structure && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Steel – Sunvik or Kamadhenu Equivalent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Aggregates - 20mm & 40mm</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Cement- Ramco or Dalmia 43/53 grade</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Blocks- Solid Concrete 6inch & 4inch</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>RCC Design Mix- M-20/25</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceiling Heights- 10.0 ft.</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Kitchen */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setStandardDropdowns({...standardDropdowns, kitchen: !standardDropdowns.kitchen})}
                  >
                    <span className="font-medium">Kitchen</span>
                    <span className="text-primary">{standardDropdowns.kitchen ? '-' : '+'}</span>
                  </button>
                  {standardDropdowns.kitchen && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceramic Wall Tiles - Upto Rs. 40/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Kitchen accessories- Upto Rs.4,000/- ISI Marked</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Kitchen Sink- Granite Sink worth Rs. 5,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Granite Kitchen tabletop Rs. 120/-</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bathroom */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setStandardDropdowns({...standardDropdowns, bathroom: !standardDropdowns.bathroom})}
                  >
                    <span className="font-medium">Bathroom</span>
                    <span className="text-primary">{standardDropdowns.bathroom ? '-' : '+'}</span>
                  </button>
                  {standardDropdowns.bathroom && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceramic Wall Tiles - Upto Rs. 40/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Bathroom accessories- Upto Rs. 3,000/- ISI Marked</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Sanitary ware- White Coloured worth Rs. 8,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>CP Fittings- Upto Rs. 8,000/-</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Doors & Windows */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setStandardDropdowns({...standardDropdowns, doors: !standardDropdowns.doors})}
                  >
                    <span className="font-medium">Doors & Windows</span>
                    <span className="text-primary">{standardDropdowns.doors ? '-' : '+'}</span>
                  </button>
                  {standardDropdowns.doors && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Main Door- Teak wood frame Rs. 18,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Internal Door- Sal wood frame Rs. 8,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Windows- UPVC windows Rs. 350/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Grill- MS Grill Rs. 280/- Sqft</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Painting */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setStandardDropdowns({...standardDropdowns, painting: !standardDropdowns.painting})}
                  >
                    <span className="font-medium">Painting</span>
                    <span className="text-primary">{standardDropdowns.painting ? '-' : '+'}</span>
                  </button>
                  {standardDropdowns.painting && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Internal- Tractor Emulsion</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>External- Ace Exterior Emulsion</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceiling- Snowcem / Equivalent</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Flooring */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setStandardDropdowns({...standardDropdowns, flooring: !standardDropdowns.flooring})}
                  >
                    <span className="font-medium">Flooring</span>
                    <span className="text-primary">{standardDropdowns.flooring ? '-' : '+'}</span>
                  </button>
                  {standardDropdowns.flooring && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Drawing, Dining, Kitchen, Bedrooms- Ceramic tiles Rs. 35/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Balcony, Sit-out, Staircase- Anti-skid tiles Rs. 35/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Bathroom, Utility- Anti-skid tiles Rs. 35/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Parking- Parking tiles</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Electricals */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setStandardDropdowns({...standardDropdowns, electricals: !standardDropdowns.electricals})}
                  >
                    <span className="font-medium">Electricals</span>
                    <span className="text-primary">{standardDropdowns.electricals ? '-' : '+'}</span>
                  </button>
                  {standardDropdowns.electricals && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Wires- Anchor or equivalent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Switches- Anchor Roma or equivalent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Points- As per electrical drawing</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Miscellaneous */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setStandardDropdowns({...standardDropdowns, miscellaneous: !standardDropdowns.miscellaneous})}
                  >
                    <span className="font-medium">Miscellaneous</span>
                    <span className="text-primary">{standardDropdowns.miscellaneous ? '-' : '+'}</span>
                  </button>
                  {standardDropdowns.miscellaneous && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Water Tank- Sintex or equivalent 1000L</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Staircase- Granite or Sadarahalli stone</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Handrails- MS Handrails</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Compound Wall- 4 ft height</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Classic Package */}
            <Card className="card-hover text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-accent font-heading">Classic Package</CardTitle>
                <div className="text-3xl font-bold text-primary font-heading">₹1,949/sqft</div>
                <p className="text-sm text-muted-foreground font-body">Inc. GST</p>
              </CardHeader>
              <CardContent className="space-y-2">
                {/* Designs & Drawings */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setClassicDropdowns({...classicDropdowns, designs: !classicDropdowns.designs})}
                  >
                    <span className="font-medium">Designs & Drawings</span>
                    <span className="text-primary">{classicDropdowns.designs ? "-" : "+"}</span>
                  </button>
                  {classicDropdowns.designs && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Architectural Layout | 2D / 3D</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Structural Design</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>3D Elevation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>MEP Drawings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Digital site survey</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Isometric Drawings</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Structure */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setClassicDropdowns({...classicDropdowns, structure: !classicDropdowns.structure})}
                  >
                    <span className="font-medium">Structure</span>
                    <span className="text-primary">{classicDropdowns.structure ? "-" : "+"}</span>
                  </button>
                  {classicDropdowns.structure && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Steel – Sunvik or Kamadhenu Equivalent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Aggregates - 20mm & 40mm</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Cement- ACC, Dalmia or Equivalent 43 or 53 Grade</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Blocks- Standard Solid Concrete blocks. 6inch & 4inch</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>RCC Design Mix- M-20/25</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceiling Heights- 10.5 ft.</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Kitchen */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setClassicDropdowns({...classicDropdowns, kitchen: !classicDropdowns.kitchen})}
                  >
                    <span className="font-medium">Kitchen</span>
                    <span className="text-primary">{classicDropdowns.kitchen ? "-" : "+"}</span>
                  </button>
                  {classicDropdowns.kitchen && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceramic Wall Tiles -Upto Rs. 60/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Kitchen accessories- Upto Rs. 5000/- ISI Marked</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Kitchen Sink- Granite Sink worth Rs. 6,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Granite Kitchen tabletop of value Rs. 160/-</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bathroom */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setClassicDropdowns({...classicDropdowns, bathroom: !classicDropdowns.bathroom})}
                  >
                    <span className="font-medium">Bathroom</span>
                    <span className="text-primary">{classicDropdowns.bathroom ? "-" : "+"}</span>
                  </button>
                  {classicDropdowns.bathroom && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceramic Wall Tiles -Upto Rs. 50/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Bathroom accessories- Upto Rs. 4,000/- ISI Marked</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Sanitary ware- White Coloured worth Rs. 12,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>CP Fittings- Upto Rs. 12,000/-</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Doors & Windows */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setClassicDropdowns({...classicDropdowns, doors: !classicDropdowns.doors})}
                  >
                    <span className="font-medium">Doors & Windows</span>
                    <span className="text-primary">{classicDropdowns.doors ? "-" : "+"}</span>
                  </button>
                  {classicDropdowns.doors && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Main Door- Teak wood frame with flush shutter Rs. 22,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Internal Door- Sal wood frame with flush shutter Rs. 10,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Windows- UPVC windows Rs. 400/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Grill- MS Grill Rs. 320/- Sqft</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Painting */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setClassicDropdowns({...classicDropdowns, painting: !classicDropdowns.painting})}
                  >
                    <span className="font-medium">Painting</span>
                    <span className="text-primary">{classicDropdowns.painting ? "-" : "+"}</span>
                  </button>
                  {classicDropdowns.painting && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Internal- Asian Apcolite Premium Emulsion</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>External- Asian Apex Ultima</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceiling- Asian Apcolite Premium Emulsion</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Flooring */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setClassicDropdowns({...classicDropdowns, flooring: !classicDropdowns.flooring})}
                  >
                    <span className="font-medium">Flooring</span>
                    <span className="text-primary">{classicDropdowns.flooring ? "-" : "+"}</span>
                  </button>
                  {classicDropdowns.flooring && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Drawing, Dining, Kitchen, Bedrooms- Ceramic tiles Rs. 50/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Balcony, Sit-out, Staircase, Common areas- Anti-skid tiles Rs. 50/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Bathroom, Utility- Anti-skid tiles Rs. 50/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Parking- Parking tiles</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Electricals */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setClassicDropdowns({...classicDropdowns, electricals: !classicDropdowns.electricals})}
                  >
                    <span className="font-medium">Electricals</span>
                    <span className="text-primary">{classicDropdowns.electricals ? "-" : "+"}</span>
                  </button>
                  {classicDropdowns.electricals && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Wires- Havells or equivalent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Switches- Havells Crabtree or equivalent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Light Points, Fan Points, 15 A Points, 6 A Points as per requirement</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Miscellaneous */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setClassicDropdowns({...classicDropdowns, miscellaneous: !classicDropdowns.miscellaneous})}
                  >
                    <span className="font-medium">Miscellaneous</span>
                    <span className="text-primary">{classicDropdowns.miscellaneous ? "-" : "+"}</span>
                  </button>
                  {classicDropdowns.miscellaneous && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Overhead Tank- Plastic 750 ltrs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Staircase- Granite or Marble Rs. 80/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Handrails- SS Handrails</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Compound Wall- 5 ft height Solid Concrete blocks</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="card-hover text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-accent font-heading">Premium Package</CardTitle>
                <div className="text-3xl font-bold text-primary font-heading">₹2,199/sqft</div>
                <p className="text-sm text-muted-foreground font-body">Inc. GST</p>
              </CardHeader>
              <CardContent className="space-y-2">
                {/* Designs & Drawings */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setPremiumDropdowns({...premiumDropdowns, designs: !premiumDropdowns.designs})}
                  >
                    <span className="font-medium">Designs & Drawings</span>
                    <span className="text-primary">{premiumDropdowns.designs ? "-" : "+"}</span>
                  </button>
                  {premiumDropdowns.designs && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Architectural Layout | 2D / 3D</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Structural Design</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>3D Elevation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>MEP Drawings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Digital site survey</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Isometric Drawings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Interior Design Layouts</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Structure */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setPremiumDropdowns({...premiumDropdowns, structure: !premiumDropdowns.structure})}
                  >
                    <span className="font-medium">Structure</span>
                    <span className="text-primary">{premiumDropdowns.structure ? "-" : "+"}</span>
                  </button>
                  {premiumDropdowns.structure && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Steel - JSW or Equivalent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Aggregates - 20mm & 40mm</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Cement - Ultratech, or Equivalent 43 or 53 Grade</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Blocks - Standard Solid Concrete blocks. 6inch & 4inch</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>RCC Design Mix - M-20/25</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceiling Heights - 10.5 ft.</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Kitchen */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setPremiumDropdowns({...premiumDropdowns, kitchen: !premiumDropdowns.kitchen})}
                  >
                    <span className="font-medium">Kitchen</span>
                    <span className="text-primary">{premiumDropdowns.kitchen ? "-" : "+"}</span>
                  </button>
                  {premiumDropdowns.kitchen && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceramic Wall Tiles -Upto Rs. 80/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Kitchen accessories- Upto Rs. 6,000/- ISI Marked</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Kitchen Sink- Granite Sink worth Rs. 8,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Granite Kitchen tabletop of value Rs. 200/-</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bathroom */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setPremiumDropdowns({...premiumDropdowns, bathroom: !premiumDropdowns.bathroom})}
                  >
                    <span className="font-medium">Bathroom</span>
                    <span className="text-primary">{premiumDropdowns.bathroom ? "-" : "+"}</span>
                  </button>
                  {premiumDropdowns.bathroom && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceramic Wall Tiles -Upto Rs. 70/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Bathroom accessories- Upto Rs. 5,000/- ISI Marked</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Sanitary ware- White Coloured worth Rs. 15,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>CP Fittings- Upto Rs. 15,000/-</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Doors & Windows */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setPremiumDropdowns({...premiumDropdowns, doors: !premiumDropdowns.doors})}
                  >
                    <span className="font-medium">Doors & Windows</span>
                    <span className="text-primary">{premiumDropdowns.doors ? "-" : "+"}</span>
                  </button>
                  {premiumDropdowns.doors && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Main Door- Teak wood frame with flush shutter Rs. 25,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Internal Door- Sal wood frame with flush shutter Rs. 12,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Windows- UPVC windows Rs. 450/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Grill- MS Grill Rs. 350/- Sqft</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Painting */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setPremiumDropdowns({...premiumDropdowns, painting: !premiumDropdowns.painting})}
                  >
                    <span className="font-medium">Painting</span>
                    <span className="text-primary">{premiumDropdowns.painting ? "-" : "+"}</span>
                  </button>
                  {premiumDropdowns.painting && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Internal- Asian Royale Play</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>External- Asian Apex Ultima</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceiling- Asian Royale Play</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Flooring */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setPremiumDropdowns({...premiumDropdowns, flooring: !premiumDropdowns.flooring})}
                  >
                    <span className="font-medium">Flooring</span>
                    <span className="text-primary">{premiumDropdowns.flooring ? "-" : "+"}</span>
                  </button>
                  {premiumDropdowns.flooring && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Drawing, Dining, Kitchen, Bedrooms- Ceramic tiles Rs. 70/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Balcony, Sit-out, Staircase, Common areas- Anti-skid tiles Rs. 70/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Bathroom, Utility- Anti-skid tiles Rs. 70/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Parking- Parking tiles</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Electricals */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setPremiumDropdowns({...premiumDropdowns, electricals: !premiumDropdowns.electricals})}
                  >
                    <span className="font-medium">Electricals</span>
                    <span className="text-primary">{premiumDropdowns.electricals ? "-" : "+"}</span>
                  </button>
                  {premiumDropdowns.electricals && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Wires- Havells or equivalent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Switches- Legrand or equivalent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Light Points, Fan Points, 15 A Points, 6 A Points as per requirement</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Miscellaneous */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setPremiumDropdowns({...premiumDropdowns, miscellaneous: !premiumDropdowns.miscellaneous})}
                  >
                    <span className="font-medium">Miscellaneous</span>
                    <span className="text-primary">{premiumDropdowns.miscellaneous ? "-" : "+"}</span>
                  </button>
                  {premiumDropdowns.miscellaneous && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Overhead Tank- Plastic 1000 ltrs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Staircase- Granite or Marble Rs. 100/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Handrails- SS Handrails</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Compound Wall- 5 ft height Solid Concrete blocks</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Elite Package */}
            <Card className="card-hover text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-accent font-heading">Elite Package</CardTitle>
                <div className="text-3xl font-bold text-primary font-heading">₹2,399/sqft</div>
                <p className="text-sm text-muted-foreground font-body">Inc. GST</p>
              </CardHeader>
              <CardContent className="space-y-2">
                {/* Designs & Drawings */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setEliteDropdowns({...eliteDropdowns, designs: !eliteDropdowns.designs})}
                  >
                    <span className="font-medium">Designs & Drawings</span>
                    <span className="text-primary">{eliteDropdowns.designs ? "-" : "+"}</span>
                  </button>
                  {eliteDropdowns.designs && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Architectural Layout | 2D / 3D</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Structural Design</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>3D Elevation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>MEP Drawings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Digital site survey</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Isometric Drawings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Interior Design Layouts</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Landscape Design</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Structure */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setEliteDropdowns({...eliteDropdowns, structure: !eliteDropdowns.structure})}
                  >
                    <span className="font-medium">Structure</span>
                    <span className="text-primary">{eliteDropdowns.structure ? "-" : "+"}</span>
                  </button>
                  {eliteDropdowns.structure && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Steel - JSW or Equivalent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Aggregates - 20mm & 40mm</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Cement - Ultratech, or Equivalent 43 or 53 Grade</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Blocks - Standard Solid Concrete blocks. 6inch & 4inch</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>RCC Design Mix - M-20/25</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceiling Heights - 10.5 ft.</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Kitchen */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setEliteDropdowns({...eliteDropdowns, kitchen: !eliteDropdowns.kitchen})}
                  >
                    <span className="font-medium">Kitchen</span>
                    <span className="text-primary">{eliteDropdowns.kitchen ? "-" : "+"}</span>
                  </button>
                  {eliteDropdowns.kitchen && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceramic Wall Tiles -Upto Rs. 100/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Kitchen accessories- Upto Rs. 7,000/- ISI Marked</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Kitchen Sink- Granite Sink worth Rs. 10,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Granite Kitchen tabletop of value Rs. 250/-</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bathroom */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setEliteDropdowns({...eliteDropdowns, bathroom: !eliteDropdowns.bathroom})}
                  >
                    <span className="font-medium">Bathroom</span>
                    <span className="text-primary">{eliteDropdowns.bathroom ? "-" : "+"}</span>
                  </button>
                  {eliteDropdowns.bathroom && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceramic Wall Tiles -Upto Rs. 90/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Bathroom accessories- Upto Rs. 6,000/- ISI Marked</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Sanitary ware- White Coloured worth Rs. 18,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>CP Fittings- Upto Rs. 18,000/-</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Doors & Windows */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setEliteDropdowns({...eliteDropdowns, doors: !eliteDropdowns.doors})}
                  >
                    <span className="font-medium">Doors & Windows</span>
                    <span className="text-primary">{eliteDropdowns.doors ? "-" : "+"}</span>
                  </button>
                  {eliteDropdowns.doors && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Main Door- Teak wood frame with flush shutter Rs. 30,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Internal Door- Sal wood frame with flush shutter Rs. 15,000/-</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Windows- UPVC windows Rs. 500/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Grill- MS Grill Rs. 400/- Sqft</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Painting */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setEliteDropdowns({...eliteDropdowns, painting: !eliteDropdowns.painting})}
                  >
                    <span className="font-medium">Painting</span>
                    <span className="text-primary">{eliteDropdowns.painting ? "-" : "+"}</span>
                  </button>
                  {eliteDropdowns.painting && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Internal- Asian Royale Play Premium</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>External- Asian Apex Ultima</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Ceiling- Asian Royale Play Premium</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Flooring */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setEliteDropdowns({...eliteDropdowns, flooring: !eliteDropdowns.flooring})}
                  >
                    <span className="font-medium">Flooring</span>
                    <span className="text-primary">{eliteDropdowns.flooring ? "-" : "+"}</span>
                  </button>
                  {eliteDropdowns.flooring && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Drawing, Dining, Kitchen, Bedrooms- Ceramic tiles Rs. 90/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Balcony, Sit-out, Staircase, Common areas- Anti-skid tiles Rs. 90/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Bathroom, Utility- Anti-skid tiles Rs. 90/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Parking- Parking tiles</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Electricals */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setEliteDropdowns({...eliteDropdowns, electricals: !eliteDropdowns.electricals})}
                  >
                    <span className="font-medium">Electricals</span>
                    <span className="text-primary">{eliteDropdowns.electricals ? "-" : "+"}</span>
                  </button>
                  {eliteDropdowns.electricals && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Wires- Havells or equivalent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Switches- Legrand or equivalent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Light Points, Fan Points, 15 A Points, 6 A Points as per requirement</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Miscellaneous */}
                <div className="border rounded-lg">
                  <button 
                    className="w-full p-3 text-left flex justify-between items-center hover:bg-muted transition-colors text-foreground"
                    onClick={() => setEliteDropdowns({...eliteDropdowns, miscellaneous: !eliteDropdowns.miscellaneous})}
                  >
                    <span className="font-medium">Miscellaneous</span>
                    <span className="text-primary">{eliteDropdowns.miscellaneous ? "-" : "+"}</span>
                  </button>
                  {eliteDropdowns.miscellaneous && (
                    <div className="px-3 pb-3 space-y-2 text-sm text-left text-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Overhead Tank- Plastic 1000 ltrs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Staircase- Granite or Marble Rs. 120/- Sqft</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Handrails- SS Handrails</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Compound Wall- 6 ft height Solid Concrete blocks</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              className="btn-primary"
              onClick={() => window.open('tel:+919108867676', '_self')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Contact us for Custom Packages
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Explore Our <span className="text-gradient">Latest Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Showcasing our expertise in both construction and interior design.
            </p>
          </header>

          {/* Construction Projects */}
          <h3 className="text-3xl font-bold mb-8 text-center font-heading">Construction Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover overflow-hidden">
              <img src={project1} alt="Luxury Custom Home" className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-heading">Luxury Custom Home</CardTitle>
                <CardDescription className="font-body">Bangalore, India</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">A stunning custom-built luxury home featuring contemporary architecture and premium finishes.</p>
              </CardContent>
            </Card>
            <Card className="card-hover overflow-hidden">
              <img src={project2} alt="Modern Contemporary House" className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-heading">Modern Contemporary House</CardTitle>
                <CardDescription className="font-body">Electronic City, Bangalore</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Sleek modern design with clean lines, large windows, and innovative architectural elements.</p>
              </CardContent>
            </Card>
            <Card className="card-hover overflow-hidden">
              <img src={project5} alt="Premium Villa Construction" className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-heading">Premium Villa Construction</CardTitle>
                <CardDescription className="font-body">Whitefield, Bangalore</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">An exclusive villa project offering bespoke designs and high-end finishes for luxurious living.</p>
              </CardContent>
            </Card>
            <Card className="card-hover overflow-hidden">
              <img src={project1} alt="Eco-Friendly Home" className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-heading">Eco-Friendly Home</CardTitle>
                <CardDescription className="font-body">Sarjapur, Bangalore</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">A sustainable home built with eco-friendly materials and energy-efficient systems.</p>
              </CardContent>
            </Card>
            <Card className="card-hover overflow-hidden">
              <img src={project2} alt="Contemporary Residence" className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-heading">Contemporary Residence</CardTitle>
                <CardDescription className="font-body">Indiranagar, Bangalore</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Modern residential design with emphasis on natural light and open living spaces.</p>
              </CardContent>
            </Card>
            <Card className="card-hover overflow-hidden">
              <img src={project5} alt="Luxury Villa Project" className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-heading">Luxury Villa Project</CardTitle>
                <CardDescription className="font-body">Koramangala, Bangalore</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Complete luxury villa construction with premium materials and sophisticated design elements.</p>
              </CardContent>
            </Card>
          </div>

          {/* Interior Design Projects */}
          <h3 className="text-3xl font-bold mb-8 text-center font-heading">Interior Design Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover overflow-hidden">
              <img src={interior1} alt="Luxury Living Room Design" className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-heading">Luxury Living Room Design</CardTitle>
                <CardDescription className="font-body">Jayanagar, Bangalore</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Elegant luxury living room with sophisticated furniture, premium finishes, and ambient lighting.</p>
              </CardContent>
            </Card>
            <Card className="card-hover overflow-hidden">
              <img src={interior2} alt="Modern Kitchen Design" className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-heading">Modern Kitchen Design</CardTitle>
                <CardDescription className="font-body">HSR Layout, Bangalore</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Contemporary kitchen design with sleek cabinetry, modern appliances, and functional layout.</p>
              </CardContent>
            </Card>
            <Card className="card-hover overflow-hidden">
              <img src={interior3} alt="Contemporary Interior Design" className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-heading">Contemporary Interior Design</CardTitle>
                <CardDescription className="font-body">Basavanagudi, Bangalore</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Modern contemporary interior with clean lines, neutral tones, and sophisticated design elements.</p>
              </CardContent>
            </Card>
            <Card className="card-hover overflow-hidden">
              <img src={interior1} alt="Premium Living Space" className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-heading">Premium Living Space</CardTitle>
                <CardDescription className="font-body">Marathahalli, Bangalore</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Luxurious living space design with high-end furnishings and elegant decor elements.</p>
              </CardContent>
            </Card>
            <Card className="card-hover overflow-hidden">
              <img src={interior2} alt="Designer Kitchen Interior" className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-heading">Designer Kitchen Interior</CardTitle>
                <CardDescription className="font-body">MG Road, Bangalore</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Custom designer kitchen with premium materials, smart storage, and modern aesthetics.</p>
              </CardContent>
            </Card>
            <Card className="card-hover overflow-hidden">
              <img src={interior3} alt="Sophisticated Interior Design" className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-heading">Sophisticated Interior Design</CardTitle>
                <CardDescription className="font-body">JP Nagar, Bangalore</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Refined interior design with attention to detail, quality materials, and timeless elegance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Our Construction Steps are <span className="text-gradient">Simple and Easy to Understand</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              From initial consultation to project handover, we ensure a smooth and transparent process.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-4 font-heading">1</div>
                <CardTitle className="font-heading">First Interaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Clients requirements are clearly noted.</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-4 font-heading">2</div>
                <CardTitle className="font-heading">Technical Discussion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Educating our clients to help them build their planned project.</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-4 font-heading">3</div>
                <CardTitle className="font-heading">Design & Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Detailed architectural and interior designs are prepared based on client input.</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-4 font-heading">4</div>
                <CardTitle className="font-heading">Schedule & Contract</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Transparent project schedule and contract terms are finalized.</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-4 font-heading">5</div>
                <CardTitle className="font-heading">Manage Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Supervised construction with regular updates and quality checks.</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-4 font-heading">6</div>
                <CardTitle className="font-heading">Handover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Project completion and handover with all necessary documentation and warranties.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Contact Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Get in Touch with <span className="text-gradient">Anelia Designs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Have a question or want to start a project? Reach out to us!
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-heading">Our Office</h3>
              <div className="space-y-4 font-body">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <a 
                    href="https://www.google.com/maps/place/6,+N+Park+Rd,+Nehru+Nagar,+Seshadripuram,+Bengaluru,+Karnataka+560020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    6, N Park Rd, Nehru Nagar, Seshadripuram, Bengaluru, Karnataka 560020
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <a href="tel:+919108867676" className="hover:text-primary transition-colors">+91 9108867676</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <a href="mailto:sales@aneliadesign.com" className="hover:text-primary transition-colors">sales@aneliadesign.com</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 font-heading">Send us a Message</h3>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" className="input-field" />
                <Input type="email" placeholder="Your Email" className="input-field" />
                <Input type="text" placeholder="Subject" className="input-field" />
                <Textarea placeholder="Your Message" className="textarea-field" rows="5" />
                <Button type="submit" className="btn-primary w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 font-heading">Anelia Designs</h4>
            <p className="text-muted-foreground font-body">
              Building dreams and crafting beautiful interiors across Bangalore. Your trusted 
              partner for quality construction and design.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/aneliadesign?igsh=MXdjaXBsNzhuamh2cQ==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/anelia-design-studio-akshaya-constructions/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 font-heading">Services</h4>
            <ul className="space-y-2 font-body">
              <li><a href="#services" className="hover:text-primary transition-colors">Residential Construction</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Commercial Construction</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Interior Design</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Renovation & Remodeling</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2 font-body">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 font-heading">Contact Info</h4>
            <ul className="space-y-2 font-body">
              <li><a href="tel:+919108867676" className="hover:text-primary transition-colors">+91 9108867676</a></li>
              <li><a href="mailto:sales@aneliadesign.com" className="hover:text-primary transition-colors">sales@aneliadesign.com</a></li>
              <li>
                <a 
                  href="https://www.google.com/maps/place/6,+N+Park+Rd,+Nehru+Nagar,+Seshadripuram,+Bengaluru,+Karnataka+560020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  6, N Park Rd, Nehru Nagar, Seshadripuram, Bengaluru, Karnataka 560020
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center mt-8 border-t border-gray-70">
  <p className="text-sm text-muted-foreground font-body">
    © 2025 Anelia Designs — Where ideas dress up and go out in style.
  </p>
</div>
      </footer>

      <a 
        href="https://wa.me/919108867676" 
        className="whatsapp-float flex items-center justify-center"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-8 w-8" />
      </a>

    </div>
  );
}

export default App;