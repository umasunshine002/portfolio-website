
import { FileText, Download, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ResumeSection = () => {
  // Function to handle resume download
  const handleDownload = () => {
    // Create a link to the resume file
    const link = document.createElement("a");
    link.href = "/lovable-uploads/4807c77b-cd01-4313-ae59-fac016cf6a42.png";
    link.download = "Umadevi_Thulluru_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-center mb-12">My Resume</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              <FileText size={16} />
              <span>Professional Experience</span>
            </div>
            
            <h3 className="text-3xl font-bold">Ready to Bring Value to Your Organization</h3>
            
            <p className="text-muted-foreground text-lg">
              Check out my full resume to learn more about my education, work experience, 
              technical skills, and projects in detail. You can view it online or download 
              it for future reference.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-baseline gap-2">
                <ArrowRight size={14} className="text-primary mt-1 flex-shrink-0" />
                <span>Data Engineering & Cloud Expertise</span>
              </li>
              <li className="flex items-baseline gap-2">
                <ArrowRight size={14} className="text-primary mt-1 flex-shrink-0" />
                <span>Full Stack Development Skills</span>
              </li>
              <li className="flex items-baseline gap-2">
                <ArrowRight size={14} className="text-primary mt-1 flex-shrink-0" />
                <span>Process Automation & Optimization</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="flex items-center gap-2" 
                size="lg" 
                onClick={handleDownload}
              >
                <Download size={18} />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => window.open("/lovable-uploads/4807c77b-cd01-4313-ae59-fac016cf6a42.png", "_blank")}
              >
                <Eye size={18} className="mr-2" />
                View Full Resume
                <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Button>
            </div>
          </div>
          
          <Card className="overflow-hidden card-hover transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-muted">
            <CardContent className="p-0">
              <div className="relative aspect-[3/4] w-full group cursor-pointer" onClick={() => window.open("/lovable-uploads/4807c77b-cd01-4313-ae59-fac016cf6a42.png", "_blank")}>
                <img 
                  src="/lovable-uploads/4807c77b-cd01-4313-ae59-fac016cf6a42.png" 
                  alt="Umadevi Thulluru's Resume" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="outline" className="text-white border-white">
                    <Eye size={18} className="mr-2" />
                    View Resume
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
