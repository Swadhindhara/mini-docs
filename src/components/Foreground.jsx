import { useRef } from "react"
import Card from "./Card"


const Foreground = () => {
    const ref = useRef(null)
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: '.8mb',
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: '.8mb',
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: '.8mb',
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: '.8mb',
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },{
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: '.8mb',
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        }
    ]
    return (
        <>
            <div>
                <div ref={ref} className="fixed w-full h-screen z-[3] top-0 left-0 flex gap-7 flex-wrap p-5">
                    {
                        data.map((item, index) => (
                            <Card  key={index} item={item} reference={ref}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Foreground