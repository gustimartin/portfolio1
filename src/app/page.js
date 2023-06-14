import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import { ToastContainer } from "react-toastify";
export default function Home() {
  return (
    <main className=" w-full h-screen bg-gray-200">
      {" "}
      <Hero />
      <Projects />
    </main>
  );
}
