import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { ToastContainer } from "react-toastify";
export default function Home() {
  return (
    <main className=" w-full h-screen dark:bg-slate-800">
      {" "}
      <Hero />
      <Projects />
    </main>
  );
}
