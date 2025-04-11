import { useLocation } from "wouter";
import { IMAGES } from "@/lib/utils";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const PersonalDetails = () => {
  const [, setLocation] = useLocation();

  // Personal details as per requirement
  const personalInfo = [
    { label: "Name", value: "G.S.PRIYADHARSHINI", icon: "person" },
    { label: "Department", value: "MSc DCS", icon: "school" },
    { label: "Registration Number", value: "71762233034", icon: "numbers" },
    { 
      label: "LinkedIn Profile", 
      value: "linkedin.com/in/priyadharshinigs",
      fullLink: "https://www.linkedin.com/in/priyadharshinigs/",
      isLink: true,
      icon: "linkedin",
      color: "#0077B5"
    },
    { 
      label: "GitHub Profile", 
      value: "github.com/PriyadharshiniGS",
      fullLink: "https://github.com/PriyadharshiniGS",
      isLink: true,
      icon: "github",
      color: "#333333"
    }
  ];

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      {/* Top Navigation */}
      <div className="bg-white p-4 flex items-center shadow-sm">
        <span 
          className="material-icons cursor-pointer" 
          onClick={() => setLocation("/profile")}
        >
          arrow_back
        </span>
        <h1 className="ml-4 font-semibold">Personal Details</h1>
      </div>

      {/* Profile Image */}
      <div className="bg-white p-8 flex flex-col items-center border-b border-gray-100">
        <div className="relative">
          <img 
            src={IMAGES.profileFull} 
            alt="Profile" 
            className="w-28 h-28 rounded-full object-cover border-2 border-[#6320EE] shadow-md" 
          />
          <div className="absolute bottom-0 right-0 bg-[#6320EE] rounded-full p-1.5 shadow-md">
            <span className="material-icons text-white text-sm">edit</span>
          </div>
        </div>
        <h2 className="font-semibold text-xl mt-4">G.S.PRIYADHARSHINI</h2>
        <p className="text-sm text-[#666666] mt-1">MSc DCS Student</p>
        <p className="text-xs text-[#888888] mt-1">Chennai, India</p>
      </div>

      {/* Personal Info */}
      <div className="p-5 space-y-5">
        {personalInfo.map((info) => (
          <div key={info.label} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center">
              {info.icon === "linkedin" ? (
                <div className="w-10 h-10 bg-[#E6F2FF] rounded-full flex items-center justify-center">
                  <FaLinkedin className="text-[#0077B5] text-xl" />
                </div>
              ) : info.icon === "github" ? (
                <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                  <FaGithub className="text-[#333333] text-xl" />
                </div>
              ) : (
                <div className="w-10 h-10 bg-[#F8F2FF] rounded-full flex items-center justify-center">
                  <span className="material-icons text-[#6320EE]">{info.icon}</span>
                </div>
              )}
              <div className="ml-3">
                <label className="text-xs text-[#888888]">{info.label}</label>
                {info.isLink ? (
                  <a 
                    href={info.fullLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#6320EE] block"
                    style={{color: info.color}}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-medium">{info.value}</p>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="mt-6 px-4">
          <button 
            className="w-full py-3 border border-[#6320EE] text-[#6320EE] rounded-xl font-medium"
            onClick={() => setLocation("/profile")}
          >
            Back to Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
