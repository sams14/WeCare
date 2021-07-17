import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Hero = () => {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div
          class="container mx-auto flex px-5 py-24 items-center justify-center flex-col max-w-full h-auto"
          style={{
            backgroundImage: `url("")`,
          }}
        >
          {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
          <div class="pt-2 my-6 relative mx-auto text-gray-600">
            <input
              class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Find Services "
            />
            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
              <SearchIcon class="text-gray-600 h-5 w-5 fill-current" />
            </button>
          </div>
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              Your Health. We Care.
            </h1>
            <p class="leading-relaxed mb-8 text-white text-xl font-medium">
              WeCare is India's leading online healthcare provider. Online
              health consulation, health checkups at nearby hospitals, Home
              based lab services at yout fingertips.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-blue-700 bg-transparent border-2 border-blue-700 py-2 px-6 hover:bg-blue-600 hover:text-white rounded-full font-semibold">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
