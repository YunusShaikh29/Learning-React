import { useParams } from "react-router-dom"


const EventDetailPage = () => {
    const param = useParams()

    return <h1>This is a {param.eventId} event!</h1>
}

export default EventDetailPage