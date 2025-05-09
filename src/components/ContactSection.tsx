import { MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-block relative font-bold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary via-purple-500 mb-2">
            Let's Connect
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary/40 to-primary/80 rounded-full mt-2"></div>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a question or want to collaborate? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
