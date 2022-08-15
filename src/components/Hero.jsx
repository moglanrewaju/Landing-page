import Carousel from "./Carousel";
import { useState } from "react";
import Modal from "./Modal";
export default function Hero() {

  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        id="over"
        className="relative h-96 md:h-full pt-12 md:pb-20 bg-black"
      >
        <Carousel />
      </div>

      <div className="text-white text-left md:text-center bg-indigo-600  w-full  px-4 py-10">
        <div className="max-w-xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-center ">
            <span className="text-yellow-400 tracking-wider">WhoScore?</span>{" "}
            Auction Center.
          </h3>
          <span className="text-sm md:text-lg mt-2 block text-center font-thin">
            Media Buying Across Africa
          </span>

          <p className="mt-6 leading-8 text-base  md:text-lg">
            Viral Inc, Whoscore's parent company, is an Ad-Tech Startup that is
            building tools that help businesses connect better with their
            potential Users.
          </p>

          <p className="mt-6 leading-8 text-base  md:text-lg">
            We are building Africa's Biggest Audience Network, allowing small
            and large Businesses to Auction for Ad Spaces on various platforms.
          </p>

          <p className="mt-6 leading-8 text-base  md:text-lg">
            We are building a Backend Auction Center that allows for Ad Space
            Auctioning across Whoscore.
          </p>

          <div className="flex flex-col justify-center">
            <h3 className=" mt-6 text-center text-base md:text-lg font-mulish font-semibold tracking-wide">
              Become An Advertising Partner
            </h3>
            <button onClick={() => setOpenModal(true)} className="bg-yellow-500 hover:bg-black hover:text-yellow-400 mt-4 w-44 mx-auto transform transition hover:-translate-y-1 text-gray-800 text-xs  px-4 py-3 rounded-md uppercase tracking-wide">
              Join the wait lists
            </button>
          </div>

          <span className="block mt-8  text-sm md:text-lg text-center font-semibold font-mulish capitalize ">
            We are currently raising investments
          </span>

          <div className="mt-6  flex justify-between text-sm max-w-md mx-auto">
            <a
              href="##"
              onClick={() => setOpenModal(true)}
              className="underline tracking-wider hover:text-black transform transition hover:-translate-y-1 mt-2 block text-xs md:text-sm font-mulish font-semibold uppercase"
            >
              Request pitchdeck
            </a>

            <a
              href="##"
              onClick={() => setOpenModal(true)}
              className="underline tracking-wider transform transition hover:-translate-y-1 hover:text-black mt-2 block font-mulish font-semibold text-xs md:text-base uppercase"
            >
              view prototype
            </a>
          </div>
        </div>
      </div>

      <Modal openModal={openModal} setOpenModal={setOpenModal} />


    </>
  );
}
