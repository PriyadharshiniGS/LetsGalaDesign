import { IMAGES } from "@/lib/utils";
import EventCard from "@/components/EventCard";

const Home = () => {
  const categories = [
    { name: "Parties", icon: "celebration", bgColor: "bg-[#E6F2FF]", textColor: "text-[#6320EE]" },
    { name: "Sports", icon: "sports_soccer", bgColor: "bg-[#FFF3E6]", textColor: "text-[#FF9500]" },
    { name: "Music", icon: "music_note", bgColor: "bg-[#E6FFFA]", textColor: "text-[#00B5AD]" },
    { name: "Food", icon: "restaurant", bgColor: "bg-[#FFE6E6]", textColor: "text-[#FF3B30]" },
    { name: "Arts", icon: "movie", bgColor: "bg-[#F5E6FF]", textColor: "text-[#AF52DE]" },
  ];

  const upcomingEvents = [
    {
      image: IMAGES.events.musicFestival,
      title: "Music Festival",
      date: "May 20, 2023",
      location: "Convention Center, Chennai",
      price: "$25"
    },
    {
      image: IMAGES.events.foodFestival,
      title: "Food Festival",
      date: "June 5, 2023",
      location: "Beach Road, Chennai",
      price: "$15"
    }
  ];

  const popularEvents = [
    {
      image: IMAGES.events.techConference,
      title: "Tech Conference",
      date: "May 25, 2023",
      location: "IT Park, Chennai",
      price: "$40"
    },
    {
      image: IMAGES.events.artExhibition,
      title: "Art Exhibition",
      date: "June 10, 2023",
      location: "Art Gallery, Chennai",
      price: "$10"
    }
  ];

  return (
    <div className="pb-16">
      {/* Top Navigation */}
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="material-icons text-[#6320EE]">place</span>
          <div>
            <p className="text-xs text-[#888888]">Your Location</p>
            <p className="text-sm font-medium">Chennai, TN</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className="material-icons text-[#222222]">notifications_none</span>
          <img src={IMAGES.profile} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4 bg-white">
        <div className="relative">
          <input
            type="text"
            placeholder="Search events"
            className="w-full rounded-full py-2 px-5 bg-[#F5F5F5] text-sm outline-none"
          />
          <span className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-[#888888]">
            search
          </span>
        </div>
      </div>

      {/* Banner */}
      <div className="px-4 py-3 bg-white">
        <div className="bg-[#6320EE] rounded-xl p-4 text-white flex justify-between items-center">
          <div className="w-3/5">
            <h3 className="font-bold text-lg">Join LetsGala Community</h3>
            <p className="text-xs mt-1 opacity-90">Get updates on events happening around you</p>
            <button className="bg-white text-[#6320EE] text-xs px-4 py-1.5 rounded-full font-medium mt-3">
              Join Now
            </button>
          </div>
          <img src={IMAGES.community} alt="Community" className="w-1/3 object-contain" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold">Categories</h2>
          <span className="text-[#6320EE] text-sm">See All</span>
        </div>
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center">
              <div className={`w-14 h-14 rounded-full ${category.bgColor} flex items-center justify-center`}>
                <span className={`material-icons ${category.textColor}`}>{category.icon}</span>
              </div>
              <span className="text-xs mt-1">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="p-4 mt-2 bg-white">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold">Upcoming Events</h2>
          <span className="text-[#6320EE] text-sm">See All</span>
        </div>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.title}
              image={event.image}
              title={event.title}
              date={event.date}
              location={event.location}
              price={event.price}
            />
          ))}
        </div>
      </div>

      {/* Popular Events */}
      <div className="p-4 mt-2 bg-white">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold">Popular Events</h2>
          <span className="text-[#6320EE] text-sm">See All</span>
        </div>
        <div className="space-y-4">
          {popularEvents.map((event) => (
            <EventCard
              key={event.title}
              image={event.image}
              title={event.title}
              date={event.date}
              location={event.location}
              price={event.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
