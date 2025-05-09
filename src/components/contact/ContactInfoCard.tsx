
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

type ContactInfoCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  link?: string;
};

const ContactInfoCard = ({ icon, title, value, link }: ContactInfoCardProps) => {
  return (
    <Card className="card-hover border-l-4 border-l-primary overflow-hidden">
      <CardContent className="flex items-center p-4">
        <div className="bg-primary/10 rounded-full p-3 mr-4">
          {icon}
        </div>
        <div>
          <p className="font-medium">{title}</p>
          {link ? (
            <a href={link} className="text-primary hover:underline">
              {value}
            </a>
          ) : (
            <p className="text-muted-foreground">{value}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfoCard;
