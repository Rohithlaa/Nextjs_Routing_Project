import Event_list_items from "./Event_list_items";
import classes from './Event-list.module.css'

const Event_list = ({ items }) => {
  return (
    <>
      <ul className={classes.list}> 
        {items.map((event) => (
          <Event_list_items
            key ={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            image={event.image}
          />
        ))}
      </ul>
    </>
  );
};

export default Event_list;
