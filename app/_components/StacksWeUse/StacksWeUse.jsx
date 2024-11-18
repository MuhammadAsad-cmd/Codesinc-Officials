import React from "react";

import { BsFiletypePhp, BsBootstrapFill } from "react-icons/bs";
import {
  FaWordpress,
  FaHtml5,
  FaCss3,
  FaJoomla,
  FaMagento,
  FaAngular,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { GiCamel } from "react-icons/gi";
import {
  DiZend,
  DiCodeigniter,
  DiMongodb,
  DiLaravel,
  DiYii,
} from "react-icons/di";
import {
  SiBigcommerce,
  SiCakephp,
  SiDrupal,
  SiJquery,
  SiMysql,
  SiPython,
} from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";
import { RiNodejsLine } from "react-icons/ri";
import { LiaLaravel } from "react-icons/lia";

const StacksWeUse = () => {
  const icons = [
    { name: "PHP", icon: <BsFiletypePhp /> },
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "Joomla", icon: <FaJoomla /> },
    { name: "Perl", icon: <GiCamel /> },
    { name: "Magento", icon: <FaMagento /> },
    { name: "Bootstrap", icon: <BsBootstrapFill /> },
    { name: "Zend", icon: <DiZend /> },
    { name: "AngularJS", icon: <FaAngular /> },
    { name: "CodeIgniter", icon: <DiCodeigniter /> },
    { name: "Django", icon: <TbBrandDjango /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "iOS", icon: <FaApple /> },
    { name: "Python", icon: <SiPython /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Android", icon: <FaAndroid /> },
    { name: "jQuery", icon: <SiJquery /> },
    { name: "Node.js", icon: <RiNodejsLine /> },
    { name: "BigCommerce", icon: <SiBigcommerce /> },
    { name: "Laravel", icon: <LiaLaravel /> },
    { name: "CakePHP", icon: <SiCakephp /> },
    { name: "Yii", icon: <DiYii /> },
    { name: "Drupal", icon: <SiDrupal /> },
  ];
  return (
    <>
      <div className="mt-[50px] pb-20 pt-[30px]">
        <div className="text-center">
          <h2 className="border-skyBlue2 mb-20 inline-block items-center justify-center border-b-[3px] pb-3 text-center font-montserrat text-[40px] font-semibold uppercase text-black">
            Technology We Use
          </h2>
        </div>
        <div className="relative min-h-[230px] w-full bg-[url('/images/cms/tech-bg.jpg')] bg-cover pb-[70px] pt-14">
          <div className="container mt-2.5">
            <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {icons.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div key={index} className="text-center text-white">
                    <div className="icon-container mx-auto my-2.5 flex size-[70px] items-center justify-center py-2.5 text-7xl">
                      {item.icon}
                    </div>
                    <p className="text-center text-[15px] font-semibold uppercase">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StacksWeUse;
