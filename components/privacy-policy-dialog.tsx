'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

export function PrivacyPolicyDialog() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="text-background/60 hover:text-background transition-colors text-sm"
      >
        Privacy Policy
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl max-h-[80vh] w-full overflow-y-auto p-6 relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
        
        <div className="space-y-4 text-gray-700 text-sm">
          <p>Last updated: December 25, 2024</p>
          <p>At Neo TrueNorth Hospital, we are committed to protecting the privacy and security of everyone who interacts with our website, mobile application, physical centers, and healthcare services. This Privacy Policy explains how we collect, use, store, and safeguard information, and what rights you have over it.</p>
          
          <h3 className="text-lg font-semibold mt-6">1️⃣ Information We Collect</h3>
          <p>We may collect the following information when you use our services:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal Information:</strong> Full name, gender, date of birth, age, address, phone number, email</li>
            <li><strong>Medical / Health Information:</strong> Patient records, appointment history, prescriptions, reports, biometrics, uploaded medical files</li>
            <li><strong>Payment / Financial Information:</strong> Payment card details, UPI, billing records (processed securely through payment gateways)</li>
            <li><strong>Technical Information:</strong> IP address, browser data, cookies, device info, usage logs</li>
            <li><strong>Voluntary Inputs:</strong> Messages, forms, feedback, website chat interactions</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6">2️⃣ How We Use Your Information</h3>
          <p>We use your data to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide consultations, medical care, treatment, and follow-up services</li>
            <li>Book appointments and manage patient records</li>
            <li>Process payments, refunds, and invoices</li>
            <li>Personalize communication and improve service quality</li>
            <li>Send reminders, updates, and emergency notifications</li>
            <li>Conduct analytics, research, troubleshooting, and security maintenance</li>
            <li>Comply with medical, legal, and government regulations</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6">3️⃣ Cookies & Tracking</h3>
          <p>Our website uses cookies and tracking tools to enhance user experience. You can disable cookies in browser settings, though some features may stop working.</p>
          
          <h3 className="text-lg font-semibold mt-6">4️⃣ Information Sharing</h3>
          <p>We do <strong>NOT</strong> sell your personal data.</p>
          <p>We may share limited information with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Doctors, nurses, and authorized healthcare staff treating you</li>
            <li>Payment partners to complete billing</li>
            <li>Government agencies only when legally required</li>
            <li>Third-party service providers strictly for operational functionality</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6">5️⃣ Data Security</h3>
          <p>We use encryption, secure servers, access-control, and compliance-grade data systems to keep your information safe. While we do our best to protect your data, no online transmission is 100% foolproof.</p>
          
          <h3 className="text-lg font-semibold mt-6">6️⃣ Your Rights</h3>
          <p>You may request:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access to your medical records</li>
            <li>Updates/corrections to your personal information</li>
            <li>Deletion of data (where legally permitted)</li>
          </ul>
          <p>To contact us regarding data rights, email: <a href="mailto:contact@neotruenorthhospitals.com" className="text-blue-600 hover:underline">contact@neotruenorthhospitals.com</a></p>
          
          <h3 className="text-lg font-semibold mt-6">7️⃣ Changes to This Policy</h3>
          <p>We may update this privacy policy at any time. Continued use of our platform means you accept our updated terms.</p>
          
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
