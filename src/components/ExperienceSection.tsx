import { Briefcase, Calendar, Building, MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
  logoColor?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Data Engineer Intern",
    company: "KBTS Technologies",
    location: "Ypsilanti, Michigan",
    period: "Jan 2025 – Apr 2025",
    description: [
      "Built and automated scalable, end-to-end data pipelines on Google Cloud Platform (GCP) using Kestra, dbt, and Apache Kafka for both real-time and batch data processing.",
      "Designed and deployed analytics-ready data models and ETL workflows; visualized insights through dynamic dashboards in Looker Studio to support data-driven decision-making.",
      "Provisioned and managed cloud infrastructure with Terraform, and deployed containerized services using Docker, improving reliability, consistency, and scalability."
    ],
    tags: ["GCP", "Kestra", "dbt", "Kafka", "Terraform", "Docker", "ETL", "Looker Studio"],
    logoColor: "#4285F4" // Google Cloud blue
  },
  {
    title: "Associate Consultant",
    company: "Applied Information Sciences (AIS)",
    location: "Hyderabad, Telangana",
    period: "Mar 2023 – Jun 2023",
    description: [
      "Engineered a Full-Stack Employee Management System using MySQL and JDBC, enhancing data access and management, and designed a responsive UI with Java Swing and JavaFX to improve user experience and reduce support queries.",
      "Leveraged Microsoft Power Platform (Power Apps, Power Automate, Power BI) to automate internal processes, streamline employee onboarding, and create automated workflows, significantly reducing manual tasks and cycle times.",
      "Developed Real-time Data Integration by connecting Power Platform tools to SQL databases, enabling seamless updates across apps and reports, while contributing to an Agile environment through active sprint participation and collaborative development."
    ],
    tags: ["MySQL", "JDBC", "Java Swing", "JavaFX", "Power Platform", "Azure", "Agile"],
    logoColor: "#0078D4" // Microsoft blue
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-center mb-16">
          Work Experience
        </h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-l-4 hover:shadow-lg card-hover"
              style={{ borderLeftColor: exp.logoColor }}
            >
              <CardContent className="p-0">
                <div className="p-6 sm:p-8">
                  {/* Company and Period Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2 rounded-full" 
                        style={{ backgroundColor: `${exp.logoColor}20` }}
                      >
                        <Building size={24} style={{ color: exp.logoColor }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 gap-1 text-sm font-medium bg-muted/50 py-1 px-3 rounded-full">
                      <Calendar size={14} className="text-primary mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  {/* Job Title */}
                  <div className="flex items-center gap-2 mb-3 pl-1 md:pl-12">
                    <Briefcase size={16} className="text-primary" />
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                  </div>
                  {/* Description */}
                  <div className="pl-1 md:pl-12 mb-6">
                    <ul className="space-y-3 text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <ChevronRight size={16} className="mt-1 mr-2 text-primary flex-shrink-0" />
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Tags */}
                  <div className="pl-1 md:pl-12 flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-medium py-1 px-2 rounded-full"
                        style={{ 
                          backgroundColor: `${exp.logoColor}15`, 
                          color: exp.logoColor
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
