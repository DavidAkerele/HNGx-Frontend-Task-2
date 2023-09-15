import React from "react";
import Image from "next/image";

const MovieInfo = () => {
  return (
    <div className="relative items-center">
      <div className="flex justify-between gap-[24px] items-center">
        <div className="font-poppins font-[400] text-[20px]">
          <p className="text-[#333]">
            Lost in Time, is a captivating sci-fi adventure that explores the
            complexities of altering the past and the profound impact it can
            have on one future. With stunning visuals and a thought-provoking
            storyline, this film takes audiences on an unforgettable voyage
            through the mysteries of time itself.
          </p>
          <div className="relative mt-10">
            <div className="flex flex-col gap-[31px] font-[400] text-[20px]">
              <p className="text-[#333]">
                Director :
                <span className="text-[#BE123C]"> Joseph Konsinki</span>
              </p>
              <p className="text-[#333]">
                Writers :
                <span className="text-[#BE123C]">
                  {" "}
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </p>
              <p className="text-[#333]">
                Cast :
                <span className="text-[#BE123C]">
                  {" "}
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </p>
            </div>
            <div className="w-full mt-6 flex items-center gap-2 border border-[#C7C7C7] rounded-[10px] text-white">
              <button className="w-[253px] text-white bg-[#BE123C] h-[55px] rounded-[10px]">
                Top rated movie #25
              </button>
              <input
                type="text"
                placeholder="5 Awards Nominated"
                className="text-black font-poppins font-[500] text-[20px] bg-inherit"
              />
              <div className="flex absolute right-4 items-center font-extrabold">
                <Image src={"/Expand.png"} alt="" width={30} height={30} className="text-black" />
              </div>
            </div>
          </div>
        </div>
        <div className="items-center w-full pb-4">
          <div className=" flex flex-col items-center justify-center gap-[24px]">
            <Button
              bgColor="#BE123C"
              textColor="white"
              iconSrc="/ticket.png"
              buttonText="See Showtimes"
            />
            <Button
              bgColor="#F8E7EB"
              textColor="#333"
              iconSrc="/List.png"
              buttonText="More watch options"
              hasBorder={true}
            />
            <div className="w-full relative rounded-[15px]">
              <Image
                src="/movie2.png"
                alt=""
                width={360}
                height={229}
                className="w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 rounded-[15px] h-[52px] font-poppins flex bg-black bg-opacity-10 backdrop-blur-sm items-center justify-center text-[#E8E8E8] gap-[12px]">
                <Image src={"/List2.svg"} alt="" width={23} height={23} />
                <p className="">The Best Movies Shows in September</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Button = ({ bgColor, textColor, iconSrc, buttonText, hasBorder }) => {
  return (
    <button
      className={`w-full flex gap-[10px] bg-${bgColor} text-${textColor} font-[500] text-[20px] font-poppins leading-normal items-center justify-center h-[55px] rounded-[10px] ${hasBorder ? 'border border-[#BE123C]' : ''}`}
    >
      <Image src={iconSrc} alt="" width={24} height={24} />
      {buttonText}
    </button>
  );
};

export default MovieInfo;
