import { useLocation } from "wouter";
import { IMAGES } from "@/lib/utils";

const PersonalDetails = () => {
  const [, setLocation] = useLocation();

  // Personal details as per requirement
  const personalInfo = [
    { label: "Name", value: "G.S.PRIYADHARSHINI" },
    { label: "Department", value: "MSc DCS" },
    { label: "Registration Number", value: "71762233034" },
    { 
      label: "LinkedIn Profile", 
      value: "https://www.linkedin.com/in/priyadharshinigs/",
      isLink: true 
    },
    { 
      label: "GitHub Profile", 
      value: "https://github.com/PriyadharshiniGS",
      isLink: true 
    }
  ];

  return (
    <div>
      {/* Top Navigation */}
      <div className="bg-white p-4 flex items-center">
        <span 
          className="material-icons cursor-pointer" 
          onClick={() => setLocation("/profile")}
        >
          arrow_back
        </span>
        <h1 className="ml-4 font-semibold">Personal Details</h1>
      </div>

      {/* Profile Image */}
      <div className="bg-white p-6 flex flex-col items-center border-b border-[#E5E5E5]">
        <img 
          src={IMAGES.profileFull} 
          alt="Profile" 
          className="w-24 h-24 rounded-full object-cover border-2 border-[#6320EE]" 
        />
        <h2 className="font-semibold text-lg mt-3">G.S.PRIYADHARSHINI</h2>
        <p className="text-sm text-[#888888]">MSc DCS</p>
      </div>

      {/* Personal Info */}
      <div className="p-4 space-y-4 bg-white">
        {personalInfo.map((info) => (
          <div key={info.label} className="flex flex-col">
            <label className="text-xs text-[#888888] mb-1">{info.label}</label>
            {info.isLink ? (
              <a 
                href={info.value} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#6320EE]"
              >
                {info.value}
              </a>
            ) : (
              <p className="font-medium">{info.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalDetails;
