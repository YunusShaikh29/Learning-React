import MeetupDetail from "@/components/meetups/MeetupDetail";
import React from "react";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://outdoortara.com/wp-content/uploads/2022/02/Kings-Landing-Dubrovnik-1.jpg"
      title="First meetup"
      address="some city"
      description="great meeup"
    />
  );
};

export default MeetupDetails;

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId : 'm1'
        }
      },
      {
        params: {
          meetupId : 'm2'
        }
      },
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  
  //fetch data from an api.
  return {
    props: {
      meetupProps: {
        image:
          "https://outdoortara.com/wp-content/uploads/2022/02/Kings-Landing-Dubrovnik-1.jpg",
        id: meetupId,
        title: "First meetup",
        address: "some city",
        description: "great meeup",
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