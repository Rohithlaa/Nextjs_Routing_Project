import { useRouter } from "next/router";


const SlugPage = () => {
    const router = useRouter()
    console.log(router.query)
     return(
         <h1>This is Slug page in event</h1>
     )
}

export default SlugPage;