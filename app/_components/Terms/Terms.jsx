"use client";
import React from "react";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import Image from "next/image";

const Terms = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        className="h-full min-h-screen w-full bg-cover bg-center bg-no-repeat py-12 md:py-[170px]"
        style={{ backgroundImage: "url(/images/cms/terms-bg.jpg)" }}
      >
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-8 px-4 text-white lg:flex-row lg:text-left">
          <div className="md:w-1/2">
            <h1 className="text-[48px] font-normal leading-[52px] max-md:text-center">
              Terms and Condition
            </h1>
            <p className="my-[30px] text-lg font-normal max-md:text-center">
              By accessing or using the Website, you agree that you have read,
              understood, and agreed to be bound by this Privacy Policy and the
              Terms of Use. These Terms describe the terms of the agreement
              between you and Codesinc with respect to your use of this website.
              Please be aware, however, that Codesinc may periodically update
              and modify these Terms as the company considers necessary in its
              sole discretion.
            </p>
            <div>
              <button
                onClick={() => handleScroll("read")}
                className="flex h-[52px] items-center justify-center bg-[#f35828] px-14 py-2 text-2xl font-medium uppercase text-white max-md:mx-auto"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              width={317}
              height={340}
              unoptimized
              priority
              src="/images/cms/terms-right.png"
              alt="Terms and Conditions"
              className="max-lg:h-full max-lg:w-full md:mx-auto"
            />
          </div>
        </div>
      </div>

      <Breadcrumbs title="Terms and Condition" breadcrumbPath="/terms" />
      <div id="read" className="bg-[#fafafa]">
        <div className="container px-4">
          <div className="mb-[5%] mt-[2%]">
            <h2 className="mb-5 mt-10 text-2xl leading-7 text-[#333333]">
              <span className="c14 c13">PRIVACY &amp; USE OF INFORMATION</span>
            </h2>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                The Codesinc Privacy Policy applies to any registration
                information as well as other information about you that you
                might send or give to Codesinc via this website.
              </span>
            </p>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                As permitted by the applicable law, the personal information
                collected in connection with the Website may be used for the
                following purposes:
              </span>
            </p>
            <ul className="list-disc px-4 pl-6">
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  To improve the performance of the service and to support our
                  business activities.
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  To protect the security and integrity of our services, content
                  and transactions.
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  To support and customize service according to your needs and
                  interests based on the reviews, comments and feedback provided
                  to us.
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  To provide you with relevant information, products, or
                  services that you request from us through a streamlined
                  customer support.
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  For benchmarking, data analysis, audits, developing new
                  products, facilitating product, software and applications
                  development, improving our services, conducting research,
                  analysis, studies or surveys, identifying usage trends, as
                  well as for other analytics purposes.
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  For data analysis, benchmarking, researching and creating new
                  products including software, improving our services,
                  identifying usage patterns, and other research purposes.
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  For any other purpose disclosed to you at the time when we
                  collect the information provided by you.
                </p>
              </li>
            </ul>

            <h2 className="mb-5 mt-10 text-2xl leading-7 text-[#333333]">
              <span className="c14 c13">
                INTELLECTUAL PROPERTY RIGHTS AND USE OF THIS WEBSITE
              </span>
            </h2>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                This website is under the control of Codesinc, which runs it
                directly. Codesinc assumes the entire ownership of the text,
                images, illustrations, graphics, logos, digital downloads, data,
                software, headers, icons, scripts, audio clips, and video clips.
                All such content is covered by copyright, trademark, service
                mark, and/or other intellectual property laws (which are
                governed by and subject to copyright laws and treaty provisions,
                privacy and publicity laws, and communication regulations and
                statutes).
              </span>
            </p>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                The Providers who have granted Codesinc with a license, another
                means of making their content accessible, or the right to market
                their goods and/or services are the owners and controllers of
                the Content. You may not use it in any way that could confuse
                Codesinc’s clients, other website visitors, or the general
                public. All additional copyright warnings, details, or
                limitations that are included in or with any Content will be
                adhered to by you.
              </span>
            </p>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                Except as otherwise stated, you are not permitted to use the
                Content for commercial purposes without the prior written
                consent of Codesinc or the Providers to copy, reproduce,
                duplicate, republish, upload, post, transmit, distribute, sell,
                or otherwise exploit it in any way (including by email or other
                electronic means).
              </span>
            </p>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                Without the prior written consent of Codesinc or the Providers,
                you are strictly prohibited from altering the content, using it
                on any other linked website or networked computer environment,
                or using it for any other reason than personal, noncommercial
                use. By doing so, you are violating the intellectual property
                rights and proprietary rights of the content owners.
              </span>
            </p>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                Under copyright and trademark laws, violations of these laws
                (referred to as &quot;infringement&quot;) may carry serious
                civil liabilities or criminal penalties. You understand that
                intentionally violating these Terms by copying, using, or
                modifying any of the content, copyrights, logos, service marks,
                or other intellectual property on this website is prohibited.
              </span>
            </p>

            <h2
              className="mb-5 mt-10 text-2xl leading-7 text-[#333333]"
              id="h.60mymdjzitrm"
            >
              <span className="c14 c13">PROHIBITED ACTIVITIES</span>
            </h2>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                You agree not to use this website for any of the following
                purposes, which are expressly prohibited by this website&quot;s
                terms of service:
              </span>
            </p>
            <ul className="list-[lower-alpha] pl-6 marker:font-normal marker:text-gray878">
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  Engage in any activity that places an unreasonably high or
                  disproportionately large burden on the infrastructure or
                  resources of the website, or consumes valuable time for them,
                  such as sending or encouraging the distribution of
                  &quot;spam,&quot; &quot;junk mail,&quot; chain letters, or
                  other similar unsolicited or illegal mass e-mailing
                  techniques.
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  Use the IDs, numbers, or passwords for any unauthorized
                  purpose.
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  Access or attempt to access Codesinc&quot;s information
                  technology systems, environments, networks, files, data, or
                  accounts using the IDs, numbers, or passwords.
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  Disclose the IDs, assigned confirmation numbers, or passwords
                  to, share them with, or disclose them to any unauthorized
                  third parties.
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  Log in to a server or account that you are not authorized to
                  access, access or attempt to access Codesinc&quot;s
                  information technology systems, environments, networks, files,
                  data, or accounts without express authorization (including
                  access to data not meant for You).
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  Make an effort to decipher, decompile, disassemble, alter,
                  remove, or reverse engineer any of the HTML code or software
                  that makes up or in any way is a component of this website.
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  Interfere with the use or operation of this Web Site or the
                  systems, equipment, applications, or services provided by
                  Codesinc, its affiliated or related entities, or the Providers
                  in any way that is not authorized, including through the use
                  of any scripts, programs, commands, viruses, worms, web bugs,
                  harmful code, Trojan horses, other contaminants, or other
                  contaminants of any kind.
                </p>
              </li>
              <li>
                <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
                  Use any robot, spider, intelligent agent, meta-searching,
                  other automatic device, or manual process to search, monitor
                  or copy Codesinc’s Web Site pages or the Content in violation
                  of the Terms or without Codesinc’s prior written permission.
                </p>
              </li>
            </ul>

            <h2
              className="mb-5 mt-10 text-2xl leading-7 text-[#333333]"
              id="h.60mymdjzitrm"
            >
              <span className="c14 c13">POSTING INFORMATION TO A WEBSITE</span>
            </h2>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                You agree that Codesinc has the right to use all information
                that you choose to post in publicly accessible areas of the
                website, including any reproductions, copies, modifications,
                publications, distributions, performances, and displays (in
                whole or in part), provided that such use complies with
                Codesinc&quot;s Internet Privacy Policy.
              </span>
            </p>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                You acknowledge and agree that Codesinc may keep information and
                may also disclose information if required to do so by law or in
                the good faith belief that such preservation or disclosure is
                necessary to: (a) comply with legal process; (b) enforce the
                Terms; (c) address claims that any Information violates third
                parties&quot; rights; or (d) protect the business, employees,
                Providers, affiliated or related entities, or the public.
              </span>
            </p>

            <h2
              className="mb-5 mt-10 text-2xl leading-7 text-[#333333]"
              id="h.60mymdjzitrm"
            >
              <span className="c14 c13">DATA SECURITY</span>
            </h2>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                We put in place reasonable organizational and technical security
                steps to keep confidential information safe from theft, loss,
                misuse, unauthorized access, disclosure, etc. Please be aware
                that while we take precautions to safeguard your confidential
                information, there may still be security risks involved in its
                storage and transmission over public networks, including the
                internet. Personal information is sent at the sender&quot;s own
                risk.
              </span>
            </p>

            <h2 className="mb-5 mt-10 text-2xl leading-7 text-[#333333]">
              <span className="c14 c13">NO WARRANTIES</span>
            </h2>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                On this website, all information, products, and services are
                given &quot;as is&quot; and without any express or implied
                warranties of any kind. Codesinc disclaims all warranties,
                explicit or implied, including, but not limited to, implicit
                warranties of merchantability and fitness for a particular
                purpose, other than those implied by law and incapable of
                exclusion, limitation, or change under the laws applicable to
                these terms.
              </span>
            </p>

            <h2
              className="mb-5 mt-10 text-2xl leading-7 text-[#333333]"
              id="h.60mymdjzitrm"
            >
              <span className="c14 c13">INDEMNIFICATION</span>
            </h2>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                If and when it learns of any wrongdoing, Codesinc reserves the
                right to inform the appropriate governmental or law enforcement
                authorities. You consent to hold harmless Codesinc and the
                Providers, including their officers, directors, employees,
                affiliated or related entities, agents, licensors, and
                suppliers, from and against any and all claims, demands,
                actions, costs, liabilities, losses, and damages of any kind
                (including attorneys&quot; fees) brought by third parties due to
                your use of this website, your violation of any term of these
                terms, and/or any negligent or malicious acts, omissions, or
                wrongdoing on your part.
              </span>
            </p>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                Any such indemnification shall be subject to Codesinc&quot;s
                compliance with the following conditions: (a) written notice to
                you of any such claim, demand, action, expense, liability, loss,
                or threat thereof; (b) participation by you in its defense or
                settlement; and (c) giving you control over it. Codesinc will be
                allowed to take part in this fight at its own expense.
              </span>
            </p>

            <h2
              className="mb-5 mt-10 text-2xl leading-7 text-[#333333]"
              id="h.60mymdjzitrm"
            >
              <span className="c14 c13">MESSAGE BOARDS</span>
            </h2>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                In the event that Codesinc offers discussion forums, message
                boards, web logs, or blogs on this website (the
                &quot;Forums&quot;), you promise to use the Forums only for your
                own, non-commercial needs. Without Codesinc&quot;s express
                consent, you are not permitted to distribute or otherwise
                publicize any materials that include any fund-raising requests,
                advertisements, or written requests for products and services.
                You acknowledge that any materials you submit may be published
                again without paying you or any other person or organization
                anything.
              </span>
            </p>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                Additionally, you guarantee that you have released all moral
                rights in any uploaded works. The right (but not the obligation)
                to remove, move, or edit any messages that Codesinc determines
                in its sole discretion to be abusive, defamatory, obscene, in
                violation of copyright or trademark laws, in violation of these
                terms, or otherwise unacceptable, is reserved by Codesinc.
                Codesinc does not and cannot review every message posted by you
                or any other user in the forums. Any material that may be posted
                on this website through the forums is not supported by Codesinc.
              </span>
            </p>
            <p className="mb-2.5 font-montserrat text-lg font-normal leading-[1.75] text-gray878">
              <span className="c3">
                You agree that using any messages, information, or content from
                the Forums carries risks, including possible dependence on the
                truthfulness, completeness, or utility of such messages,
                information, or content. In this respect, you agree that you
                should not depend on any Content that Codesinc produces or
                information that third parties submit to Codesinc, including
                without limitation, information found in the forums and in all
                other areas of this website.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
