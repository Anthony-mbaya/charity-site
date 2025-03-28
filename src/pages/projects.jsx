import { PlatformLinks } from "../components/platformlinks";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
//import { updatesData } from "../components/dynamic_info/updates";
import UpdatesNews from "../components/dynamic_info/home_section";
import { useEffect } from "react";
export const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
      {/* homepage componets - formal layout */}
      <PlatformLinks />
      <Navbar />
      <UpdatesNews />
      <Footer />
    </div>
  );
};
