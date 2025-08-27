import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-1 items-start justify-between gap-5 p-4 shadow-lg shadow-gray-300 m-10 border border-amber-500 rounded animate-fade-down">
        <div className="grid col-span-2 gap-5">
          <div className="text-amber-500 font-bold text-3xl p-2">
            Connection
          </div>
          <div className="text-2xl italic">"Let's start a conversation"</div>
          <div className="text-xl">
            Feel free to reach out to me on Facebook and let’s connect.
          </div>
          <div className="border border-dashed"></div>

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
        <div className="flex flex-col gap-7 border-2 border-gray-600 p-5 animate-fade-left">
          <div className="text-3xl font-bold border-b-2 border-amber-500">
            Contact Information
          </div>
          <div className="flex items-center gap-5 border-2 border-gray-600 p-5 rounded hover:shadow-lg shadow-gray-300 transition duration-300">
            <div className="text-2xl border border-amber-500 bg-gradient-to-br from-amber-200 to-gray-100 p-4 rounded">
              <MdEmail />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold">Email</div>
              <div>ndhuy05x@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center gap-5 border-2 border-gray-600 p-5 rounded hover:shadow-lg shadow-gray-300 transition duration-300">
            <div className="text-2xl border border-amber-500 bg-gradient-to-br from-amber-200 to-gray-100 p-4 rounded">
              <MdPlace />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold">Location</div>
              <div>Ha Noi, Viet Nam</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 border-2 border-gray-600 p-5 animate-fade-right">
          <div className="text-3xl font-bold border-b-2 border-amber-500">
            Contact Online
          </div>
          <div className="flex items-center gap-5 border-2 border-gray-600 p-5 rounded hover:shadow-lg shadow-gray-300 transition duration-300">
            <div className="text-3xl border border-amber-500 bg-gradient-to-br from-amber-200 to-gray-100 p-4 rounded">
              <FaFacebook />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold">Facebook</div>
              <div>Ngô Đức Huy</div>
            </div>
          </div>
          <div className="flex items-center gap-5 border-2 border-gray-600 p-5 rounded hover:shadow-lg shadow-gray-300 transition duration-300">
            <div className="text-3xl border border-amber-500 bg-gradient-to-br from-amber-200 to-gray-100 p-4 rounded">
              <FaSquareInstagram />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold">Instagram</div>
              <div>ngo_huy05</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 border-amber-500 m-10 p-5 bg-gradient-to-tl from-gray-100 to-amber-200 rounded">
        <div className="flex flex-col gap-5 items-center justify-center p-10">
          <div className="font-bold text-3xl border-b-2 border-amber-500">
            I enjoy connecting with fellow developers
          </div>
          <div className="italic text-xl text-center pl-10 pr-10">
            Whether it’s about projects, sharing ideas or travel stories, or
            just saying hello, I’m always happy to chat and learn from others{" "}
          </div>

          <div className="text-2xl"> - Ngo Duc Huy</div>
        </div>
      </div>
    </>
  );
};
export default Contact;
