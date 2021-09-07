import Link from "next/link";
import Button from "../ui/Button";
import DateIcon from '../Icons/DateIcon'
import AddressIcon from '../Icons/address-icon'
import ArrowIcon from '../Icons/arrow-right-icon'
import classes from "./Event-item.module.css";

const Event_list_items = (props) => {
  const { title, image, date, location, id } = props;

  const humanreadabledate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const Address = location.replace(", ", "\n");
  const explorelink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanreadabledate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{Address}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={explorelink}>
            <span>Explore Event</span>
            <span className={classes.icon}><ArrowIcon/></span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Event_list_items;
