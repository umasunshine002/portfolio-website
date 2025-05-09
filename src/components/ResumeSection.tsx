import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const ResumeSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle resume download
  const handleDownload = () => {
    try {
      setIsLoading(true);
      const link = document.createElement("a");
      link.href = "/resume/UT_Resume_Optimized.docx";
      link.download = "UT_Resume_Optimized.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleView = () => {
    try {
      setIsLoading(true);
      const resumeUrl = encodeURIComponent(window.location.origin + "/resume/UT_Resume_Optimized.docx");
      window.open(`https://docs.google.com/viewer?url=${resumeUrl}&embedded=true`, "_blank");
    } catch (error) {
      console.error("Error viewing resume:", error);
    } finally {
      setIsLoading(false);
    }
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
                    <h3 className="font-medium text-xl">UT_Resume_Optimized.docx</h3>
                    <p className="text-muted-foreground text-sm">
                      Resume showcasing my experience, education, and skills
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-end mt-2">
                  <Button 
                    variant="outline" 
                    onClick={handleView}
                    className="flex items-center gap-2"
                    disabled={isLoading}
                  >
                    <Eye size={18} />
                    {isLoading ? "Loading..." : "View"}
                  </Button>
                  
                  <Button 
                    onClick={handleDownload}
                    className="flex items-center gap-2"
                    disabled={isLoading}
                  >
                    <Download size={18} />
                    {isLoading ? "Loading..." : "Download"}
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
