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

// These are the routes for the redesigned LetsGala site
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/all-vendors" component={Explore} />
      <Route path="/weddings" component={EventDetails} />
      <Route path="/birthdays" component={Tickets} />
      <Route path="/baby-showers" component={Home} />
      <Route path="/corporate-events" component={Home} />
      <Route path="/become-member" component={Profile} />
      <Route path="/personal-details" component={PersonalDetails} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-[Poppins] min-h-screen">
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
