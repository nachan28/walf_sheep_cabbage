import { useDrop } from "react-dnd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Location } from "../App";

type Props = {
    location: Location;
}

type Item = {
    type: string;
    src: string;
}



export const Boat = (props: Props) => {
    const { location } = props;
    const [boatItem, setBoatItem] = useState<Item | null>(null)
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: ["wolf", "sheep", "cabbage"],
            drop: (item: Item) => handleItemDropped(item),
            collect: monitor => ({
                isOver: !!monitor.isOver()
            })
        })
    )

    const handleItemDropped = (item: Item) => {
        setBoatItem({ ...item })
    }

    const variants = {
        left: { x: 0 },
        right: { x: 500 },
    };

    return (
        <motion.div
            initial={location}
            animate={location}
            variants={variants}
            transition={{ duration: 0.5 }}
            style={{
                position: 'relative',
                width: '200px',
            }}
        >
            <div
                ref={drop}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    // zIndex: 1
                }}
            >
                {boatItem && (
                    <img src={boatItem.src} alt={boatItem.type} width="150px" />
                )}
                <img src="/boat.png" alt="boat" width="200px" />
            </div>
        </motion.div>
    )
}
