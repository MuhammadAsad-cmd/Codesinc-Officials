import ContactForm from "@/app/_components/Common/Contact/ContactForm";
import Terms from "@/app/_components/Terms/Terms";
import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <>
    <Head>
      <title>Terms and Conditions | YourCompanyName</title>
      <meta
        name="description"
        content="Read the terms and conditions for using our services. These terms govern the relationship between YourCompanyName and our clients."
      />
      <meta
        name="keywords"
        content="Terms and Conditions, Legal Terms, Company Terms, Service Agreement, Client Agreement"
      />
      <meta name="author" content="YourCompanyName" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Terms and Conditions | YourCompanyName"
      />
      <meta
        property="og:description"
        content="Read the terms and conditions for using our services. These terms govern the relationship between YourCompanyName and our clients."
      />
      <meta
        property="og:image"
        content="/images/logos/terms-icon.png" // Replace with your relevant image
      />
      <meta property="og:url" content="https://yourwebsite.com/terms" />
      <meta property="og:site_name" content="YourCompanyName" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Terms and Conditions | YourCompanyName"
      />
      <meta
        property="twitter:description"
        content="Read the terms and conditions for using our services. These terms govern the relationship between YourCompanyName and our clients."
      />
      <meta
        property="twitter:image"
        content="/images/logos/terms-icon.png" // Replace with your relevant image
      />
    </Head>
      <Terms />
      <ContactForm />
    </>
  );
};

export default page;
