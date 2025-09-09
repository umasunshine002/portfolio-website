import { TrendingUp, BarChart3, Database, Target, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const DashboardMetrics = () => {
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) observer.unobserve(metricsRef.current);
    };
  }, []);

  const metrics = [
    {
      title: "Data Projects",
      value: "15+",
      change: "+25%",
      icon: Database,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Dashboards Built",
      value: "8",
      change: "+100%",
      icon: BarChart3,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Analysis Accuracy",
      value: "98.5%",
      change: "+5.2%",
      icon: Target,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Data Processing",
      value: "1M+",
      change: "+200%",
      icon: TrendingUp,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div 
          ref={metricsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 translate-y-10 transition-all duration-700"
        >
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="card-hover text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-full ${metric.bgColor} flex items-center justify-center mx-auto mb-2`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold">{metric.value}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                <p className={`text-xs font-medium ${metric.color}`}>{metric.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardMetrics;