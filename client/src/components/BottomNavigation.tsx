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
    <div className="fixed bottom-0 left-0 right-0 bg-white p-2 flex justify-around items-center shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-10">
      {navItems.map((item) => {
        const isActive = 
          (item.path === "/" && location === "/") || 
          (item.path !== "/" && location.startsWith(item.path));
          
        return (
          <div 
            key={item.name}
            className="flex flex-col items-center p-2 cursor-pointer"
            onClick={() => setLocation(item.path)}
          >
            <span className={`material-icons ${isActive ? 'text-[#6320EE]' : 'text-[#888888]'}`}>
              {item.icon}
            </span>
            <span className={`text-xs mt-1 ${isActive ? 'text-[#6320EE]' : 'text-[#888888]'}`}>
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
