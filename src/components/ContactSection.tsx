
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize react-hook-form with zod resolver
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_xh6w1jq',  // EmailJS service ID
        'template_v8kxz0i', // EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: 'Umadevi Thulluru',
        },
        'X1v7l4_mZBiOw-V91'  // EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Message not sent",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <MessageCircle className="mr-2 text-primary" />
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Feel free to reach out for opportunities, questions, or just to say hello!
              </p>
            </div>
            
            <Card className="card-hover border-l-4 border-l-primary overflow-hidden">
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
            
            <Card className="card-hover border-l-4 border-l-primary overflow-hidden">
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
            
            <Card className="card-hover border-l-4 border-l-primary overflow-hidden">
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
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="card-hover shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Send className="mr-2 text-primary" size={20} />
                  Send Me a Message
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can I help you?" 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
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
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
