import { PlatformLinks } from "../components/platformlinks";
import { Navbar } from "../components/navbar";
import { HomeSection } from "../components/dynamic_info/home_section";
import { Footer } from "../components/footer";
export const Home =()=> {
    return(
        <div className="home-container">
            {/* homepage componets - formal layout */}
            <PlatformLinks />
            <Navbar />
            <HomeSection />
            <Footer />
        </div>
    )
}