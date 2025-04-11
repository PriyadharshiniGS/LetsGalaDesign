import { useLocation } from "wouter";

const BottomNavigation = () => {
  const [location, setLocation] = useLocation();
  
  // Define the main navigation items
  const navItems = [
    { name: "Home", icon: "home", path: "/" },
    { name: "Explore", icon: "explore", path: "/explore" },
    { name: "Tickets", icon: "confirmation_number", path: "/tickets" },
    { name: "Profile", icon: "person", path: "/profile" }
  ];

  // Check if this is a screen that should not show bottom navigation
  const hideBottomNav = ["/event-details", "/personal-details"].includes(location);

  if (hideBottomNav) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white pt-3 pb-2 flex justify-around items-center shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-10 border-t border-gray-100">
      {navItems.map((item) => {
        const isActive = 
          (item.path === "/" && location === "/") || 
          (item.path !== "/" && location.startsWith(item.path));
          
        return (
          <div 
            key={item.name}
            className={`flex flex-col items-center p-1 cursor-pointer ${isActive ? 'relative' : ''}`}
            onClick={() => setLocation(item.path)}
          >
            {isActive && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#6320EE] rounded-full"></div>
            )}
            <span className={`material-icons ${isActive ? 'text-[#6320EE]' : 'text-[#999999]'}`}>
              {item.icon}
            </span>
            <span className={`text-xs mt-1 ${isActive ? 'text-[#6320EE] font-medium' : 'text-[#999999]'}`}>
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
