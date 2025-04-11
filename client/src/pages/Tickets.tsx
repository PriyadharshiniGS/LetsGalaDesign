import { IMAGES } from "@/lib/utils";

const Tickets = () => {
  const ticketTabs = ["Upcoming", "Past"];
  
  const tickets = [
    {
      title: "Music Festival",
      date: "May 20, 2023 • 4:00 PM",
      ticketId: "#TK12345"
    },
    {
      title: "Tech Conference",
      date: "May 25, 2023 • 10:00 AM",
      ticketId: "#TK12346"
    }
  ];

  return (
    <div className="pb-16">
      {/* Top Navigation */}
      <div className="bg-white p-4">
        <h1 className="font-semibold text-lg">My Tickets</h1>
      </div>

      {/* Tickets Tabs */}
      <div className="bg-white mt-2 px-4">
        <div className="flex space-x-4 border-b border-[#E5E5E5]">
          {ticketTabs.map((tab, index) => (
            <div 
              key={tab}
              className={`px-4 py-3 ${index === 0 ? 'border-b-2 border-[#6320EE] text-[#6320EE] font-medium' : 'text-[#888888]'}`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Ticket Cards */}
      <div className="p-4 space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.ticketId} className="bg-white rounded-xl overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.08)]">
            <div className="p-3 border-b border-dashed border-[#E5E5E5]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{ticket.title}</h3>
                  <p className="text-xs text-[#888888] mt-1">{ticket.date}</p>
                </div>
                <img src={IMAGES.qrCode} alt="QR Code" className="w-14 h-14" />
              </div>
            </div>
            <div className="p-3 flex justify-between items-center">
              <div>
                <p className="text-xs text-[#888888]">Ticket ID</p>
                <p className="text-sm font-medium">{ticket.ticketId}</p>
              </div>
              <button className="bg-[#6320EE] text-white text-xs px-3 py-1.5 rounded-full">View</button>
            </div>
          </div>
        ))}

        {/* No Tickets State - Hidden by default as per design */}
        <div className="hidden text-center py-10">
          <span className="material-icons text-5xl text-[#E5E5E5]">confirmation_number</span>
          <h3 className="font-medium mt-3">No Tickets</h3>
          <p className="text-sm text-[#888888] mt-1">You don't have any tickets yet</p>
          <button className="bg-[#6320EE] text-white text-sm px-4 py-2 rounded-full mt-4">Explore Events</button>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
