import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "@/components/meetups/MeetupDetail";
import React from "react";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupProps.image}
      title={props.meetupProps.title}
      address={props.meetupProps.address}
      description={props.meetupProps.description}
    />
  );
};

export default MeetupDetails;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://yunus-01:yunus-01@cluster0.chuxsdq.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://yunus-01:yunus-01@cluster0.chuxsdq.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  //fetch data from an api.
  return {
    props: {
      meetupProps: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res

//   //fetch data from an api.
//   return {
//     props:  {
//       meetups : DUMMY_MEETUPS
//     }
//   }

// }
