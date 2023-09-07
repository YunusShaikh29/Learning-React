// import { useEffect, useState } from 'react';

import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //... will handle errors later
    // // one way of handling error would be
    // return { isError: true, message: "Could not fetch events." };

    //another way : handling this error in main route/ app.js file
    // throw { message : 'Could not fetch events!'}

    //we can throw the responses and then use them to output error messages!
    throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
      status: 500,
    });
  } else {
    // const resData = await response.json();
    // return resData.events;
    return response;
  }
};
