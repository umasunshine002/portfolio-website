import { useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Shield, BookOpen, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import BackToHome from "@/components/BackToHome";
import ParticleBackground from "@/components/ParticleBackground";

const Insights = () => {
  useEffect(() => {
    document.title = "Insights | Uma Devi Thulluru";
  }, []);

  const articles = [
    {
      title: "Alternative Medicine Recommendation System",
      description: "Developed a cosine-similarity ML model recommending effective alternative medicines based on symptom–drug correlation to enhance data-driven healthcare.",
      gradient: "from-[hsl(var(--cyber-blue))] to-[hsl(var(--cyber-violet))]"
    },
    {
      title: "Sentiment Analysis using Hybrid Approach",
      description: "Created a CNN + LSTM + SVM hybrid ensemble achieving higher sentiment prediction accuracy on domain-specific datasets.",
      gradient: "from-[hsl(var(--cyber-violet))] to-[hsl(var(--neon-glow))]"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      icon: Shield,
      color: "hsl(var(--cyber-blue))"
    },
    {
      name: "Career Essentials in Data Analysis",
      issuer: "Microsoft & LinkedIn",
      icon: Brain,
      color: "hsl(var(--cyber-violet))"
    },
    {
      name: "Elements of AI",
      issuer: "University of Helsinki",
      icon: BookOpen,
      color: "hsl(var(--neon-glow))"
    },
    {
      name: "AI Essentials (Prompt Engineering & Multimodal AI)",
      issuer: "Google",
      icon: Brain,
      color: "hsl(200 100% 50%)"
    },
    {
      name: "Machine Learning Foundations",
      issuer: "AWS (AICTE Academy)",
      icon: Brain,
      color: "hsl(var(--cyber-blue))"
    },
    {
      name: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase & Co.",
      icon: Award,
      color: "hsl(var(--cyber-violet))"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2E] via-[#252B3D] to-[#1A1F2E] text-foreground overflow-x-hidden">
      <ParticleBackground />
      <BackToHome />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-32 pb-20 relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Research, writing, and continuous learning
          </p>
        </motion.div>

        {/* Articles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text text-center">Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                <Card className="glass-card p-8 h-full neon-border hover:neon-glow transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-5`} />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold gradient-text mb-4">{article.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{article.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text text-center">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="glass-card neon-border p-6 hover:neon-glow transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${cert.color}20` }}
                    >
                      <cert.icon className="w-8 h-8" style={{ color: cert.color }} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground mb-2">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Insights;
