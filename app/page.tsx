import Homepage from "../components/customComp/Homepage/Homepage";
import Portfolio from "../components/customComp/Portfolio/Portfolio";
import About from "../components/customComp/About/About";
import GetInTouch from "@/components/customComp/GetInTouch";
import Footer from "@/components/customComp/Footer";

export default function Home() {
  return (
    <>
      <Homepage />
      <Portfolio />
      <About />
      <GetInTouch />
      <Footer />
    </>
  );
}
