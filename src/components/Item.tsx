// import { motion } from "framer-motion";
import { useDrag } from "react-dnd";
import { Location } from "../App";
import { useEffect, useState } from "react";

type Props = {
    src: string;
    type: "wolf" | "sheep" | "cabbage"
    location: Location
}

export const Item = (props: Props) => {
    const { src, type, location} = props
    const [style, setStyle] = useState({});


    useEffect(() => {
        // setStyle(getItemStyle(location));
    }, [location]);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: type,
        item: {type: type, src: src},
        // canDrag: () => locations[type] === boatLocation,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const cursorStyle = isDragging ? "grabbing" : "grab";

    // アニメーション
    // const variants = {
    //     left: { x: 0 },
    //     right: { x: 700 },
    // };

    return (
        // <motion.div
        //     initial={locations[type]}
        //     animate={locations[type]}
        //     variants={variants}
        //     transition={{ duration: 0.5 }}
        //     onAnimationComplete={onMoveComplete}
        // >
            <div
                ref={drag}
                style={{
                    scale: 0.8,
                    fontSize: 25,
                    fontWeight: 'bold',
                    cursor: cursorStyle,
                }}
            >
                <img src={src} alt={type} width="150px" style={style} />
            </div>
        // </motion.div>
    )
}
