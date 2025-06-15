import React, { useState, useEffect } from "react";
import ServiceCard from "./Skills.jsx";
import { supabase } from "../supabaseClient.js"; // Adjust path if necessary

// --- Icon Components ---
// It's good practice to keep these defined or imported at the top.
const WebDesignIcon = () => (
  <svg
    className="h-12 w-12 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const WebDevIcon = () => (
  <svg
    className="h-12 w-12 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);
const SocialMediaIcon = () => (
  <svg
    className="h-12 w-12 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h4M5 8h2a2 2 0 012 2v6a2 2 0 01-2 2H5"
    />
  </svg>
);
const BrandingIcon = () => (
  <svg
    className="h-12 w-12 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7h.01M7 3h5a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zm0 14h.01M7 17h5a2 2 0 012 2v1a2 2 0 01-2 2H7a2 2 0 01-2-2v-1a2 2 0 012-2z"
    />
  </svg>
);
const IllustrationIcon = () => (
  <svg
    className="h-12 w-12 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"
    />
  </svg>
);
const MarketingIcon = () => (
  <svg
    className="h-12 w-12 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

// --- Icon Mapper ---
// This object maps the string from the database to the actual icon component.
const iconMap = {
  web_design: <WebDesignIcon />,
  web_development: <WebDevIcon />,
  social_media: <SocialMediaIcon />,
  branding: <BrandingIcon />,
  illustration: <IllustrationIcon />,
  marketing: <MarketingIcon />,
};

function SkillsGrid() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("skills").select("*");

      if (error) {
        console.error("Error fetching skills:", error);
      } else {
        setServices(data);
      }
      setLoading(false);
    };

    fetchSkills();
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-5 flex flex-col items-center justify-center gap-8 bg-gray-100 dark:bg-gray-800/50 rounded-xl shadow-lg my-10">
      <h3 className="text-3xl font-extrabold text-center tracking-wide text-white">
        SKILLS
      </h3>
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <p className="text-white">Loading skills...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={iconMap[service.icon_name]} // Use the mapper here
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SkillsGrid;
