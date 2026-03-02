import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import boxSiege from '@/assets/box-siege.jpg';

const technologies = ['Unity'];
const tags = ['PvP', 'Co-Op'];

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`section-header transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="section-title text-foreground">
            Our <span className="gradient-text">Games</span>
          </h2>
          <div className="section-underline" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Explore our portfolio of creative game projects
          </p>
        </div>

        {/* Game Card */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="card-hover bg-muted/50 rounded-2xl overflow-hidden border border-border">
            <div className="flex flex-col lg:flex-row">
              {/* Game Image (FIX 16:9) */}
                <div className="lg:w-1/2 w-full relative group overflow-hidden lg:aspect-video">
                  <img
                    src={boxSiege}
                    alt="Box Siege"
                    className="w-full h-full object-cover"
                  />

                  {/* Platform Tag */}
                  <div className="absolute top-4 left-4 bg-primary px-4 py-1 rounded-full text-sm font-semibold text-foreground">
                    PC
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>


              {/* Game Info */}
              <div className="lg:w-1/2 p-8 lg:p-10">
                <h3 className="text-3xl font-orbitron font-bold gradient-text mb-4">
                  Box Siege
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-secondary/20 text-secondary rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Box Siege is a dynamic 2D action platformer game, in the form of
                  a local cooperative PvP mode. Immerse yourself in the ultimate
                  PvP co-op 2D experience with Box Siege, exclusively available
                  for Windows PC.
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground mb-3">
                    Built with:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground tech-logo cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="https://equinoxinteractive.github.io/BoxSiege/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary font-orbitron text-sm"
                >
                  View Case Study
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
