'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

export function CookiePolicyDialog() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="text-background/60 hover:text-background transition-colors text-sm"
      >
        Cookie Policy
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-black/10 rounded-lg max-w-3xl max-h-[80vh] w-full overflow-y-auto p-6 relative scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-white">Cookie Policy</h2>
        
        <div className="space-y-4 text-white-700 text-sm">
          <p>Last updated: December 25, 2024</p>
          
          <p>This Cookie Policy explains how Neo TrueNorth Hospital ("we", "us", or "our") uses cookies and similar tracking technologies on our website and mobile application. This policy should be read alongside our Privacy Policy.</p>
          
          <h3 className="text-lg font-semibold mt-6">1. What Are Cookies?</h3>
          <p>Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
          
          <h3 className="text-lg font-semibold mt-6">2. How We Use Cookies</h3>
          <p>We use cookies for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</li>
            <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works.</li>
            <li><strong>Functionality Cookies:</strong> These allow the website to remember choices you make (such as your language preference) and provide enhanced, personalized features.</li>
            <li><strong>Analytics Cookies:</strong> These help us analyze website traffic and user behavior to improve our services and user experience.</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6">3. Types of Cookies We Use</h3>
          <p>We use the following types of cookies:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser. These are essential for the website to function during your visit.</li>
            <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them. These help us recognize you when you return to our website.</li>
            <li><strong>First-Party Cookies:</strong> Cookies set directly by our website.</li>
            <li><strong>Third-Party Cookies:</strong> Cookies set by third-party services we use, such as analytics providers.</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6">4. Specific Cookies We Use</h3>
          <p>Below are examples of cookies we may use:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Authentication Cookies:</strong> To keep you logged in during your session</li>
            <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
            <li><strong>Analytics Cookies:</strong> To track website usage and performance metrics</li>
            <li><strong>Security Cookies:</strong> To detect and prevent security threats</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6">5. Managing Cookies</h3>
          <p>You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of our website.</p>
          <p>To manage cookies, you can:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Adjust your browser settings to refuse cookies</li>
            <li>Delete cookies that have already been set</li>
            <li>Use browser extensions or privacy tools to manage cookie preferences</li>
          </ul>
          <p className="mt-2"><strong>Note:</strong> Disabling certain cookies may impact the functionality of our website and your ability to access certain features.</p>
          
          <h3 className="text-lg font-semibold mt-6">6. Third-Party Cookies</h3>
          <p>Some cookies are placed by third-party services that appear on our pages. We do not control the setting of these cookies, so please check the third-party websites for more information about their cookies and how to manage them.</p>
          
          <h3 className="text-lg font-semibold mt-6">7. Updates to This Policy</h3>
          <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last updated" date.</p>
          
          <h3 className="text-lg font-semibold mt-6">8. Contact Us</h3>
          <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
          <ul className="list-none pl-0 space-y-2">
            <li>Email: <a href="mailto:contact@neotruenorthhospitals.com" className="text-blue-600 hover:underline">contact@neotruenorthhospitals.com</a></li>
            <li>Phone: <a href="tel:+919900089601" className="text-blue-600 hover:underline">+91 99000 89601</a></li>
            <li>Address: Sy. No. 110/4, Rebus Realm 1, Neeladri Rd, Doddathoguru, Electronic City, Bengaluru, Karnataka 560100</li>
          </ul>
          
          <div className="mt-8">
            <Button 
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

