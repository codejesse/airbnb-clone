import { useState, useRef, useEffect, useContext } from 'react';


const Options: React.FC = () => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <div className="shadow-[0_4px_14px_-15px_rgba(0,1,1,0.3)] flex flex-row">
            <div className="h-20 w-full flex flex-row-reverse">
                {/* 
                <div className='flex flex-row m-auto'>
                    <button className="w-10 h-10 bg-white rounded-full mr-3 border" onClick={moveNext}>Next</button>
                    <button className='border'>Filter</button>
                </div>
                */}
                <div className="w-full p-7 flex flex-row border">
                    <div className='flex flex-row m-auto'>
                        <button className="w-10 h-10 bg-white rounded-full border m-auto" onClick={movePrev}>Prev</button>
                    </div>
                    <div ref={carousel} className="carousel-container relative flex gap-5 w-full h-full overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 ml-7">
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                        <p className='mr-7'>item</p>
                    </div>
                    <div className='flex flex-row m-auto'>
                        <button className="w-10 h-10 bg-white rounded-full mr-3 border" onClick={moveNext}>next</button>
                        <button className='border w-[100px] rounded-xl'>Filter</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Options;