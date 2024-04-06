import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    // const data = [
    //     desc, fileSize, closeOrDownload, tagDetails
    // ]

    const ref = useRef(null)

    const data = [
        {
            desc: "this is a simple docs app created by react.js",
            fileSize: "5MB",
            close: true,
            tag: { isOpen: true, tagTitle: "download now", tagColor: "green" }

        },
        {
            desc: "this is a simple docs app created by react.js",
            fileSize: "2MB",
            close: false,
            tag: { isOpen: false, tagTitle: "download now", tagColor: "blue" }

        },
        {
            desc: "this is a simple docs app created by react.js",
            fileSize: "10MB",
            close: false,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" }

        }
    ]

    return (
        <div ref ={ref} className=' fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-8'>
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground