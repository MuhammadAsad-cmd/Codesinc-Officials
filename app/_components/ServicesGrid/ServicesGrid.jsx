import Image from "next/image";

const ServicesGrid = ({ backgroundColor, title, data, textColor }) => {
  return (
    <div className={backgroundColor}>
      <div className="container px-4 py-[50px]">
        <div>
          <h2
            className={`mb-2.5 mt-5 text-center text-2xl font-bold uppercase ${textColor} md:text-[30px]`}
          >
            {title}
          </h2>

          <div className="mt-[30px] grid grid-cols-1 md:grid-cols-3">
            {data.map((service, index) => (
              <div
                key={index}
                className={`${
                  index < data.length - 3 ? "border-b" : ""
                } ${index % 3 !== 2 ? "border-b md:border-r" : ""} border-[#f3f3f3] px-5 py-5 text-center`}
              >
                <div className="flex items-center justify-center">
                  <Image
                    width={56}
                    height={56}
                    unoptimized
                    src={service.image}
                    alt={service.alt}
                  />
                </div>
                <h4 className="mb-5 mt-2.5 font-montserrat text-[15px] font-bold uppercase leading-4">
                  {service.title}
                </h4>
                <p className="mt-2 min-h-[160px] px-2 text-center text-[15px] font-normal leading-[21px] text-Gray">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
