import { getAllEvents } from "../../dummy-data";
import Eventlist from '../../components/events/Event_list'
import EventsSearch from  '../../components/events/event-search'
import { Fragment } from "react";

const Event = () => {

    const events = getAllEvents()

     return (
         <Fragment>
             <EventsSearch />
            <Eventlist items={events}/>
         </Fragment>
     )
}

export default Event;