import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
// import { useSearchParams } from "next/navigation";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "The first Image",
    image:
      "https://outdoortara.com/wp-content/uploads/2022/02/Kings-Landing-Dubrovnik-1.jpg",
    address: "some address 5, 1234 some city",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "The second Image",
    image:
      "https://outdoortara.com/wp-content/uploads/2022/02/Kings-Landing-Dubrovnik-1.jpg",
    address: "somewhere 10, 1234 some city",
    description: "This is a second meetup",
  },
];

const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return <MeetupList meetups={props.meetups} />;
};

export default HomePage;


export const getStaticProps = async () => {
  //fetch data from an api

  // const response = await fetch()

  const client = await MongoClient.connect('mongodb+srv://yunus-01:yunus-01@cluster0.chuxsdq.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray()

    client.close()

  return {
    props: {
      meetups : meetups.map(meetup => ({
        title : meetup.title,
        image : meetup.image,
        address : meetup.address,
        description: meetup.description,
        id : meetup._id.toString()
      }))
    },
    revalidate : 1
  }
}