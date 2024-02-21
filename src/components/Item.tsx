// import { motion } from "framer-motion";
import { useDrag } from "react-dnd";
import { Location } from "../App";
import { useEffect, useState } from "react";

type Props = {
    src: string;
    type: "wolf" | "sheep" | "cabbage"
    location: Location
    onClick: () => void
}

export const Item = (props: Props) => {
    const { src, type, location, onClick} = props


    // useEffect(() => {
    // }, [location]);

    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: type,
    //     item: {type: type, src: src},
    //     collect: monitor => ({
    //         isDragging: !!monitor.isDragging(),
    //     }),
    // }))

    // const cursorStyle = isDragging ? "grabbing" : "grab";

    return (
            <div
                // ref={drag}
                style={{
                    scale: 0.8,
                    fontSize: 25,
                    fontWeight: 'bold',
                    // cursor: cursorStyle,
                }}
            >
                <img src={src} alt={type} width="250px" 
                onClick={onClick}/>
            </div>
    )
}
