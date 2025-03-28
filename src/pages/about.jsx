import { useEffect, useState } from "react";
import { FaHandHoldingHeart, FaUsers, FaChartPie } from "react-icons/fa";
import { PlatformLinks } from "../components/platformlinks";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import man1 from "/images/man1.jpeg";
import man2 from "/images/man2.jpeg";
import lady from "/images/lady11.jpeg";
export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
      {/* homepage componets - formal layout */}
      <PlatformLinks />
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  // Team data
  const team = [
    { name: "John Mwangi", role: "Founder & CEO", image: man1 },
    { name: "Sarah Kamau", role: "Programs Director", image: lady },
    { name: "David Ochieng", role: "Finance Manager", image: man2 },
  ];

  // Timeline data
  const timeline = [
    { year: "2015", event: "Founded in Nairobi" },
    { year: "2018", event: "Reached 10,000 beneficiaries" },
    { year: "2021", event: "Expanded to 5 counties" },
    { year: "2023", event: "Won National Charity Award" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#4ebccb] mb-4">
          Empowering Communities Since 2015
        </h1>
        <div className="flex justify-center gap-8 my-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <FaHandHoldingHeart className="text-blue-600 text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">50,000+</p>
            <p>Lives Impacted</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <FaUsers className="text-green-600 text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">200+</p>
            <p>Projects Completed</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <FaChartPie className="text-purple-600 text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">85%</p>
            <p>Funds to Programs</p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="flex border-b mb-8">
        <button
          onClick={() => setActiveTab("mission")}
          className={`px-4 py-2 font-medium ${
            activeTab === "mission"
              ? "text-[#4ebccb] border-b-2 border-[#4ebccb]"
              : "text-gray-500"
          }`}
        >
          Our Story
        </button>
        <button
          onClick={() => setActiveTab("team")}
          className={`px-4 py-2 font-medium ${
            activeTab === "team"
              ? "text-[#4ebccb] border-b-2 border-[#4ebccb]"
              : "text-gray-500"
          }`}
        >
          Our Team
        </button>
        <button
          onClick={() => setActiveTab("financials")}
          className={`px-4 py-2 font-medium ${
            activeTab === "financials"
              ? "text-[#4ebccb] border-b-2 border-[#4ebccb]"
              : "text-gray-500"
          }`}
        >
          Financials
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "mission" && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
          <div className="border-l-4 border-[#4ebccb] pl-6 space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pb-8">
                <div className="absolute -left-[18px] top-1 w-3 h-3 bg-[#4ebccb] rounded-full"></div>
                <p className="font-bold">{item.year}</p>
                <p>{item.event}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To empower vulnerable communities through sustainable education,
                healthcare, and economic initiatives that create lasting change.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-700">
                A Kenya where every individual has access to basic needs,
                quality education, and opportunities to thrive.
              </p>
            </div>
          </div>
        </section>
      )}

      {activeTab === "team" && (
        <section>
          <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "financials" && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Financial Transparency</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="font-bold mb-4">2023 Fund Allocation</h3>
            <div className="h-64 flex items-center justify-center">
              {/* Placeholder for chart - replace with actual chart component */}
              <div className="text-center text-gray-500">
                <i className="fas fa-chart-pie text-5xl mb-2"></i>
                <p>Fund Allocation Chart</p>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <FaChartPie className="text-purple-600 text-3xl mx-auto mb-2" />
                  <p className="text-2xl font-bold">85%</p>
                  <p>Funds to Programs</p>
                </div>
              </div>
            </div>
          </div>
          <a
            href="/annual-report.pdf"
            className="inline-flex items-center px-4 py-2 bg-[#4ebccb] text-white rounded-lg hover:bg-blue-700"
          >
            <i className="fas fa-download mr-2"></i>
            Download Annual Report
          </a>
        </section>
      )}
    </div>
  );
};
