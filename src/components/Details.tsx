import { doc, DocumentData, getDoc, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore, hotelCollection } from "../libs/controller";
import { NewHotelType } from "../types/types";


const Details = () => {
    const [homes, setHome] = useState<NewHotelType[]>([])
    const { id } = useParams()

    const getHotel = doc(firestore, `hotels/${id}`)

    useEffect(() => onSnapshot(hotelCollection, async (snapshot: QuerySnapshot<DocumentData>) => {
        const docSnap = await getDoc(getHotel)
        setHome(
            snapshot.docs.map((doc) => {
                return {
                    id: docSnap.id,
                    ...docSnap.data(),
                }
            })
        )
    }), [])

    const values = Object.values(homes)
    // console.log(values)

    if (values.length === 0) {
        return (
            <div className="mt-[200px] m-12">
                <div role="status" className="rounded-[15px] w-5/7 h-[286.89px] animate-pulse dark:border-gray-700">
                    <div className="h-[296.89px] flex items-center justify-center mb-4 bg-gray-300 rounded-[15px] dark:bg-gray-700">
                        <svg className="w-12 h-25 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
            </div>
        )
    }


    return (
        <div className="mt-[200px] m-12">
            <div className="text-[30px] mb-7">{homes[0].title}</div>
            <div className="flex flex-row gap-2">
                <div className="text-sm mt-[-13px] mb-7">{homes[0].stars} stars • </div>
                <div className="text-sm mt-[-13px] underline mb-7">{homes[0].review} reviews • </div>
                <div className="text-sm mt-[-13px] underline mb-7">{homes[0].country}</div>
            </div>
            <div className="h-[396.89px] flex items-center justify-center bg-gray-300 rounded-[15px] dark:bg-gray-700">
                <img className="h-full rounded-[15px] w-full" src={homes[0].location} alt={homes[0].title} />
            </div>
            <div className="flex flex-col md:flex-row xl:flex-row mt-12">
                <div className="flex flex-col w-8/12">
                    <div className="text-[30px]">{homes[0].title}</div>
                    <div className="text-sm mt-4 w-full">{homes[0].description}</div>
                    <div className="mt-14">
                        <h1 className="text-[30px] font-medium">What this place offers</h1>
                        <div className="mt-7 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-3">
                            <div className="flex flex-row gap-2 w-full">
                                <div>🎉</div>
                                <div>{homes[0].feature}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-auto flex flex-col w-full md:w-[398px] h-[496px] bg-white border rounded-xl p-6">
                    <div className="flex flex-row gap-2 p-2">
                        <h1 className="text-2xl mr-10 auto">${homes[0].totalPrice}</h1>
                        <div className="text-sm">{homes[0].stars} stars • </div>
                        <div className="text-sm text-neutral-600 underline auto">{homes[0].review} reviews</div>
                    </div>
                    <div className="w-full h-[129px] rounded-[10px] border mt-7"></div>
                    <button className="w-full h-[52px] bg-[#FF5A5F] rounded-[10px] text-white mt-7">Reserve</button>
                </div>
            </div>
        </div>
    );
}

export default Details;