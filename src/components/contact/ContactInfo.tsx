
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import ContactInfoCard from "./ContactInfoCard";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <MessageCircle className="mr-2 text-primary" />
          Contact Information
        </h3>
        <p className="text-muted-foreground">
          Feel free to reach out for opportunities, questions, or just to say hello!
        </p>
      </div>
      
      <ContactInfoCard
        icon={<Mail className="text-primary" size={20} />}
        title="Email"
        value="umadevit67@gmail.com"
        link="mailto:umadevit67@gmail.com"
      />
      
      <ContactInfoCard
        icon={<Phone className="text-primary" size={20} />}
        title="Phone"
        value="(734) 383-6595"
        link="tel:+17343836595"
      />
      
      <ContactInfoCard
        icon={<MapPin className="text-primary" size={20} />}
        title="Location"
        value="Novi, MI"
      />
    </div>
  );
};

export default ContactInfo;
