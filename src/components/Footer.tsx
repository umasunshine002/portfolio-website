import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="w-1/4">
            <img 
              src="/your-logo.png" 
              alt="Logo" 
              className="h-12 w-auto"
            />
          </div>
          <div className="w-3/4 text-right text-sm text-muted-foreground">
            <p>© Umadevi Thulluru. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
