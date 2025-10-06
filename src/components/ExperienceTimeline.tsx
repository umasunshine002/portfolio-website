import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer Intern",
    company: "KBTS Technologies",
    location: "Ypsilanti, Michigan",
    period: "Jan 2025 – Apr 2025",
    color: "hsl(var(--cyber-blue))",
    achievements: [
      "Built scalable data pipelines on GCP using Kestra, dbt, and Kafka for real-time & batch processing",
      "Designed analytics-ready data models with dynamic Looker Studio dashboards",
      "Provisioned cloud infrastructure with Terraform and containerized services using Docker"
    ],
    tech: ["GCP", "Kestra", "dbt", "Kafka", "Terraform", "Docker", "Looker Studio"],
    impact: {
      performance: 95,
      scalability: 90,
      efficiency: 87
    }
  },
  {
    title: "Graduate Assistant",
    company: "Eastern Michigan University",
    location: "Ypsilanti, Michigan",
    period: "Aug 2024 – Dec 2024",
    color: "hsl(var(--cyber-violet))",
    achievements: [
      "Assisted with research projects involving data analysis, statistical modeling & ML algorithms",
      "Conducted data preprocessing, visualization, and implemented machine learning models",
      "Collaborated on interdisciplinary research requiring large-scale dataset analysis"
    ],
    tech: ["Python", "R", "Statistical Analysis", "Data Viz", "Machine Learning"],
    impact: {
      performance: 90,
      scalability: 85,
      efficiency: 88
    }
  },
  {
    title: "Associate Consultant",
    company: "Applied Information Sciences (AIS)",
    location: "Hyderabad, Telangana",
    period: "Mar 2023 – Jun 2023",
    color: "hsl(var(--neon-glow))",
    achievements: [
      "Engineered full-stack Employee Management System with MySQL, JDBC, Java Swing & JavaFX",
      "Leveraged Microsoft Power Platform to automate workflows and reduce manual tasks",
      "Developed real-time data integration connecting Power Platform tools to SQL databases"
    ],
    tech: ["MySQL", "JDBC", "Java Swing", "JavaFX", "Power Platform", "Azure", "Agile"],
    impact: {
      performance: 88,
      scalability: 85,
      efficiency: 94
    }
  }
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[hsl(var(--cyber-blue))] rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-header text-center mb-8">Experience Journey</h2>
          <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-20">
            Building intelligent systems across data engineering, ML, and cloud infrastructure
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[hsl(var(--cyber-blue))] via-[hsl(var(--cyber-violet))] to-[hsl(var(--neon-glow))]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <Card className="glass-card neon-border p-8 hover:scale-105 transition-all duration-500">
                  {/* Company header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${exp.color}20` }}
                      >
                        <Building2 className="w-5 h-5" style={{ color: exp.color }} />
                      </div>
                      <h3 className="text-2xl font-bold gradient-text">{exp.company}</h3>
                    </div>
                    <p className="text-xl font-semibold mb-2" style={{ color: exp.color }}>
                      {exp.title}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                        <div className={`text-sm leading-relaxed ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          • {achievement}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                    {exp.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{ 
                          backgroundColor: `${exp.color}15`,
                          borderColor: `${exp.color}40`,
                          color: exp.color
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact metrics */}
                  <div className="mt-4 pt-4 border-t border-primary/20 flex justify-around">
                    <div className="text-center">
                      <TrendingUp className="w-4 h-4 mx-auto mb-1" style={{ color: exp.color }} />
                      <div className="text-lg font-bold" style={{ color: exp.color }}>
                        {exp.impact.performance}%
                      </div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-4 h-4 mx-auto mb-1" style={{ color: exp.color }} />
                      <div className="text-lg font-bold" style={{ color: exp.color }}>
                        {exp.impact.scalability}%
                      </div>
                      <div className="text-xs text-muted-foreground">Scalability</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-4 h-4 mx-auto mb-1" style={{ color: exp.color }} />
                      <div className="text-lg font-bold" style={{ color: exp.color }}>
                        {exp.impact.efficiency}%
                      </div>
                      <div className="text-xs text-muted-foreground">Efficiency</div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Timeline dot */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background z-20 neon-glow"
                style={{ backgroundColor: exp.color }}
              />

              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
