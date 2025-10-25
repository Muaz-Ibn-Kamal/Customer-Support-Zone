import React from "react";
import bgImg from "../assets/vector1.png";
import Container from "./Container";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="w-full bg-gray-100 p-10  ">
      <Container>
        <div className=" px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* In-Progress Card */}
          <div className="relative bg-gradient-to-r from-[#9F62F2] to-[#632EE3] rounded-xl flex flex-col items-center justify-center text-white shadow-lg lg:h-60 h-40 overflow-hidden">
            <img
              src={bgImg}
              alt="background"
              className="absolute left-0 top-0 h-full object-cover opacity-40"
            />

            <img
              src={bgImg}
              alt="background"
              className="absolute right-0 top-0  object-cover opacity-40 rotate-185 -scale-y-109"
            />

            <div className="relative text-center">
              <h3 className="text-xl font-medium">In-Progress</h3>
              <p className="text-4xl font-bold pt-2">{inProgressCount}</p>
            </div>
          </div>
          {/* Resolved Card */}
          <div className="relative bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-xl p-6 flex flex-col items-center justify-center text-white shadow-lg lg:h-60 h-40 overflow-hidden">
            <img
              src={bgImg}
              alt="background"
              className="absolute left-0 top-0 h-full object-contain opacity-40"
            />

            <img
              src={bgImg}
              alt="background"
              className="absolute right-0 top-0  object-cover opacity-40 rotate-185 -scale-y-109"
            />

            <div className="relative text-center">
              <h3 className="text-xl font-medium">Resolved</h3>
              <p className="text-4xl font-bold mt-2">{resolvedCount}</p>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default Banner;
