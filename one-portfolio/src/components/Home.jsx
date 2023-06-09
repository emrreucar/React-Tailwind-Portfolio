import React from "react";
import me from "../assets/me.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="md:h-screen pb-20 pt-24 w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-400 py-4 max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ipsam
            similique nulla? Quae reiciendis <br /> illo asperiores similique labore
            harum repellat reprehenderit optio.repellat <br /> reprehenderit optio.repellat reprehenderit optio.repellat reprehenderit optio.repellat reprehenderit optio. 
          </p>
          <div>
            <Link to="portfolio" smooth duration={700} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={me}
          alt="" 
          className="rounded-2xl mt-20 h-1/2 md:w-1/2 ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
