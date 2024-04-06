import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import { FaCircleDown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
const Card = ({ data,reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2}  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className=' relative text-white flex-shrink-0 px-8 py-10 w-60 h-72 rounded-[40px] bg-zinc-900/90 overflow-hidden'>
            <FaFileDownload />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full  left-0'>
                <div className='flex items-center justify-between mb-3 py-3 px-8'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose /> : <FaCircleDown size={"2em"} color='#fff' />}
                    </span>
                </div>
                {data.tag.isOpen && (<div className={`tag w-full h-10 ${data.tag.tagColor === "blue" ? "bg-blue-600":"bg-green-600"} py-4 flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>)}
            </div>
        </motion.div>
    )
}

export default Card