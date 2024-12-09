import { PlusIcon } from "lucide-react";
import React from "react";

const FaqsPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold md:text-[48px] text-4xl mb-2 md:px-0 px-5">
            Question Looks Here
          </h1>
          <p className="font-medium text-[16px] text-center text-[#4F4F4F] md:px-0 px-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been{" "}
          </p>
        </div>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-5 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:px-0 px-5">
            <div className="flex flex-col items-start justify-between bg-[#F7F7F7] p-4 rounded-lg">
              <div className="w-full flex items-center justify-between">
                <h3 className="font-bold text-[18px] text-[#333333]">
                  What types of chairs do you offer?
                </h3>
                <PlusIcon className="w-6 h-6" />
              </div>
              <div className="">
                <p className="text-[#4F4F4F] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between bg-[#F7F7F7] p-4 rounded-lg">
              <div className="w-full flex items-center justify-between">
                <h3 className="font-bold text-[18px] text-[#333333]">
                  How can we get in touch with you?
                </h3>
                <PlusIcon className="w-6 h-6" />
              </div>
              <div className="">
                <p className="text-[#4F4F4F] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between bg-[#f7f7f7] p-4 rounded-lg">
              <div className="w-full flex items-center justify-between">
                <h3 className="font-bold text-[18px] text-[#333333]">
                  Do your chairs come with a warranty?
                </h3>
                <PlusIcon className="w-6 h-6" />
              </div>
              <div className="">
                <p className="text-[#4F4F4F] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between bg-[#f7f7f7] p-4 rounded-lg">
              <div className="w-full flex items-center justify-between">
                <h3 className="font-bold text-[18px] text-[#333333]">
                  What will be delivered? And When?
                </h3>
                <PlusIcon className="w-6 h-6" />
              </div>
              <div className="">
                <p className="text-[#4F4F4F] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between bg-[#f7f7f7] p-4 rounded-lg">
              <div className="w-full flex items-center justify-between">
                <h3 className="font-bold text-[18px] text-[#333333]">
                  Can I try a chair before purchasing?
                </h3>
                <PlusIcon className="w-6 h-6" />
              </div>
              <div className="">
                <p className="text-[#4F4F4F] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between bg-[#f7f7f7] p-4 rounded-lg">
              <div className="w-full flex items-center justify-between">
                <h3 className="font-bold text-[18px] text-[#333333]">
                  How do I clean and maintain my Comforty chair?
                </h3>
                <PlusIcon className="w-6 h-6" />
              </div>
              <div className="">
                <p className="text-[#4F4F4F] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsPage;
