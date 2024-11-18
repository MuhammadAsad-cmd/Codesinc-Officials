"use client";

import { useState, useEffect } from "react";

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState("home");

  // Automatically cycle through tabs every 4 seconds
  useEffect(() => {
    const tabs = [
      "home",
      "profile",
      "messages",
      "settings",
      "crms",
      "customr",
      "dataan",
      "doner",
    ];
    let currentIndex = tabs.indexOf(activeTab);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[currentIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="container bg-white px-4 py-14">
        <div className="mb-8 text-center">
          <h3 className="text-center font-montserrat text-[60px] font-semibold uppercase leading-[58px]">
            Technology & Business <br />
            <span className="text-[32px] font-medium tracking-[6px]">
              Partners Around the World
            </span>
          </h3>
        </div>
        <div className="mt-20">
          <ul className="mb-8 flex justify-center space-x-4">
            <li
              className={`flex size-[70px] cursor-pointer items-center justify-center rounded-full border-2 border-[#22c222] ${
                activeTab === "home" ? "" : ""
              }`}
              onClick={() => handleTabClick("home")}
            >
              <i className="fa fa-home"></i>
            </li>
            <li
              className={`cursor-pointer rounded-full p-4 ${
                activeTab === "profile"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabClick("profile")}
            >
              <i className="glyphicon glyphicon-list-alt"></i>
            </li>
            <li
              className={`cursor-pointer rounded-full p-4 ${
                activeTab === "messages"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabClick("messages")}
            >
              <i className="fa fa-database"></i>
            </li>
            <li
              className={`cursor-pointer rounded-full p-4 ${
                activeTab === "settings"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabClick("settings")}
            >
              <i className="fa fa-bullhorn"></i>
            </li>
            <li
              className={`cursor-pointer rounded-full p-4 ${
                activeTab === "crms" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTabClick("crms")}
            >
              <i className="fa fa-users"></i>
            </li>
            <li
              className={`cursor-pointer rounded-full p-4 ${
                activeTab === "customr"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabClick("customr")}
            >
              <i className="fa fa-american-sign-language-interpreting"></i>
            </li>
            <li
              className={`cursor-pointer rounded-full p-4 ${
                activeTab === "dataan"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabClick("dataan")}
            >
              <i className="glyphicon glyphicon-wrench"></i>
            </li>
            <li
              className={`cursor-pointer rounded-full p-4 ${
                activeTab === "doner" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTabClick("doner")}
            >
              <i className="glyphicon glyphicon-resize-full"></i>
            </li>
          </ul>

          <div className="tab-content">
            {activeTab === "home" && (
              <div className="text-center">
                <h3 className="text-xl font-semibold">Infrastructure</h3>
                {/* <img
                    src="/img/tech/infra.png"
                    alt="Infrastructure"
                    className="mx-auto"
                  /> */}
              </div>
            )}
            {activeTab === "profile" && (
              <div className="text-center">
                <h3 className="text-xl font-semibold">Platform</h3>
                {/* <img
                    src="/img/tech/platform.png"
                    alt="Platform"
                    className="mx-auto"
                  /> */}
              </div>
            )}
            {activeTab === "messages" && (
              <div className="text-center">
                <h3 className="text-xl font-semibold">Database</h3>
                {/* <img
                    src="/img/tech/db.png"
                    alt="Database"
                    className="mx-auto"
                  /> */}
              </div>
            )}
            {activeTab === "settings" && (
              <div className="text-center">
                <h3 className="text-xl font-semibold">Digital Marketing</h3>
                {/* <img
                    src="/img/tech/dm.png"
                    alt="Digital Marketing"
                    className="mx-auto"
                  /> */}
              </div>
            )}
            {activeTab === "crms" && (
              <div className="text-center">
                <h3 className="text-xl font-semibold">CRM</h3>
                {/* <img src="/img/tech/crm.png" alt="CRM" className="mx-auto" /> */}
              </div>
            )}
            {activeTab === "customr" && (
              <div className="text-center">
                <h3 className="text-xl font-semibold">Customer Service</h3>
                {/* <img
                    src="/img/tech/cs.png"
                    alt="Customer Service"
                    className="mx-auto"
                  /> */}
              </div>
            )}
            {activeTab === "dataan" && (
              <div className="text-center">
                <h3 className="text-xl font-semibold">Data & Analyst</h3>
                {/* <img
                    src="/img/tech/da.png"
                    alt="Data & Analyst"
                    className="mx-auto"
                  /> */}
              </div>
            )}
            {activeTab === "doner" && (
              <div className="text-center">
                <h3 className="text-xl font-semibold">Framework</h3>
                {/* <img
                    src="/img/tech/frame.png"
                    alt="Framework"
                    className="mx-auto"
                  /> */}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologySection;
