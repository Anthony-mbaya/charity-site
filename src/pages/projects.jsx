import { PlatformLinks } from "../components/platformlinks";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
//import { updatesData } from "../components/dynamic_info/updates";
import UpdatesNews from "../components/dynamic_info/home_section";
export const Projects = () => {
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
