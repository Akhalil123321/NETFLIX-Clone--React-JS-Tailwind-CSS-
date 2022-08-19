import React from 'react'
import axios from 'axios'
import Movie from './Movie'
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
    return (
        <div>
            <h2 className='text-white font-bold md:text-xl p-5'>{title}</h2>
            <div className='relative flex items-center'>
                <div className='px-4' id='slider'>
                    {movie.map((item, id) => (
                        <Movie key={id} item={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Row