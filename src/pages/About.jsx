import avtKrt from "@/assets/kirito.png";

const About = () => {
  return (
    <>
      <div className="grid grid-cols-[30%_65%] items-start gap-5 p-5 pb-10 shadow-lg shadow-gray-300 m-10 border border-amber-500 rounded animate-fade-down">
        <div className="flex flex-col p-5 col-span-2 gap-2 animate-fade-left">
          <div className="text-amber-500 font-bold text-3xl p-2">
            Personal Profile
          </div>
          <div className="text-2xl italic p-2">
            "A journey of learning and building"
          </div>
          <div className="text-xl border-b-2 border-dashed p-2 pb-5">
            A path of growth and creation through coding projects
          </div>
        </div>
        <div className=" flex justify-center items-center h-full animate-fade-left">
          <img
            src={avtKrt}
            alt="avt"
            className="bg-gradient-to-br from-gray-200 to-amber-400 
                           w-[250px] h-[280px] outline-3 outline-amber-500 outline-offset-2"
          />
        </div>

        <div className="flex flex-col gap-2 animate-fade-right">
          <div className="flex items-center justify-between text-[16px] border-b border-dashed p-2">
            <div className="text-gray-600">Fullname: </div>
            <div className="font-bold">Ngo Duc Huy</div>
          </div>
          <div className="flex items-center justify-between text-[16px] border-b border-dashed p-2">
            <div className="text-gray-600">Profession: </div>
            <div className="font-bold">Apprentice Fullstack Developer</div>
          </div>
          <div className="flex items-center justify-between text-[16px] border-b border-dashed p-2">
            <div className="text-gray-600">Location: </div>
            <div className="font-bold">Ha Noi, Viet Nam</div>
          </div>
          <div className="flex items-center justify-between text-[16px] border-b border-dashed p-2">
            <div className="text-gray-600">Languages: </div>
            <div className="font-bold">
              Vietnamese (Native), English (Reading)
            </div>
          </div>
          <div className="flex items-center justify-between text-[16px] border-b border-dashed p-2">
            <div className="text-gray-600">Interests: </div>
            <div className="font-bold">Coding, Reading</div>
          </div>
          <div className="flex items-center justify-between text-[16px] border-b border-dashed p-2">
            <div className="text-gray-600">Motto: </div>
            <div className="font-bold">"Better than yesterday"</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-10">
        <div className="flex flex-col gap-5 border-2 border-gray-600 p-5 animate-fade-left" >
          <div className="text-3xl font-bold border-b-2 border-amber-500">
            Technical Skills
          </div>
          <div className="border-l-4 border-amber-500 pl-5 space-y-2">
            <div className="text-xl font-bold">Fronted</div>
            <div className="flex flex-wrap gap-4">
              <div className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100  rounded hover:scale-110 transition-transform duration 300">
                React
              </div>
              <div className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100  rounded hover:scale-110 transition-transform duration 300">
                Tailwindcss
              </div>
              <div className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100  rounded hover:scale-110 transition-transform duration 300">
                CSS/SCSS
              </div>
              <div className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100  rounded hover:scale-110 transition-transform duration 300">
                JavaScript
              </div>
              <div className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100  rounded hover:scale-110 transition-transform duration 300">
                TypeScript
              </div>
            </div>
          </div>
          <div className="border-l-4 border-amber-500 pl-5 space-y-2">
            <div className="text-xl font-bold">Backend</div>
            <div className="flex flex-wrap gap-4">
              <div className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100 rounded hover:scale-110 transition-transform duration 300">
                Node.js/Express
              </div>
              <div className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100  rounded hover:scale-110 transition-transform duration 300">
                C/C++
              </div>
              <div className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100  rounded hover:scale-110 transition-transform duration 300">
                MongoDB
              </div>
              <div className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100  rounded hover:scale-110 transition-transform duration 300">
                TypeScript
              </div>
            </div>
          </div>
          <div className="border-l-4 border-amber-500 pl-5 space-y-2">
            <div className="text-xl font-bold">Tools</div>
            <div className="flex flex-wrap gap-4">
              <div className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100 rounded hover:scale-110 transition-transform duration 300">
                Git
              </div>
              <div className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100  rounded hover:scale-110 transition-transform duration 300">
                Vercel
              </div>
              <div className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100  rounded hover:scale-110 transition-transform duration 300">
                Render
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 border-2 border-gray-600 p-5 animate-fade-right">
          <div className="text-3xl font-bold border-b-2 border-amber-500">
            Technical Expertise
          </div>
          <div className="border-b-4 pb-2 border-cyan-500 w-[70%]">
            Frontend
          </div>
          <div className="border-b-4 pb-2 border-green-500 w-[50%]">
            Backend
          </div>
          <div className="border-b-4 pb-2 border-b-indigo-500 w-[50%]">
            Database Design
          </div>
          <div className="border-b-4 pb-2 border-b-yellow-500 w-[85%]">
            Problem Solving
          </div>
        </div>
      </div>

      <div className="border-2 border-amber-500 m-10 p-5 bg-gradient-to-tl from-gray-100 to-amber-200 rounded">
        <div className="flex flex-col gap-5 items-center justify-center p-10">
            <div className="font-bold text-3xl border-b-2 border-amber-500">
          Life is a journey of learning and creation
        </div>
        <div className="italic text-xl text-center pl-10 pr-10">
            "Every line of code I write and every place I explore teaches me something new, inspiring me to build meaningful technology while discovering the beauty of the world and myself."
        </div>
              <div className="italic text-xl text-center mt-4">
        "My dream is to create a game similar to Sword Art Online."
      </div>
        <div className="text-2xl"> - Ngo Duc Huy</div>
        </div>
      </div>
    </>
  );
};

export default About;
