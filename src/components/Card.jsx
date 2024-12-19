import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { VscClose } from "react-icons/vsc";
import { motion } from "motion/react"



const Card = ({ item,reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={1} 
        dragTransition={{bounceStiffness: 200, bounceDamping: 10}}
        className="w-60 h-72 rounded-[40px] bg-zinc-500 text-white px-8 py-10 relative overflow-hidden flex-shrink-0">
            <FaFileAlt />
            <p className="text-sm mt-5 font-semibold leading-tight">{item.desc}</p>
            <div className="footer absolute bottom-0 w-full left-0   ">
                <div className="flex items-center justify-between px-8 py-3 mb-3">
                    <h5>{item.fileSize}</h5>
                    <span className="w-7 h-7 bg-white rounded-full items-center justify-center flex">
                        {
                            item.close ? <VscClose color="#000000" /> : <MdOutlineFileDownload color="#000000" />
                        }
                    </span>
                </div>
                {
                    item.tag.isOpen &&
                        (<div className={`tag w-full py-4 bg-${item.tag.tagColor}-400 flex items-center justify-center`}>
                            <h3 className="text-sm font-semibold ">{item.tag.tagTitle}</h3>
                        </div>) 
                }

            </div>
        </motion.div>
    )
}

export default Card