import React from "react";
import { serviceList } from "./serviceList";
const Services = () => {
  return (
    <div
      className="h-full min-h-[80vh] w-full px-5 py-10 md:px-20 "
      id="services"
      data-aos="fade-up"
    >
      <h1 className="my-5 text-2xl font-semibold uppercase text-primary dark:text-white">
        <span className="text-brand">//</span> Services
      </h1>
      <div className="container mt-20 flex flex-wrap justify-around gap-y-5  md:mx-auto">
        {serviceList?.map((data, index) => (
          <div
            className="rounded-sm bg-[#e6e6e6] p-5  dark:bg-secondary md:w-[18rem]"
            key={index}
          >
            <div className="center--content h-14 w-16 rounded-md bg-brand/50">
              <img
                className="h-8 w-8 object-contain object-center"
                src={data?.icon}
                alt={data.title}
              />
            </div>
            <h1 className="my-4 text-xl font-semibold text-primary dark:text-white">
              {data?.title}
            </h1>
            <p className="font-thin leading-relaxed text-primary dark:text-white">
              {data?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
