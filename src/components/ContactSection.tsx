import { useState, useEffect } from "react";
import { Mail, Terminal, Activity, MessageSquare, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const lines = [
      "$ system.status --contact-module",
      "✓ Contact interface initialized",
      "✓ Email protocol active",
      "✓ Response time: ~24 hours",
      "$ Ready for professional inquiries"
    ];

    lines.forEach((line, index) => {
      setTimeout(() => {
        setConsoleLines(prev => [...prev, line]);
      }, index * 500);
    });

    return () => clearInterval(timer);
  }, []);

  const contactStats = [
    {
      label: "Response Time",
      value: "< 24h",
      icon: Activity,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      label: "Availability",
      value: "Open",
      icon: Terminal,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      label: "Status",
      value: "Active",
      icon: MessageSquare,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-center mb-16">Contact Dashboard</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Status Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactStats.map((stat, index) => (
              <Card key={index} className="border border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                    <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Console Interface */}
            <Card className="border border-primary/20 bg-black/90 text-green-400 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-accent/20 border-b border-primary/20">
                <CardTitle className="font-mono text-sm flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  contact@umadevi-thulluru:~$ 
                  <span className="text-xs text-muted-foreground ml-auto">
                    {currentTime.toLocaleTimeString()}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-2 font-mono text-sm h-64 overflow-y-auto">
                {consoleLines.map((line, index) => (
                  <div 
                    key={index} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {line}
                  </div>
                ))}
                <div className="flex items-center">
                  <span>$ </span>
                  <div className="w-2 h-4 bg-green-400 animate-pulse ml-1"></div>
                </div>
              </CardContent>
            </Card>

            {/* Email Interface */}
            <Card className="border border-primary/20 bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm">
              <CardHeader className="border-b border-primary/20">
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="group cursor-pointer">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-primary/20 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:border-primary/40">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Primary Email</p>
                          <a 
                            href="mailto:umathulluru02@gmail.com" 
                            className="text-primary hover:underline text-sm"
                          >
                            umathulluru02@gmail.com
                          </a>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/30 border border-dashed border-primary/20">
                    <h4 className="font-medium mb-2 text-primary">Professional Inquiries</h4>
                    <p className="text-sm text-muted-foreground">
                      Open to Business Analyst, Data Analyst, and Data Engineering opportunities. 
                      Response guaranteed within 24 hours.
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-6 border-2 border-dashed border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Activity className="w-4 h-4 text-primary animate-pulse" />
                      </div>
                      <p className="text-sm font-medium">Always Monitoring</p>
                      <p className="text-xs text-muted-foreground">Real-time notification system active</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
