import React from 'react'
import axios from 'axios'
import requests from '../../reaquests'
const Hero = () => {
    const [movies, setMovies] = React.useState([])
    const randomeMovie = movies[Math.floor(Math.random() * movies.length)]

    React.useEffect(() => {
        axios.get(requests.requestPopular)
        .then((res =>{
            setMovies(res.data.results.filter((item) => item?.title !== "X")) 
        }))
    },[])
    const etc = (str, num) => {
        if(str?.length>num){
            return str.slice(0, num) + '...';
        }else {
            return str;
        }
    }
    
    return (
        <div className='w-full h-[550px] text-white'>
            <div className="w-full h-full">
                <div className='w-full h-[550px] absolute bg-gradient-to-r from-black'></div>
                <img 
                className='w-full h-full object-cover' 
                src={`https://image.tmdb.org/t/p/original/${randomeMovie?.poster_path}`} 
                alt={randomeMovie?.title} 
                title={randomeMovie?.title} 
                />
                <div className='flex flex-col gap-3 px-5 absolute w-full h-[550px] top-0 justify-center'>
                    <h1 className=' text-2xl'>{randomeMovie?.title} </h1>
                    <span className=' text-gray-500'>{randomeMovie?.release_date}</span>
                    <span className=' w-full md:max-w-[70%]'>
                        {etc(randomeMovie?.overview, 150)}
                        </span>
                    <div>
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                        <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero