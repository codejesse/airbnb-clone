import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NewHotelType } from "../types/types";
import { hotelCollection } from "../libs/controller";
import { Link } from "react-router-dom";


const Lists = () => {
    const [homes, setHomes] = useState<NewHotelType[]>([])

    useEffect(() => onSnapshot(hotelCollection, (snapshot: QuerySnapshot<DocumentData>) => {
        setHomes(
            snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
        )
    }), [])

    if (homes.length === 0) {
        return (
            <div className="mt-[200px] text-slate-400 p-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 m-4">
                <div role="status" className="max-w-sm rounded-[15px] w-[302px] h-[286.89px] animate-pulse dark:border-gray-700">
                    <div className="h-[286.89px] flex items-center justify-center mb-4 bg-gray-300 rounded-[15px] dark:bg-gray-700">
                        <svg className="w-12 h-25 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div role="status" className="max-w-sm rounded-[15px] w-[302px] h-[286.89px] animate-pulse dark:border-gray-700">
                    <div className="h-[286.89px] flex items-center justify-center mb-4 bg-gray-300 rounded-[15px] dark:bg-gray-700">
                        <svg className="w-12 h-25 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div role="status" className="max-w-sm rounded-[15px] w-[302px] h-[286.89px] animate-pulse dark:border-gray-700">
                    <div className="h-[286.89px] flex items-center justify-center mb-4 bg-gray-300 rounded-[15px] dark:bg-gray-700">
                        <svg className="w-12 h-25 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div role="status" className="max-w-sm rounded-[15px] w-[302px] h-[286.89px] animate-pulse dark:border-gray-700">
                    <div className="h-[286.89px] flex items-center justify-center mb-4 bg-gray-300 rounded-[15px] dark:bg-gray-700">
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-52 m-8">
            {homes && homes.map((home, index) => (
                <Link to={`/homes/${home.id}`} key={index}>
                    <div className="m-auto" key={index}>
                        <div className="w-full h-[286.89px] rounded-[15px] border bg-neutral-100">
                            <div className="w-full h-[286.89px]">
                                <img className="w-full h-full rounded-[15px]" src={home.location} alt={home.title} />
                            </div>
                        </div>
                        <p className="mt-4">{home.title}</p>
                        <p className="text-sm text-[#666666]">3,123 kilometers, away</p>
                        <p className="text-sm">$ {home.perNight} night</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Lists;