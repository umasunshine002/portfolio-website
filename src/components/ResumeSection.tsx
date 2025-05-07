
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-header">Resume</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Professional Resume</h3>
            <p className="text-muted-foreground mb-6">
              Check out my full resume to learn more about my education, work experience, 
              technical skills, and projects in detail. You can view it online or download 
              it for future reference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center gap-2" size="lg">
                <Download size={18} />
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                View Full Resume
              </Button>
            </div>
          </div>
          
          <Card className="overflow-hidden card-hover">
            <CardContent className="p-0">
              <div className="relative aspect-[3/4] w-full">
                <img 
                  src="/lovable-uploads/4807c77b-cd01-4313-ae59-fac016cf6a42.png" 
                  alt="Umadevi Thulluru's Resume" 
                  className="w-full h-full object-cover object-top"
                />
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
