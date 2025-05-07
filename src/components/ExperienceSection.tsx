
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
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
    tags: ["GCP", "Kestra", "dbt", "Kafka", "Terraform", "Docker", "ETL", "Looker Studio"]
  },
  {
    title: "Graduate Assistant",
    company: "Eastern Michigan University",
    location: "Ypsilanti, Michigan",
    period: "Aug 2024 – Apr 2025",
    description: [
      "Automated administrative workflows and academic scheduling using Python, SQL, and Google Apps Script, improving operational efficiency by ~50%.",
      "Developed and maintained internal web applications and dashboards using Flask and front-end technologies, enhancing the usability of academic tools and improving access to information.",
      "Developed automation scripts for scheduling and desk operations, reducing conflicts and overhead; trained a team in IT support and troubleshooting, ensuring smooth operations."
    ],
    tags: ["Python", "SQL", "Google Apps Script", "Flask", "Process Automation", "Web Development"]
  },
  {
    title: "Associate Consultant",
    company: "Applied Information Sciences (AIS)",
    location: "Hyderabad, Telangana",
    period: "Mar 2023 – Jun 2023",
    description: [
      "Engineered a Full-Stack Employee Management System using MySQL and JDBC, enhancing data access and management, and designed a responsive UI with Java Swing and JavaFX to improve user experience and reduce support queries.",
      "Leveraged Microsoft Power Platform (Power Apps, Power Automate, Power BI) to automate internal processes, streamline employee onboarding, and create automated workflows, significantly reducing manual tasks and cycle times.",
      "Developed Azure Data Integration by connecting Power Platform tools to SQL databases, enabling seamless updates across apps and reports, while contributing to an Agile environment through active sprint participation and collaborative development."
    ],
    tags: ["MySQL", "JDBC", "Java Swing", "JavaFX", "Power Platform", "Azure", "Agile"]
  },
  {
    title: "Cloud Engineer Intern",
    company: "AICTE AWS Academy Cloud Architecting",
    location: "Hyderabad, Telangana",
    period: "Sep 2021 – Dec 2021",
    description: [
      "Gaining hands-on experience with core services like EC2, S3, RDS, IAM, Lambda, and CloudFormation while designing and deploying reliable, secure cloud-based solutions and microservices.",
      "Implemented Infrastructure as Code (IaC) using CloudFormation templates, explored DevOps practices, cost optimization, and monitoring with AWS CloudWatch."
    ],
    tags: ["AWS", "EC2", "S3", "RDS", "IAM", "Lambda", "CloudFormation", "IaC", "CloudWatch"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-header">Work Experience</h2>
        
        <div className="space-y-8 relative">
          {/* Line connecting experiences */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`flex flex-col md:grid md:grid-cols-5 gap-6 md:gap-10 relative`}>
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
              
              {/* Date and Company */}
              <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:order-last md:pl-10'}`}>
                <div className="flex items-center md:justify-end gap-2 text-sm mb-2">
                  <Calendar size={16} className="text-primary" />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p className="text-muted-foreground">{exp.location}</p>
              </div>
              
              {/* Experience Details */}
              <Card className={`md:col-span-3 card-hover ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:order-first'}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={18} className="text-primary" />
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 mb-4 text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
