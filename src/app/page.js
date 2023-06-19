import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { ToastContainer } from "react-toastify";
export default function Home() {
  return (
    <main className=" w-full h-screen scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-200 scroll-p-2">
      {" "}
      <Hero />
      <Projects />
    </main>
  );
}
