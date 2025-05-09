
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Umadevi Thulluru',
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-block relative font-bold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary via-purple-500 mb-2">
            Let's Connect
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary/40 to-primary/80 rounded-full mt-2"></div>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out to me directly or use the contact form. I'm always open 
              to discussing new projects, opportunities, or partnerships.
            </p>
            
            <div className="space-y-6">
              <Card className="card-hover">
                <CardContent className="flex items-center p-4">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:umadevit67@gmail.com" className="text-primary hover:underline">
                      umadevit67@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="flex items-center p-4">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+17343836595" className="text-primary hover:underline">
                      (734) 383-6595
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="flex items-center p-4">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Novi, MI</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
