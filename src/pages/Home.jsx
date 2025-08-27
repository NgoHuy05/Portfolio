import avtKrt from "@/assets/kirito.png";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const frontendSkill = [
    { value: "React" },
    { value: "Tailwindcss" },
    { value: "CSS/SCSS" },
    { value: "JavaScript" },
    { value: "TypeScript" },
  ];
  const backendSkill = [
    { value: "Node.js/Express" },
    { value: "MongoDB" },
    { value: "JavaScript" },
    { value: "TypeScript" },
  ];
  const toolSkill = [
    { value: "Git" },
    { value: "Vercel" },
    { value: "Render" },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-start justify-between gap-5 p-4 shadow-lg shadow-gray-300 m-10 border border-amber-500 rounded animate-fade-down">
        <div className="col-span-1 flex  justify-center items-center h-full animate-fade-left">
          <img
            src={avtKrt}
            alt="avt"
            className="bg-gradient-to-br from-gray-200 to-amber-400 
               w-[250px] h-[280px] outline-3 outline-amber-500 outline-offset-2"
          />
        </div>

        <div className="grid col-span-2 gap-5 animate-fade-right">
          <div className="text-3xl text-amber-500 font-bold">Ngo Duc Huy</div>
          <div className="text-2xl italic">"Huy Level 1"</div>
          <div className="text-xl">Apprentice in Fullstack Developer</div>
          <div className="border border-dashed"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between items-center border-b border-dashed p-2">
              <div>Experience:</div>
              <div className="font-bold">Apprentice, 0 Years</div>
            </div>
            <div className="flex justify-between items-center border-b border-dashed p-2">
              <div>Projects Completed:</div>
              <div className="font-bold">2+</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 border-2 border-amber-500 p-10 bg-gradient-to-tl from-gray-100 to-amber-200 rounded">
            <div className="font-bold text-2xl col-span-1 md:col-span-2 border-b-2 border-amber-500">
              Contact Information
            </div>
            <div className="flex items-center gap-2 p-2">
              <IoIosMail />
              ndhuy05x@gmail.com
            </div>
            <a
              href="https://github.com/NgoHuy05"
              target="_blank"
              className="flex items-center gap-2 cursor-pointer p-2 hover:bg-amber-200 rounded"
            >
              <FaGithub />
              NgoHuy05
            </a>
            <div className="flex items-center gap-2 p-2 ">
              <MdPlace />
              Dong Anh, Ha Noi
            </div>
            <a
              href="https://www.facebook.com/ngoduchuy2005"
              target="_blank"
              className="flex items-center gap-2 cursor-pointer p-2 hover:bg-amber-200 rounded"
            >
              <FaFacebook />
              Ngô Đức Huy
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-10">
        <div className="flex flex-col gap-5 border-2 border-gray-600 p-5 animate-fade-left">
          <div className="text-3xl font-bold border-b-2 border-amber-500">
            Technical Skills
          </div>
          <div className="border-l-4 border-amber-500 pl-5 space-y-2">
            <div className="text-xl font-bold">Fronted</div>
            <div className="flex flex-wrap gap-4">
              {frontendSkill.map((item, index) => (
                <div
                  key={index}
                  className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100 rounded hover:scale-110 transition-transform duration 300"
                >
                  {item.value}
                </div>
              ))}
            </div>
          </div>
          <div className="border-l-4 border-amber-500 pl-5 space-y-2">
            <div className="text-xl font-bold">Backend</div>
            <div className="flex flex-wrap gap-4">
              {backendSkill.map((item, index) => (
                <div
                  key={index}
                  className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100 rounded hover:scale-110 transition-transform duration 300"
                >
                  {item.value}
                </div>
              ))}
            </div>
          </div>
          <div className="border-l-4 border-amber-500 pl-5 space-y-2">
            <div className="text-xl font-bold">Tools</div>
            <div className="flex flex-wrap gap-4">
              {toolSkill.map((item, index) => (
                <div
                  key={index}
                  className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100 rounded hover:scale-110 transition-transform duration 300"
                >
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 border-2 border-gray-600 p-5 animate-fade-right">
          <div className="text-3xl font-bold border-b-2 border-amber-500">
            Achievements
          </div>
          <div className="flex items-center gap-5 border-2 border-gray-600 p-5 rounded hover:shadow-lg shadow-gray-300 transition duration-300">
            <div className="border border-amber-500 bg-gradient-to-br from-amber-200 to-gray-100 p-5 rounded">
              <FaCalendarDays />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold">0+</div>
              <div>Years Experience</div>
            </div>
          </div>
          <div className="flex items-center gap-5 border-2 border-gray-600 p-5 rounded hover:shadow-lg shadow-gray-300 transition duration-300">
            <div className="border border-amber-500 bg-gradient-to-br from-amber-200 to-gray-100 p-5 rounded">
              <FaProjectDiagram />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold">5+</div>
              <div>Projects</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 justify-items-center">
        <Link
          to="project"
          className=" w-[80%] flex justify-center
          border-2 border-amber-500 p-5 
          bg-amber-300 text-gray-900
          hover:bg-amber-500 
          hover:scale-105 
          transition-all duration-300 cursor-pointer rounded-xl shadow-md
          "
        >
          Explore My Projects
        </Link>

        <a
          href="/CV Resume - NgoDucHuy.pdf"
          download="CV-Resume_NgoDucHuy.pdf"
          className="w-[80%]
          border-2 border-cyan-500 p-5 
          bg-cyan-400 text-gray-900
          hover:bg-cyan-500 
          hover:scale-105 
          transition-all duration-300 cursor-pointer rounded-xl shadow-md
          "
        >
          Download Resume
        </a>
      </div>

      <div className="border border-dashed mt-10 mb-10"></div>

      <div className="flex flex-col gap-5 items-center mt-10">
        <div className="font-bold text-3xl">Ngo Duc Huy</div>
        <div className="text-2xl opacity-80 italic">
          "Better than yesterday"
        </div>
      </div>
    </>
  );
};

export default Home;
