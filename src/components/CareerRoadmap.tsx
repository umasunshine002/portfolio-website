import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const CareerRoadmap = () => {
  const experiences = [
    {
      role: "Data Engineer Intern",
      company: "KBTS Technologies",
      location: "Ypsilanti, Michigan",
      period: "Jan 2025 – Apr 2025",
      color: "hsl(var(--cyber-blue))",
      description: "Built scalable GCP data pipelines with Kestra, dbt, Kafka. Deployed Looker dashboards and managed infrastructure with Terraform & Docker."
    },
    {
      role: "Graduate Assistant",
      company: "Eastern Michigan University",
      location: "Ypsilanti, Michigan",
      period: "Aug 2024 – Apr 2025",
      color: "hsl(var(--cyber-violet))",
      description: "Automated workflows with Python, SQL, Google Apps Script (~50% efficiency boost). Built Flask web apps and trained IT support teams."
    },
    {
      role: "Associate Consultant",
      company: "Applied Information Sciences (AIS)",
      location: "Hyderabad, Telangana",
      period: "Mar 2023 – Jun 2023",
      color: "hsl(var(--neon-glow))",
      description: "Engineered Employee Management System with MySQL/JDBC and Java Swing UI. Automated processes using Microsoft Power Platform (Apps, Automate, BI)."
    },
    {
      role: "Cloud Engineer Intern",
      company: "AICTE AWS Academy",
      location: "Hyderabad, Telangana",
      period: "Sep 2021 – Dec 2021",
      color: "hsl(200 100% 50%)",
      description: "Hands-on with EC2, S3, RDS, Lambda, CloudFormation. Implemented IaC, DevOps practices, cost optimization, and CloudWatch monitoring."
    }
  ];

  return (
    <section id="experience" className="relative py-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">Experience</h2>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex-shrink-0 w-[340px]"
            >
              <Card className="bg-background/40 border-border/30 p-4 h-full hover:bg-background/60 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${exp.color}15` }}
                  >
                    <Briefcase className="w-4 h-4" style={{ color: exp.color, opacity: 0.7 }} />
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <h3 className="text-sm font-bold text-foreground/90 mb-1">{exp.role}</h3>
                    <p className="text-xs text-muted-foreground mb-0.5">{exp.company}</p>
                    <p className="text-xs text-muted-foreground/70 mb-1">{exp.location}</p>
                    <p className="text-xs font-mono mb-2" style={{ color: exp.color, opacity: 0.7 }}>{exp.period}</p>
                    
                    <p className="text-xs text-muted-foreground/80 leading-relaxed line-clamp-3">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmap;
