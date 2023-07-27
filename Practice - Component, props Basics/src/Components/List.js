import "../index.css";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <ul id="concepts">
      <ListItem
        image={props.concept[0].image}
        title={props.concept[0].title}
        description={props.concept[0].description}
      />
      <ListItem
        image={props.concept[1].image}
        title={props.concept[1].title}
        description={props.concept[1].description}
      />
      <ListItem
        image={props.concept[2].image}
        title={props.concept[2].title}
        description={props.concept[2].description}
      />

    </ul>
  );
};

export default List;
