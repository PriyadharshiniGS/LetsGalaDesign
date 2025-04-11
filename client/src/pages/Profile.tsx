import { useLocation } from "wouter";
import { IMAGES } from "@/lib/utils";

const Profile = () => {
  const [, setLocation] = useLocation();

  const profileOptions = [
    [
      { title: "Personal Details", icon: "person", path: "/personal-details" },
      { title: "Payment Methods", icon: "credit_card" },
      { title: "Notifications", icon: "notifications" }
    ],
    [
      { title: "Privacy & Security", icon: "security" },
      { title: "Help Center", icon: "help_outline" },
      { title: "About App", icon: "info_outline" }
    ]
  ];

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      {/* Top Section */}
      <div className="bg-[#6320EE] text-white p-6 pt-10 pb-8 rounded-b-3xl">
        <div className="flex items-center">
          <img 
            src={IMAGES.profileFull} 
            alt="Profile" 
            className="w-20 h-20 rounded-full object-cover border-2 border-white/80 shadow-md" 
          />
          <div className="ml-4">
            <h1 className="font-semibold text-xl">G.S. Priyadharshini</h1>
            <p className="text-sm text-white/90 mt-1">priyadharshini.gs@gmail.com</p>
            <button className="mt-2 bg-white/20 text-white text-xs px-3 py-1 rounded-full flex items-center">
              <span className="material-icons text-sm mr-1">edit</span>
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Profile Options */}
      <div className="p-4 -mt-4 space-y-4">
        {profileOptions.map((group, groupIndex) => (
          <div key={groupIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
            {group.map((option, optionIndex) => (
              <div key={option.title}>
                {optionIndex > 0 && <div className="border-t border-[#F0F0F0]"></div>}
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  onClick={() => option.path && setLocation(option.path)}
                >
                  <div className="flex items-center">
                    <div className="w-9 h-9 bg-[#F8F2FF] rounded-full flex items-center justify-center">
                      <span className="material-icons text-[#6320EE] text-xl">{option.icon}</span>
                    </div>
                    <span className="ml-3 font-medium text-[#333333]">{option.title}</span>
                  </div>
                  <span className="material-icons text-[#BBBBBB]">arrow_forward_ios</span>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 flex items-center cursor-pointer hover:bg-gray-50">
            <div className="w-9 h-9 bg-[#FFF2F2] rounded-full flex items-center justify-center">
              <span className="material-icons text-red-500 text-xl">logout</span>
            </div>
            <span className="ml-3 font-medium text-red-500">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
