import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import PrivacyPolicy from "@/app/_components/PrivacyPolicy/PrivacyPolicy";
import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <>
    <Head>
      <title>Privacy Policy | YourCompanyName</title>
      <meta
        name="description"
        content="Read our Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is important to us."
      />
      <meta
        name="keywords"
        content="Privacy Policy, Terms of Service, Contact Us, Personal Data Protection"
      />
      <meta name="author" content="YourCompanyName" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Privacy Policy | YourCompanyName"
      />
      <meta
        property="og:description"
        content="Read our Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is important to us."
      />
      <meta
        property="og:image"
        content="/images/logo.png" // Replace with your logo image
      />
      <meta property="og:url" content="https://yourwebsite.com/privacy-policy" />
      <meta property="og:site_name" content="YourCompanyName" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Privacy Policy | YourCompanyName"
      />
      <meta
        property="twitter:description"
        content="Read our Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is important to us."
      />
      <meta
        property="twitter:image"
        content="/images/logo.png" // Replace with your logo image
      />
    </Head>
      <PrivacyPolicy />
      <ContactForm />
    </>
  );
};

export default page;
