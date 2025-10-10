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
      {/* Unified background matching hero */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--cyber-blue))]/5 to-[hsl(var(--background))]" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[hsl(var(--cyber-blue))] to-transparent rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-header">Experience</h2>
        </motion.div>

        {/* Vertical compact layout */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="glass-card neon-border p-5 hover:neon-glow transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${exp.color}20` }}
                  >
                    <Briefcase className="w-5 h-5" style={{ color: exp.color }} />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold gradient-text mb-0.5">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-0.5">{exp.company}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-xs text-muted-foreground">{exp.location}</p>
                      <span className="text-xs text-muted-foreground">•</span>
                      <p className="text-xs font-mono" style={{ color: exp.color }}>{exp.period}</p>
                    </div>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmap;
