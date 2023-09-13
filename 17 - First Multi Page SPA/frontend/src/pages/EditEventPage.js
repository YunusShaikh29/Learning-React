import { useRouteLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm"

const EditEventPage = () => {

    const data = useRouteLoaderData('event-detail')

    return <EventForm event={data.event} method='patch'/>
}

export default EditEventPage


// export const action = async ({request, params}) => {

//     const id = params.eventId;
//     const data = await request.formData()

//     const formData = {
//         title : data.get('title'),
//         image : data.get('image'),
//         date : data.get('date'),
//         description : data.get('description')
//     }

//     const response = await fetch('http://localhost:8080/events/' + id, {
//         method : 'PATCH',
//         headers : {
//             'Content-Type' : 'application/json'
//         },
//         body : JSON.stringify(formData)
//     })

//     if (!response.ok) {
//         throw json({ message: "Sending data failed" }, { status: 500 });
//       }
    
//       return redirect('/events')

// }