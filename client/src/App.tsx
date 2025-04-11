import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import Home from "@/pages/Home";
import EventDetails from "@/pages/EventDetails";
import Explore from "@/pages/Explore";
import Tickets from "@/pages/Tickets";
import Profile from "@/pages/Profile";
import PersonalDetails from "@/pages/PersonalDetails";
import BottomNavigation from "@/components/BottomNavigation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/event-details" component={EventDetails} />
      <Route path="/explore" component={Explore} />
      <Route path="/tickets" component={Tickets} />
      <Route path="/profile" component={Profile} />
      <Route path="/personal-details" component={PersonalDetails} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-[Poppins] min-h-screen bg-[#F5F5F5]">
        <Router />
        <BottomNavigation />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
