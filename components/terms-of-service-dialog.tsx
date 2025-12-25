'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

export function TermsOfServiceDialog() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="text-background/60 hover:text-background transition-colors text-sm"
      >
        Terms of Service
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
        
        <h2 className="text-2xl font-bold mb-6 text-white">Terms of Service</h2>
        
        <div className="space-y-4 text-white-700 text-sm">
          <p>Last updated: December 25, 2024</p>
          
          <p>Welcome to Neo TrueNorth Hospital. These Terms of Service outline the rules and regulations for the use of our services.</p>
          
          <h3 className="text-lg font-semibold mt-6">1. Acceptance of Terms</h3>
          <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>
          
          <h3 className="text-lg font-semibold mt-6">2. Services Provided</h3>
          <p>We provide healthcare services including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Medical consultations and treatments</li>
            <li>Diagnostic services</li>
            <li>Emergency care</li>
            <li>Health check-ups</li>
            <li>Online appointment booking</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6">3. Patient Responsibilities</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide accurate and complete medical history</li>
            <li>Follow the prescribed treatment plans</li>
            <li>Keep appointments or provide adequate notice for cancellations</li>
            <li>Pay for services as per the hospital's payment policies</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6">4. Privacy</h3>
          <p>Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the service and informs users of our data collection practices.</p>
          
          <h3 className="text-lg font-semibold mt-6">5. Limitation of Liability</h3>
          <p>Neo TrueNorth Hospital shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
          
          <h3 className="text-lg font-semibold mt-6">6. Changes to Terms</h3>
          <p>We reserve the right to modify these terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.</p>
          
          <h3 className="text-lg font-semibold mt-6">7. Contact Us</h3>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:contact@neotruenorthhospitals.com" className="text-blue-600 hover:underline">contact@neotruenorthhospitals.com</a></p>
          
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
