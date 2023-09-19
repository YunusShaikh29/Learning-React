// import { useEffect, useState } from 'react';

import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const {events} = useLoaderData();

  return (
    <Suspense fallback={<p style={{textAlign : 'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // // one way of handling error would be
    // return { isError: true, message: "Could not fetch events." };

    //another way : handling this error in main route/ app.js file
    // throw { message : 'Could not fetch events!'}

    //we can throw the responses and then use them to output error messages!
    // throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
    //   status: 500,
    // });

    //json(): provided by r-r-d, which automatically converts the data into json format
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
