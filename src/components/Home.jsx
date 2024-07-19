import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);

    const getImages = async () => {
        try {
            const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
            setImages(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getImages();
    }, [page]);

    return (
        <>
            <div className=" w-[100%]  flex items-center gap-[2vw]  flex-nowrap overflow-hidden mt-[7vw] " >
                {images.map((e) => (
                 <div key={e.id} className="w-[22%] ">
                 <img className="w-full object-contain" src={e.download_url} alt="" />
                 <h2>{e.author}</h2>
             </div>
            
                ))}
            </div>
           <div className="w-full flex items-center gap-[2vw] text-center">
             <h3 className="text-center text-2xl hover:text-pink-400 cursor-pointer "  onClick={(e)=> (setPage(page - 1))} >Prev</h3>
            <h3 className="text-center text-2xl " >{page}</h3>
            <h3  className="text-center text-2xl hover:text-pink-400 cursor-pointer " onClick={(e)=> (setPage(page + 1))} >Next</h3></div>
        </>
    );
};

export default Home;
