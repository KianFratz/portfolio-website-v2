import { Button } from "@/components/ui/button";
import SimpleTimeline from "@/components/ui/verticalTimeLine";
import {
  ArrowLeft,
  Book,
  BookOpen,
  BriefcaseBusiness,
  ChartColumnStacked,
  CornerDownLeftIcon,
  FileCodeCorner,
  FileExclamationPointIcon,
  Github,
  Instagram,
  Linkedin,
  LinkIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

const frontendStack = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
];

const backendStack = [
  "Node.js",
  "Python",
  "Java",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
];

interface Project {
  name: string;
  description?: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Lift Logger",
    description: "Exercise logger",
    link: "https://github.com/KianFratz/lift-logger-v2",
  },
  {
    name: "Fitness Application",
    description: "AI-powered workout tracker",
    link: "https://github.com/KianFratz/fitness",
  },
  {
    name: "EventPro UI/UX Design",
    description: "Made the UI/UX for our website capstone project",
    link: "https://www.figma.com/design/znpHiwgEvoF3fZt8a8GXpR/eventpro-ui?node-id=0-1&m=dev&t=Dc3IIH4dyvy5GCus-1",
  },
  {
    name: "Pastry Haven",
    description: "Pastry shop",
    link: "https://github.com/KianFratz/pastry-haven",
  },
  {
    name: "Water Truck Management System",
    description: "Water management system",
    link: "https://github.com/KianFratz/WaterTruckManagementSystem",
  },
];

export default function Home() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-56 mt-8 sm:mt-12 mb-12 min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Hero section */}
      <header className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-46 md:h-46">
          <img
            src="IMG20250503173534.jpg"
            alt="Kian Fratz"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="pt-4 sm:pt-2 text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-bold">Kian Fratz</h1>
          <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
            <MapPin size={16} />
            Cebu City, Philippines
          </div>
          <div className="pt-4 text-base sm:text-lg">
            Aspiring Software Engineer
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4">
        {/* About section */}
        <div className="lg:flex">
          <div className="mt-6 sm:mt-10 p-4 w-full border rounded-lg border-gray-700 bg-zinc-900">
            <div className="flex items-center gap-2 mb-4">
              <BriefcaseBusiness size={16} />
              <span className="text-xl font-bold">About</span>
            </div>

            <div className=" leading-relaxed text-white">
              <p>
                Hello, I'm Kian Fratz, an aspiring software engineer with a
                passion for technology and innovation. Specializing in
                developing with Javascript, Python, and Java.
              </p>
              <br />
              <p>
                Currently pursuing a degree in Information Technology at
                University of Cebu Lapu-Lapu and Mandaue. I am eager to apply my
                skills to real-world challenges and contribute to meaningful
                projects.
              </p>
              <br />
              <p></p>
            </div>
          </div>
        </div>

        <div className="p-4 min-h-1/2 border rounded-lg border-gray-700 bg-zinc-900 sm:mt-10">
          {/* Experience */}
          <div>
            <div className="">
              {/* About heading */}
              <div className="flex items-center gap-2 mb-4">
                <BriefcaseBusiness size={16} />
                <span className="text-xl font-bold">Experience</span>
              </div>

              {/* Vertical Timeline experience */}
              <div className="pt-2">
                <SimpleTimeline />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="flex flex-col lg:flex-row gap-2 sm:gap-4">
        {/* Tech stack */}
        <div className="lg:flex-2 mt-4 sm:mt-4 p-4 border rounded-lg border-gray-700 bg-zinc-900">
          <div className="text-gray-300 leading-relaxed">
            {/* frontend */}
            <div className="flex items-center gap-2 mb-2">
              <ChartColumnStacked size={16} />
              <span className="font-bold text-xl">Tech Stack</span>

              <Link href={"/tech-stack"} className="ml-auto">
                <Button className="cursor-pointer hover:text-black hover:bg-white text-sm sm:text-base">
                  <ArrowLeft />
                  <span className="hidden sm:inline">View All</span>
                  <span className="sm:hidden">All</span>
                </Button>
              </Link>
            </div>
            <span className="text-md font-bold">Frontend</span>
            <div className="flex flex-wrap mt-2 gap-2">
              {frontendStack.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center border border-gray-700 rounded-lg px-2 py-1 text-sm sm:text-base mb-2 text-white"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* backend */}
            <span className="text-md font-bold">Backend</span>
            <div className="flex flex-wrap mt-2 gap-2">
              {backendStack.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center border border-gray-700 rounded-lg pl-2 pr-2 mb-2 text-white"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Beyond coding */}
        <div className="mt-4 sm:mt-4 lg:flex-1">
          <div className="p-4 h-full border rounded-lg border-gray-700 bg-zinc-900">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={16} />
              <span className="text-xl font-bold ">Beyond Coding</span>
            </div>

            <div className="leading-relaxed text-white">
              <p>
                When not writing code, I focus on learning about emerging
                technologies, drawing, and other things that I find interesting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="p-4 w-full border rounded-lg border-gray-700 bg-zinc-900 sm:mt-4">
        <div className="flex items-center gap-2 mb-4">
          <FileCodeCorner size={16} />
          <h1 className="font-bold text-xl">Recent Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.name}>
              <div className="border border-gray-700 rounded-lg flex gap-2 p-4">
                <div>
                  <h1 className="font-bold">{project.name}</h1>
                  <span className="text-sm">{project.description}</span>
                  <div className="flex">
                    <Link
                      href={project.link}
                      className=" bg-black text-white rounded-lg flex mt-2 px-3 py-1 text-sm hover:bg-white hover:text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4">
        {/* Socials */}
        <div className="p-4 border rounded-lg border-gray-700 bg-zinc-900 mt-4 sm:mt-4">
          <div className="flex items-center gap-2 mb-2">
            <LinkIcon size={16} />
            <h1 className="font-bold text-xl">Socials</h1>
          </div>
          <div>
            <div className="w-full">
              <button className="w-full">
                <Link
                  href={
                    "https://www.linkedin.com/in/kian-fratz-pagobo-a04a7427b/"
                  }
                  className="border border-gray-700 flex gap-2 px-3 py-2 sm:py-3 rounded-xl text-white text-sm hover:scale-105 transition-transform duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="" />
                  LinkedIn
                </Link>
              </button>
              <button className="w-full mt-2">
                <Link
                  href={"https://github.com/KianFratz"}
                  className="border border-gray-700 flex gap-2 px-3 py-3 rounded-xl text-white text-sm hover:scale-105 transition-transform duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="" />
                  GitHub
                </Link>
              </button>
              <button className="w-full mt-2">
                <Link
                  href={"https://www.instagram.com/panerabreadd/?next=%2F"}
                  className="border border-gray-700 flex gap-2 px-3 py-3 rounded-xl text-white text-sm
                  hover:scale-105 transition-transform duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="" />
                  Instagram
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Get in touch */}
        <div className="p-4 border rounded-lg border-gray-700 bg-zinc-900 mt-4 sm:mt-4">
          <div className="flex items-center gap-2 mb-2">
            <Phone size={16} />
            <h1 className="font-bold text-xl">Get in touch</h1>
          </div>

          <div className="pt-2 text-white">
            <p>
              Available for speaking about software development and emerging
              technologies. Please do contact my email below.
            </p>
            <div className="border border-gray-700  gap-2 px-3 py-2 mt-6 rounded-xl text-white">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                Email
              </div>
              <p>fratzkian@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="mt-20">
        <hr className="border-gray-700" />
        <div className="text-center pt-8">
          <p>&copy; 2025 Kian Fratz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
