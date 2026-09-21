import { GoBook } from "react-icons/go";
import { FcTodoList } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaWallet } from "react-icons/fa";

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
      icon: <MdOutlineVolunteerActivism />,
      projectId: "Project-002",
      year: `8/2025 - 11/2025`,
      title: "VolunteerHub",
      description:
        "A web application designed to help users join events volunteer",
      projectDetails: [
        { label: "Duration:", value: "3 month" },
        { label: "Teams:", value: "Solo" },
        { label: "Category:", value: "Web Development" },
      ],
      technicalEquiq: [
        { value: "React" },
        { value: "Tailwindcss" },
        { value: "JavaScript" },
        { value: "Socket" },
        { value: "MongoDB" },
      ],
      whatILearned: [
        {
          title: "Frontend with React",
          desc: "Learned how to structure React components, manage state, and reuse UI elements effectively.",
        },
        {
          title: "Backend with Node/Express",
          desc: "mongodb, cloudinary, jwt, socket, bcrypt",
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

    {
      icon: <BsBoxArrowUpRight />,
      projectId: "Project-003",
      year: `12/2025 - 01/2026`,
      title: "truyenHH",
      description:
        "A fullstack web application for reading comics online with user authentication, bookmarking, and real-time updates.",
      projectDetails: [
        { label: "Duration:", value: "1.5 months" },
        { label: "Teams:", value: "Solo" },
        { label: "Category:", value: "Fullstack Web Development" },
      ],
      technicalEquiq: [
        { value: "Next.js (TypeScript)" },
        { value: "Node.js" },
        { value: "Express.js" },
        { value: "MongoDB" },
        { value: "JWT Auth" },
      ],
      whatILearned: [
        {
          title: "Next.js with TypeScript",
          desc: "Built SSR/CSR hybrid app, structured scalable project with TypeScript.",
        },
        {
          title: "Backend API Design",
          desc: "Designed RESTful APIs with Express and handled authentication using JWT.",
        },
        {
          title: "Fullstack Architecture",
          desc: "Integrated Next.js frontend with Node.js backend and optimized data fetching.",
        },
      ],
      codeLink: "https://github.com/NgoHuy05/ReadStory",
      demoLink: "https://truyenhh.vercel.app",
      rate: 4.5,
    },

    {
      icon: <FaWallet />,
      projectId: "Project-004",
      year: `06/2026 - 07/2026`,
      title: "Mini-Wallet — Config-driven Payment Integration",
      description:
        "A simulated e-wallet system with a config-driven Integration Engine that allows connecting new payment partners/billers by declaring configurations in MongoDB — no backend code changes required.",
      projectDetails: [
        { label: "Duration:", value: "1.5 months" },
        { label: "Teams:", value: "Solo" },
        { label: "Category:", value: "Fullstack Web Development" },
      ],
      technicalEquiq: [
        { value: "Sails.js" },
        { value: "React 19 + Vite" },
        { value: "Tailwind CSS v4" },
        { value: "Zustand" },
        { value: "MongoDB" },
        { value: "Socket.io" },
        { value: "JWT + bcrypt" },
        { value: "Express (mock biller)" },
      ],
      whatILearned: [
        {
          title: "Config-driven & Design Patterns",
          desc: "Applied Strategy, Adapter, and Factory patterns to build an Integration Engine that generalizes across multiple third-party billers purely via DB config, including hot-reload without server restart.",
        },
        {
          title: "Transaction Consistency",
          desc: "Implemented double-entry ledger (glSteps), MongoDB replica-set transactions, compensating transaction pattern, and idempotency keys to guarantee atomicity and prevent duplicate processing.",
        },
        {
          title: "Realtime & Admin Governance",
          desc: "Built realtime balance/transaction updates with Socket.io, plus an Admin Dashboard with RBAC, normalized respCode error mapping, and a multi-step flow (Request → Confirm → Verify) via NeonMessage module.",
        },
      ],
      codeLink: "https://github.com/NgoHuy05/Mini-Wallet",
      demoLink: "https://github.com/NgoHuy05/Mini-Wallet/blob/main/docs/WireframeAdminPortal.md",
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
              <div className="font-bold">5</div>
            </div>
            <div className="flex border-b border-dashed items-center justify-between p-2 w-[50%]">
              <div>Complete Projects: </div>
              <div className="font-bold">4</div>
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

            <div className="text-2xl font-bold text-amber-500">
              {proj.title}
            </div>
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