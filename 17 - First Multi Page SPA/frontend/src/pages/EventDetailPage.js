import { json, useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  // const {eventId} = useParams()

  // return <h1>This is a {eventId} event!</h1>
  // const data = useLoaderData();

  const data = useRouteLoaderData('event-detail')

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch the event detail" },
      { status: 500 }
    );
  } else {
    return response;
  }
};
