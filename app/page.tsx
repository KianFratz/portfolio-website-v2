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
    <div className="mx-56 mt-12 mb-12 min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Hero section */}
      <header className="flex gap-6 items-center">
        <div className="">
          <img
            src="IMG20250503173534.jpg"
            alt="Kian Fratz"
            className="w-46 h-46 rounded-lg object-cover shrink"
          />
        </div>
        <div className="pt-2">
          <span className="text-2xl font-bold ">Kian Fratz</span>
          <div className="flex items-center gap-2 pt-1">
            <MapPin size={16} />
            Cebu City, Philippines
          </div>
          <div className="pt-4 text-lg">Aspiring Software Engineer</div>
        </div>
      </header>

      <main className="grid grid-cols-2 gap-2">
        {/* About section */}
        <div className="flex">
          <div className="mt-10 p-4 w-full border rounded-lg border-gray-700 bg-zinc-900">
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

        <div className="p-4 min-h-1/2 border rounded-lg border-gray-700 bg-zinc-900 mt-10">
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

      <div className="flex gap-2">
        {/* Tech stack */}
        <div className="flex-2 mt-2 p-4 border rounded-lg border-gray-700 bg-zinc-900">
          <div className="text-gray-300 leading-relaxed">
            {/* frontend */}
            <div className="flex items-center gap-2 mb-2">
              <ChartColumnStacked size={16} />
              <span className="font-bold text-xl">Tech Stack</span>

              <Link href={"/tech-stack"} className="ml-auto">
                <Button className="cursor-pointer hover:text-black hover:bg-white ">
                  <ArrowLeft />
                  <span>View All</span>
                </Button>
              </Link>
            </div>
            <span className="text-md font-bold">Frontend</span>
            <div className="flex flex-wrap mt-2 gap-2">
              {frontendStack.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center border border-gray-700 rounded-lg pl-2 pr-2 mb-2 text-white"
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
        <div className="mt-2 flex-1">
          <div className="py-2 px-4 overflow-auto h-full border rounded-lg border-gray-700 bg-zinc-900">
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
      <div className="p-4 w-full border rounded-lg border-gray-700 bg-zinc-900 mt-2">
        <div className="flex items-center gap-2 mb-4">
          <FileCodeCorner size={16} />
          <h1 className="font-bold text-xl">Recent Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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

      <div className="grid grid-cols-2 gap-2">
        {/* Socials */}
        <div className="p-4 border rounded-lg border-gray-700 bg-zinc-900 mt-2">
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
                  className="border border-gray-700 flex gap-2 px-3 py-3 rounded-xl text-white text-sm hover:scale-105 transition-transform duration-200"
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
        <div className="p-4 border rounded-lg border-gray-700 bg-zinc-900 mt-2">
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
