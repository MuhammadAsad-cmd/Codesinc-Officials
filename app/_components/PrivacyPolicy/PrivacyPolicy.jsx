"use client";
import React from "react";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";

const PrivacyPolicy = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        className="relative h-[661px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/images/about-us-banner.jpg)" }}
      >
        <div className="container absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-2.5 mt-5 font-montserrat text-4xl font-extrabold uppercase text-white duration-500 ease-in-out hover:tracking-[7px] md:text-[48px] lg:leading-[52px]">
            Privacy Policy
          </h1>
          <button
            onClick={() => handleScroll("privacy")}
            className="mt-10 flex h-14 items-center justify-center whitespace-nowrap rounded-full border-2 border-white bg-transparent px-8 text-lg uppercase tracking-wider text-white duration-300 ease-in-out hover:border-transparent hover:bg-white hover:text-vividaqua md:px-[60px]"
          >
            Read Privacy Policy
          </button>
        </div>
      </div>

      <Breadcrumbs title="Privacy" breadcrumbPath="/privacy" />
      <div id="privacy" className="container mb-[5%] mt-[10%] px-4">
        <h1 className="mb-2.5 mt-5 font-montserrat text-3xl font-bold uppercase md:text-4xl">
          <span>Privacy Policy of </span>
          <span>Codesinc.com</span>
        </h1>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          This Application collects some Personal Data from its Users.
        </p>
        <h2 className="mb-2.5 mt-5 text-2xl font-bold uppercase md:text-[30px] md:leading-8">
          <span className="c14 c13">Data Controller and Owner</span>
        </h2>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          Codesinc
        </p>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          <span className="c9 c13">Owner contact email:</span>
          &nbsp;helpDesk@codes-inc.com .Among the types of Personal Data that
          this Application collects, by itself or through third parties, there
          are: email address, first name, last name, phone number, city,
          country, Cookies and Usage Data.
        </p>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          Other Personal Data collected may be described in other sections of
          this privacy policy or by dedicated explanation text contextually with
          the Data collection.
        </p>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          The Personal Data may be freely provided by the User, or collected
          automatically when using this Application.
        </p>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          Any use of Cookies - or of other tracking tools - by this Application
          or by the owners of third party services used by this Application,
          unless stated otherwise, serves to identify Users and remember their
          preferences, for the sole purpose of providing the service required by
          the User.
        </p>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          Failure to provide certain Personal Data may make it impossible for
          this Application to provide its services.
        </p>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          Users are responsible for any Personal Data of third parties obtained,
          published or shared through this Application and confirm that they
          have the third party&apos;s consent to provide the Data to the Owner.
        </p>
        <h2 className="mb-2.5 mt-5 text-2xl font-bold uppercase md:text-[30px] md:leading-8">
          <span className="c14 c13">Mode and place of processing the Data</span>
        </h2>
        <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
          <span className="c11">Methods of processing</span>
        </h3>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          The Data Controller processes the Data of Users in a proper manner and
          shall take appropriate security measures to prevent unauthorized
          access, disclosure, modification, or unauthorized destruction of the
          Data.
        </p>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          The Data processing is carried out using computers and/or IT enabled
          tools, following organizational procedures and modes strictly related
          to the purposes indicated. In addition to the Data Controller, in some
          cases, the Data may be accessible to certain types of persons in
          charge, involved with the operation of the site (administration,
          sales, marketing, legal, system administration) or external parties
          (such as third party technical service providers, mail carriers,
          hosting providers, IT companies, communications agencies) appointed,
          if necessary, as Data Processors by the Owner. The updated list of
          these parties may be requested from the Data Controller at any time.
        </p>
        <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
          <span className="c11">Place</span>
        </h3>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          The Data is processed at the Data Controller&apos;s operating offices
          and in any other places where the parties involved with the processing
          are located. For further information, please contact the Data
          Controller.
        </p>
        <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
          <span className="c11">Retention time</span>
        </h3>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          The Data is kept for the time necessary to provide the service
          requested by the User, or stated by the purposes outlined in this
          document, and the User can always request that the Data Controller
          suspend or remove the data.
        </p>
        <h2 className="mb-2.5 mt-5 text-2xl font-bold uppercase md:text-[30px] md:leading-8">
          <span className="c14 c13">The use of the collected Data</span>
        </h2>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          The Data concerning the User is collected to allow the Owner to
          provide its services, as well as for the following purposes:
          Contacting the User and Analytics.
        </p>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          The Personal Data used for each purpose is outlined in the specific
          sections of this document.
        </p>
        <h2 className="mb-2.5 mt-5 font-montserrat text-3xl font-bold uppercase md:text-4xl">
          <span>Detailed information on the processing of Personal Data</span>
        </h2>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          Personal Data is collected for the following purposes and using the
          following services:
        </p>
        <ul className="list-disc px-4">
          <li>
            <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
              Analytics
            </h3>
          </li>
          <li>
            <span>
              The services contained in this section enable the Owner to monitor
              and analyze web traffic and can be used to keep track of User
              behavior.
            </span>
          </li>
          <li>
            <h4 className="mb-2.5 mt-5 text-lg font-bold uppercase">
              <span className="c17 c13">Google Analytics (Google Inc.)</span>
            </h4>
          </li>
          <li>
            <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
              Google Analytics is a web analysis service provided by Google Inc.
              (“Google”). Google utilizes the Data collected to track and
              examine the use of this Application, to prepare reports on its
              activities and share them with other Google services.
            </p>
          </li>
          <li>
            <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
              Google may use the Data collected to contextualize and personalize
              the ads of its own advertising network.
            </p>
          </li>
          <li>
            <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
              Personal Data collected: Cookies and Usage Data.
            </p>
          </li>
          <li className="mb-2.5 font-montserrat text-base font-normal leading-7">
            <span>Place of processing: US – </span>
            <span className="c18">
              <a href="https://www.google.com/url?q=https://www.google.com/intl/en/policies/privacy/&amp;sa=D&amp;ust=1488963872549000&amp;usg=AFQjCNHY5SKTYGJRtAvJRThNTjsRFHr9Zw">
                Privacy Policy
              </a>
            </span>
            <span>&nbsp;– </span>
            <span>
              <a href="https://www.google.com/url?q=https://tools.google.com/dlpage/gaoptout?hl%3Den&amp;sa=D&amp;ust=1488963872550000&amp;usg=AFQjCNHxy-AOrif7pbRN33X19_c-Sk96sA">
                Opt Out
              </a>
            </span>
          </li>
          <li>
            <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
              <span className="c11">Contacting the User</span>
            </h3>
          </li>
          <li>
            <h4 className="mb-2.5 mt-5 text-lg font-bold uppercase">
              <span>Mailing list or newsletter (This Application)</span>
            </h4>
          </li>
          <li>
            <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
              By registering on the mailing list or for the newsletter, the
              User’s email address will be added to the contact list of those
              who may receive email messages containing information of
              commercial or promotional nature concerning this Application. Your
              email address might also be added to this list as a result of
              signing up to this Application or after making a purchase.
            </p>
          </li>
          <li>
            <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
              Personal Data collected: city, email address, first name, last
              name and phone number.
            </p>
          </li>
          <li className="c1">
            <h4 className="mb-2.5 mt-5 text-lg font-bold uppercase">
              <span>Contact form (This Application)</span>
            </h4>
          </li>
          <li>
            <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
              By filling in the contact form with their Data, the User
              authorizes this Application to use these details to reply to
              requests for information, quotes or any other kind of request as
              indicated by the form’s header.
            </p>
          </li>
          <li className="mb-2.5 font-montserrat text-base font-normal leading-7">
            <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
              Personal Data collected: city, country, email address, first name,
              last name and phone number.
            </p>
          </li>
        </ul>
        <h2 className="mb-2.5 mt-5 text-2xl font-bold uppercase md:text-[30px] md:leading-8">
          <span className="c14 c13">
            Additional information about Data collection and processing
          </span>
        </h2>
        <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
          <span className="c11">Legal action</span>
        </h3>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          The User&apos;s Personal Data may be used for legal purposes by the
          Data Controller, in Court or in the stages leading to possible legal
          action arising from improper use of this Application or the related
          services.
        </p>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          The User declares to be aware that the Data Controller may be required
          to reveal personal data upon request of public authorities.
        </p>
        <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
          <span className="c11">
            Additional information about User&apos;s Personal Data
          </span>
        </h3>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          In addition to the information contained in this privacy policy, this
          Application may provide the User with additional and contextual
          information concerning particular services or the collection and
          processing of Personal Data upon request.
        </p>
        <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
          <span className="c11">System logs and maintenance</span>
        </h3>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          For operation and maintenance purposes, this Application and any third
          party services may collect files that record interaction with this
          Application (System logs) or use for this purpose other Personal Data
          (such as IP Address).
        </p>
        <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
          <span className="c11">Information not contained in this policy</span>
        </h3>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          More details concerning the collection or processing of Personal Data
          may be requested from the Data Controller at any time. Please see the
          contact information at the beginning of this document.
        </p>
        <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
          <span className="c11">The rights of Users</span>
        </h3>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          Users have the right, at any time, to know whether their Personal Data
          has been stored and can consult the Data Controller to learn about
          their contents and origin, to verify their accuracy or to ask for them
          to be supplemented, cancelled, updated or corrected, or for their
          transformation into anonymous format or to block any data held in
          violation of the law, as well as to oppose their treatment for any and
          all legitimate reasons. Requests should be sent to the Data Controller
          at the contact information set out above.
        </p>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          This Application does not support “Do Not Track” requests.
        </p>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          To determine whether any of the third party services it uses honor the
          “Do Not Track” requests, please read their privacy policies.
        </p>
        <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
          <span className="c11">Changes to this privacy policy</span>
        </h3>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          The Data Controller reserves the right to make changes to this privacy
          policy at any time by giving notice to its Users on this page. It is
          strongly recommended to check this page often, referring to the date
          of the last modification listed at the bottom. If a User objects to
          any of the changes to the Policy, the User must cease using this
          Application and can request that the Data Controller remove the
          Personal Data. Unless stated otherwise, the then-current privacy
          policy applies to all Personal Data the Data Controller has about
          Users.
        </p>
        <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
          <span className="c11">Information about this privacy policy</span>
        </h3>
        <p className="mb-2.5 font-montserrat text-base font-normal leading-7">
          The Data Controller is responsible for this privacy policy, prepared
          starting from the modules provided by Iubenda and hosted on
          Iubenda&apos;s servers.
        </p>
        <h3 className="mb-2.5 font-montserrat text-2xl font-bold">
          <span className="c11">Definitions and legal references</span>
        </h3>
        <h4 className="mb-2.5 mt-5 text-lg font-bold uppercase">
          <span className="c17 c13">Personal Data (or Data)</span>
        </h4>
        <p className="font-montserrat text-base font-normal leading-7">
          Any information regarding a natural person, a legal person, an
          institution or an association, which is, or can be, identified, even
          indirectly, by reference to any other information, including a
          personal identification number.
        </p>
        <h4 className="mb-2.5 mt-5 text-lg font-bold uppercase">
          <span className="c17 c13">Usage Data</span>
        </h4>
        <p className="font-montserrat text-base font-normal leading-7">
          Information collected automatically from this Application (or third
          party services employed in this Application), which can include: the
          IP addresses or domain names of the computers utilized by the Users
          who use this Application, the URI addresses (Uniform Resource
          Identifier), the time of the request, the method utilized to submit
          the request to the server, the size of the file received in response,
          the numerical code indicating the status of the server&apos;s answer
          (successful outcome, error, etc.), the country of origin, the features
          of the browser and the operating system utilized by the User, the
          various time details per visit (e.g., the time spent on each page
          within the Application) and the details about the path followed within
          the Application with special reference to the sequence of pages
          visited, and other parameters about the device operating system and/or
          the User&apos;s IT environment.
        </p>
        <h4 className="mb-2.5 mt-5 text-lg font-bold uppercase">
          <span className="c17 c13">User</span>
        </h4>
        <p className="font-montserrat text-base font-normal leading-7">
          The individual using this Application, which must coincide with or be
          authorized by the Data Subject, to whom the Personal Data refers.
        </p>
        <h4 className="mb-2.5 mt-5 text-lg font-bold uppercase">
          <span className="c17 c13">Data Subject</span>
        </h4>
        <p className="font-montserrat text-base font-normal leading-7">
          The legal or natural person to whom the Personal Data refers.
        </p>
        <h4 className="mb-2.5 mt-5 text-lg font-bold uppercase">
          <span className="c17 c13">Data Processor (or Data Supervisor)</span>
        </h4>
        <p className="font-montserrat text-base font-normal leading-7">
          The natural person, legal person, public administration or any other
          body, association or organization authorized by the Data Controller to
          process the Personal Data in compliance with this privacy policy.
        </p>
        <h4 className="mb-2.5 mt-5 text-lg font-bold uppercase">
          <span className="c17 c13">Data Controller (or Owner)</span>
        </h4>
        <p className="font-montserrat text-base font-normal leading-7">
          The natural person, legal person, public administration or any other
          body, association or organization with the right, also jointly with
          another Data Controller, to make decisions regarding the purposes, and
          the methods of processing of Personal Data and the means used,
          including the security measures concerning the operation and use of
          this Application. The Data Controller, unless otherwise specified, is
          the Owner of this Application.
        </p>
        <h4 className="mb-2.5 mt-5 text-lg font-bold uppercase">
          <span className="c17 c13">This Application</span>
        </h4>
        <p className="font-montserrat text-base font-normal leading-7">
          The hardware or software tool by which the Personal Data of the User
          is collected.
        </p>
        <h4 className="mb-2.5 mt-5 text-lg font-bold uppercase">
          <span className="c17 c13">Cookies</span>
        </h4>
        <p className="font-montserrat text-base font-normal leading-7">
          Small piece of data stored in the User&apos;s device.
        </p>
        <hr className="my-4 border-t border-vividaqua" />
        <p className="c19">
          <span className="c15"></span>
        </p>
        <h4 className="mb-2.5 mt-5 text-lg font-bold uppercase">
          <span className="c17 c13">Legal information</span>
        </h4>
        <p className="font-montserrat text-base font-normal leading-7">
          Notice to European Users: this privacy statement has been prepared in
          fulfillment of the obligations under Art. 10 of EC Directive n.
          95/46/EC, and under the provisions of Directive 2002/58/EC, as revised
          by Directive 2009/136/EC, on the subject of Cookies.
        </p>
        <p className="font-montserrat text-base font-normal leading-7">
          This privacy policy relates solely to this Application
        </p>
        <p className="c27">
          <span className="c2"></span>
        </p>
        <br />
      </div>
    </>
  );
};

export default PrivacyPolicy;
