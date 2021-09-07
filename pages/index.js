import { getFeaturedEvents } from "../dummy-data";
import Event_list from "../components/events/Event_list";


const HomePage = () => {

    const featuredEvent = getFeaturedEvents()
     return (
         <Event_list items={featuredEvent}/>
     )
}
export default HomePage;