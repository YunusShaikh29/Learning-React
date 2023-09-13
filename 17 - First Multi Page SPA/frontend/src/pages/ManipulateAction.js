import { json, redirect } from "react-router-dom";

 const ManipulateAction = async ({request, params}) => {

    const method = request.method;
    const data = await request.formData()

    const formData = {
        title : data.get('title'),
        image : data.get('image'),
        date : data.get('date'),
        description : data.get('description')
    }

    let url = 'http://localhost:8080/events'

    if(method === 'PATCH'){
        const id = params.eventId
        url = 'http://localhost:8080/events/' + id
    }
    

    const response = await fetch(url, {
        method : method,
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData)
    })

    if (!response.ok) {
        throw json({ message: "Sending data failed" }, { status: 500 });
      }
    
      return redirect('/events')

}

export default ManipulateAction