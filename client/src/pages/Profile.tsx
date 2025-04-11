import { useLocation } from "wouter";
import { IMAGES } from "@/lib/utils";

const Profile = () => {
  const [, setLocation] = useLocation();

  const profileOptions = [
    [
      { title: "Personal Details", icon: "person", path: "/personal-details" },
      { title: "Payment Methods", icon: "payment" },
      { title: "Notifications", icon: "notifications" }
    ],
    [
      { title: "Privacy & Security", icon: "security" },
      { title: "Help Center", icon: "help" }
    ]
  ];

  return (
    <div className="pb-16">
      {/* Top Section */}
      <div className="bg-[#6320EE] text-white p-6 pt-8">
        <div className="flex items-center">
          <img 
            src={IMAGES.profile} 
            alt="Profile" 
            className="w-16 h-16 rounded-full object-cover border-2 border-white" 
          />
          <div className="ml-4">
            <h1 className="font-semibold text-lg">John Doe</h1>
            <p className="text-sm opacity-90">john.doe@example.com</p>
          </div>
        </div>
      </div>

      {/* Profile Options */}
      <div className="p-4 space-y-3">
        {profileOptions.map((group, groupIndex) => (
          <div key={groupIndex} className="bg-white rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.08)]">
            {group.map((option, optionIndex) => (
              <div key={option.title}>
                {optionIndex > 0 && <div className="border-t border-[#E5E5E5]"></div>}
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => option.path && setLocation(option.path)}
                >
                  <div className="flex items-center">
                    <span className="material-icons text-[#6320EE]">{option.icon}</span>
                    <span className="ml-3">{option.title}</span>
                  </div>
                  <span className="material-icons text-[#888888]">keyboard_arrow_right</span>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.08)]">
          <div className="p-4 flex items-center cursor-pointer">
            <span className="material-icons text-red-500">exit_to_app</span>
            <span className="ml-3 text-red-500">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
