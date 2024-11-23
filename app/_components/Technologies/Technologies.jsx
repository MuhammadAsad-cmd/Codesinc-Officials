"use client";
import { useState, useEffect } from "react";
import {
  FaAmericanSignLanguageInterpreting,
  FaBullhorn,
  FaDatabase,
  FaInbox,
  FaRegListAlt,
  FaUsers,
} from "react-icons/fa";
import { HiWrench } from "react-icons/hi2";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";
import Image from "next/image";

const tabs = [
  {
    id: "home",
    label: "Infrastructure",
    icon: FaInbox,
    color: "#22c222",
    image: "/images/tech/infra.png",
  },
  {
    id: "profile",
    label: "Platform",
    icon: FaRegListAlt,
    color: "#febe29",
    image: "/images/tech/platform.png",
  },
  {
    id: "messages",
    label: "Database",
    icon: FaDatabase,
    color: "#3e5e9a",
    image: "/images/tech/db.png",
  },
  {
    id: "settings",
    label: "Digital Marketing",
    icon: FaBullhorn,
    color: "#f1685e",
    image: "/images/tech/dm.png",
  },
  {
    id: "crms",
    label: "CRM",
    icon: FaUsers,
    color: "#3c763d",
    image: "/images/tech/crm.png",
  },
  {
    id: "customr",
    label: "Customer Service",
    icon: FaAmericanSignLanguageInterpreting,
    color: "#a412ff",
    image: "/images/tech/cs.png",
  },
  {
    id: "dataan",
    label: "Data Analytics",
    icon: HiWrench,
    color: "#ff6d05",
    image: "/images/tech/da.png",
  },
  {
    id: "doner",
    label: "Framework",
    icon: AiOutlineArrowsAlt,
    color: "#999",
    image: "/images/tech/frame.png",
  },
];

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let currentIndex = tabs.findIndex((tab) => tab.id === activeTab);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[currentIndex].id);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeTab]);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 1000); // Match animation duration
    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <section className="container mx-auto mb-20 px-4 py-14 pb-14">
      <div className="mb-8 text-center">
        <h3 className="text-center font-montserrat text-[40px] font-semibold uppercase leading-[58px]">
          Technology & Business <br />
          <span className="text-[32px] font-medium tracking-[6px]">
            Partners Around the World
          </span>
        </h3>
      </div>

      {/* Horizontal Tab Icons */}
      <div className="">
        <ul className="relative mb-5 flex w-full items-center justify-between">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <li
                key={tab.id}
                className={`relative flex size-[70px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full border-2 bg-white transition-all duration-300 ease-in-out ${
                  activeTab === tab.id
                    ? "border-[#ddd] text-[#ddd]"
                    : `border-[${tab.color}] text-[${tab.color}]`
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon
                  className="text-3xl"
                  style={{
                    color: activeTab === tab.id ? "#ddd" : tab.color,
                  }}
                />
                <div
                  className={`absolute -bottom-9 text-4xl text-[#ddd] transition-transform duration-300 ease-in-out ${
                    activeTab === tab.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <TiArrowSortedUp />
                </div>
              </li>
            );
          })}
          <div className="absolute top-[50%] -z-10 h-0.5 w-full bg-[#ddd]"></div>
        </ul>
        <div className="w-full border-t border-[#ddd]"></div>
      </div>
      {/* Active Tab Content */}
      <div className="pt-[50px] text-center">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                className="flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden"
              >
                <h3
                  className={`mb-2.5 mt-5 pb-2.5 text-center font-montserrat text-[35px] font-semibold capitalize leading-[58px] transition-all duration-700 ${
                    animate ? "animate-slideUp" : ""
                  }`}
                >
                  {tab.label}
                </h3>
                <Image
                  height={160}
                  width={1000}
                  unoptimized
                  src={tab.image}
                  alt={tab.label}
                  className={`h-full w-auto transition-transform duration-700 ease-in-out ${
                    animate ? "animate-zoomOutUp" : ""
                  }`}
                />
              </div>
            ),
        )}
      </div>
    </section>
  );
};

export default TechnologySection;
