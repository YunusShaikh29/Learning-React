import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventRootLayout = () => {
  return (
    <>
      <EventsNavigation />
      <main style={{ margin: ".5rem auto", textAlign: "center" }}>
        <Outlet/>
      </main>
    </>
  );
};

export default EventRootLayout;
