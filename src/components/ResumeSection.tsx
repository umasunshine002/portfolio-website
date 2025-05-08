
import { FileText, Download, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ResumeSection = () => {
  // Function to handle resume download
  const handleDownload = () => {
    // Create a link to the resume file
    const link = document.createElement("a");
    link.href = "/lovable-uploads/26f65743-24ea-41d3-9b8d-30d514659169.png";
    link.download = "Umadevi_Thulluru_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open("/lovable-uploads/26f65743-24ea-41d3-9b8d-30d514659169.png", "_blank");
  };

  return (
    <section id="resume" className="py-16 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-center mb-12">My Resume</h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden border border-muted shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FileText size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl">Umadevi_Thulluru_Resume.pdf</h3>
                    <p className="text-muted-foreground text-sm">Resume showcasing my experience, education, and skills</p>
                  </div>
                </div>
                
                <div className="flex justify-center my-4">
                  <img 
                    src="/lovable-uploads/26f65743-24ea-41d3-9b8d-30d514659169.png" 
                    alt="Umadevi Thulluru Resume" 
                    className="max-w-full h-auto border border-muted rounded-md shadow-sm" 
                  />
                </div>
                
                <div className="flex gap-4 justify-end mt-2">
                  <Button 
                    variant="outline" 
                    onClick={handleView}
                    className="flex items-center gap-2"
                  >
                    <Eye size={18} />
                    View
                  </Button>
                  
                  <Button 
                    onClick={handleDownload}
                    className="flex items-center gap-2"
                  >
                    <Download size={18} />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
