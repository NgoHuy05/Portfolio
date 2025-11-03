
import { GoBook } from "react-icons/go";
import { FcTodoList } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdOutlineVolunteerActivism } from "react-icons/md";

const Project = () => {
  const projects = [
    {
      icon: <GoBook />,
      projectId: "Project-001",
      year: `03/2025 - 05/2025`,
      title: "Study English - Lexinary",
      description:
        "A web application designed to help users learn and practice English vocabulary efficiently through interactive lessons, flashcards and games.",
      projectDetails: [
        { label: "Duration:", value: "2 months" },
        { label: "Teams:", value: "Solo" },
        { label: "Category:", value: "Web Development" },
      ],
      technicalEquiq: [
        { value: "React" },
        { value: "SCSS" },
        { value: "Node/Express" },
        { value: "JavaScript" },
        { value: "MongoDB" },
      ],
      whatILearned: [
        {
          title: "Frontend with React",
          desc: "Learned how to structure React components, manage state, and reuse UI elements effectively.",
        },
        {
          title: "Backend with Node/Express",
          desc: "Implemented RESTful APIs, handled routes and middleware, and connected to a database.",
        },
        {
          title: "Fullstack Integration",
          desc: "Learned to connect frontend React app with backend APIs and manage data flow.",
        },
      ],
      codeLink: "https://github.com/NgoHuy05/LEXINARY",
      demoLink: "https://lexinary.vercel.app/",
      rate: 2.5,
    },
    {
      icon: <FcTodoList />,
      projectId: "Project-002",
      year: `0  8/2025`,
      title: "ToDoList",
      description: "A web application designed to help users create notes",
      projectDetails: [
        { label: "Duration:", value: "1 week" },
        { label: "Teams:", value: "Solo" },
        { label: "Category:", value: "Web Development" },
      ],
      technicalEquiq: [
        { value: "React" },
        { value: "Tailwindcss" },
        { value: "JavaScript" },
      ],
      whatILearned: [
        {
          title: "Frontend with React",
          desc: "Learned how to structure React components, manage state, and reuse UI elements effectively.",
        }
      ],
      codeLink: "https://github.com/NgoHuy05/ToDoList",
      demoLink: "https://to-do-list-hk.vercel.app/",
      rate: 3.5,
    },
    {
      icon: <MdOutlineVolunteerActivism />,
      projectId: "Project-003",
      year: `10/2025 - 11/2025`,
      title: "VolunteerHub",
      description: "A web application designed to help users join events volunteer",
      projectDetails: [
        { label: "Duration:", value: "1 month" },
        { label: "Teams:", value: "Solo" },
        { label: "Category:", value: "Web Development" },
      ],
      technicalEquiq: [
        { value: "React" },
        { value: "Tailwindcss" },
        { value: "JavaScript" },
        { value: "Socket" },
        { value: "Mongodb" },
      ],
      whatILearned: [
        {
          title: "Frontend with React",
          desc: "Learned how to structure React components, manage state, and reuse UI elements effectively.",
        },
            {
          title: "Backend with Node/Express",
          desc: "mongodb cloudinary jwt socket bcrypt",
        },
        {
          title: "Fullstack Integration",
          desc: "Learned to connect frontend React app with backend APIs and manage data flow.",
        },
      ],
      codeLink: "https://github.com/NgoHuy05/VolunteerHub",
      demoLink: "https://volunteer-hub-uet-kdqb.vercel.app/",
      rate: 4.0,
    },
  ];

  return (
    <>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-between gap-5 p-4 shadow-lg shadow-gray-300 m-10 border border-amber-500 rounded animate-fade-down">
        <div className="grid col-span-2 gap-5 ">
          <div className="text-3xl text-amber-500 font-bold mb-2">
            Project Adventures
          </div>
          <div className="text-2xl mb-2 italic">
            "Explore the journey behind my creations"
          </div>
          <div className="text-xl ">Step Into the World of My Projects</div>
          <div className="border border-dashed"></div>

          <div className="flex gap-5 items-center justify-between p-5 border-2 border-amber-500 bg-gradient-to-tl from-gray-100 to-amber-200 rounded ">
            <div className="flex border-b border-dashed items-center justify-between p-2 w-[50%]">
              <div className="">Total Projects: </div>
              <div className="font-bold">1</div>
            </div>
            <div className="flex border-b border-dashed items-center justify-between p-2 w-[50%]">
              <div>Complete Projects: </div>
              <div className="font-bold">1</div>
            </div>
          </div>
        </div>
      </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 m-10">
      {projects.map((proj, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-5 border border-gray-700 p-5 rounded animate-fade-right"
        >
          <div className="flex justify-between">
            <div className="text-xl flex items-center gap-2">
              {proj.icon}
              {proj.projectId}
            </div>
            <div>{proj.year}</div>
          </div>

          <div className="text-2xl font-bold text-amber-500">{proj.title}</div>
          <div className="italic">{proj.description}</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-2 border-amber-500 p-5 bg-gradient-to-tl from-gray-100 to-amber-200 rounded">
            {proj.projectDetails.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border-b border-dashed p-2"
              >
                <div className="font-bold">{item.label}</div>
                <div>{item.value}</div>
              </div>
            ))}
          </div>

          <div className="text-xl font-bold">Technical Equipment:</div>
          <div className="flex flex-wrap gap-4">
            {proj.technicalEquiq.map((item, idx) => (
              <div
                key={idx}
                className="border border-amber-500 p-2 bg-gradient-to-br from-amber-200 to-gray-100 rounded hover:scale-110 transition-transform duration-300"
              >
                {item.value}
              </div>
            ))}
          </div>

          <div className="text-xl font-bold mt-5">What I Learned:</div>
          <div className="flex flex-col gap-4 mt-2">
            {proj.whatILearned.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-300 p-3 rounded shadow-sm bg-gray-50"
              >
                <div className="font-bold">{item.title}</div>
                <div className="text-gray-700 italic">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center p-2 mt-auto">
            <div className="flex gap-2 items-center p-2">
              <div className="font-bold">Rate: {proj.rate}/5</div>
              <div className="text-amber-500">
                <FaStar />
              </div>
            </div>

            <div className="flex gap-2 p-2">
              <a
                href={proj.codeLink}
                target="_blank"
                className="border-2 border-amber-500 p-2 flex items-center gap-2 bg-amber-300 text-gray-900 hover:bg-amber-500 hover:scale-105 transition-all duration-300 cursor-pointer rounded-xl shadow-md"
              >
                <div>Code</div>
              </a>
              <a
                href={proj.demoLink}
                target="_blank"
                className="border-2 border-cyan-500 p-2 flex items-center gap-2 bg-cyan-400 text-gray-900 hover:bg-cyan-500 hover:scale-105 transition-all duration-300 cursor-pointer rounded-xl shadow-md"
              >
                <div>Demo</div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Project;
