import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../libs/controller";


const Details = () => {
    const [homes, setHome] = useState({})
    const { id } = useParams()

    const getHotel = doc(firestore, `hotels/${id}`)

    useEffect(() => {
        const fetchHomeData = async () => {
            const docSnap = await getDoc(getHotel)
            if (docSnap.exists()) {
                const newHotelObj = {
                    id: docSnap.id,
                    ...docSnap.data()
                }
                setHome(newHotelObj)
            } else {
                console.log("No such document")
            }
        }
        fetchHomeData()
    }, [])

    console.log(id, "id")
    console.log(homes)

    return (
        <div>
            {/* Map through the homes state here to grab the necessary detail based on the id */}
        </div>
    );
}

export default Details;