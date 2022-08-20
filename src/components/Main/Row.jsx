import React from 'react'
import axios from 'axios'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const Row = ({ title, fetchURL, rowID }) => {
    const[movie,setMovie] = React.useState([])
    React.useEffect(() => {
        axios(fetchURL)
        .then(res=>{
            setMovie(res.data.results.filter((item) => item?.title !=="Return to Horror High"&& 
            item?.title !=="American Horror Story pilot"&&
            item?.title !=="After Ever Happy"&&
            item?.title !=="The Rocky Horror Picture Show"&&
            item?.title !=="Paganini Horror"&&
            item?.title !=="Purple Hearts"&&
            item?.title !=="Gabriel's Inferno"&&
            item?.title !=="Gabriel's Inferno: Part II")) 
        })
    },[fetchURL])

    // scroll arrow
    const slideLeft = () => {
        const slide = document.getElementById(`slider${rowID}`)
        slide.scrollLeft = slide.scrollLeft - 500;
    }
    const slideRight = () => {
        const slide = document.getElementById(`slider${rowID}`)
        slide.scrollLeft = slide.scrollLeft + 500;
    }
    return (
        <div>
            <h2 className='text-white font-bold md:text-xl p-5'>{title}</h2>
            <div className='px-3 relative flex items-center group'>
                <MdChevronLeft
                onClick={slideLeft}
                className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40}
                />
                <div 
                className= 'w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative' 
                id={'slider' + rowID}
                >
                    {movie.map((item, id) => (
                        <Movie key={id} item={item}/>
                    ))}
                </div>
                <MdChevronRight
                onClick={slideRight}
                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40}
                />
            </div>
        </div>
    )
}

export default Row