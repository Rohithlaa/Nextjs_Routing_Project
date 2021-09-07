import { getAllEvents } from "../../dummy-data";
import Eventlist from '../../components/events/Event_list'
import EventsSearch from  '../../components/events/event-search'
import { Fragment } from "react";
import { useRouter } from "next/router";

const Event = () => {
    const router = useRouter()

    const events = getAllEvents()

    const findEventsHandler = (year,month) => {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

     return (
         <Fragment>
             <EventsSearch onSearch = {findEventsHandler}/>
            <Eventlist items={events}/>
         </Fragment>
     )
}

export default Event;