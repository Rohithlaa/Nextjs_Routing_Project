import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/Event_list";

const SlugPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const numYear = +filteredData[0];
  const numMonth = +filteredData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ){
      return <p>Invalid Filter Please adjust values</p>
  }

   const filteredEvents = getFilteredEvents({
       year: numYear,
       month: numMonth
   });

   if(!filteredEvents || filteredEvents.length === 0){
       return <p>No Events found</p>
   }

    return <EventList items={filteredEvents}/>;
};

export default SlugPage;
