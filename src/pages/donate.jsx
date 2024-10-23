import { PlatformLinks } from "../components/platformlinks";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
export const Donate = () => {
  return (
    <div className="home-container">
      {/* homepage componets - formal layout */}
      <PlatformLinks />
      <Navbar />
      <h1>donate</h1>
      <Footer />
    </div>
  );
};
