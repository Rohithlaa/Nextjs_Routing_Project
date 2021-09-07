import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventId = () => {
  const router = useRouter();
  console.log(router.query.id);

  const event = getEventById(router.query.id);
    console.log(event)

  if (!event) {
   return   <h1>No data found</h1>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventId;
