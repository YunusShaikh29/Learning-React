import '../index.css'

const ListItem = (props) =>{
    return (
        <li className='concept'>
            <img src={props.image} alt={props.title}></img>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>
    )
}

export default ListItem