import { useDrop } from "react-dnd";
import { motion } from "framer-motion";
import { BoatLocation, Locations } from "../App";
import { useEffect } from "react";
import { useAppState } from "../AppStateContext";

type Props = {
    boatLocation: BoatLocation
    selectedItem: DraggableItem | null
    setSelectedItem: (item: DraggableItem) => void
    onMoveComplete: () => void
    locations: Locations
    setLocations: (value: Locations | ((prev: Locations) => Locations)) => void
}

export type DraggableItem = {
    type: "wolf" | "sheep" | "cabbage";
    src: string;
}



export const Boat = (props: Props) => {
    const { boatLocation, selectedItem, setSelectedItem, onMoveComplete, setLocations, locations } = props;
    // const { selectedItem, setSelectedItem } = useAppState();


    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: ["wolf", "sheep", "cabbage"],
            canDrop: (item) => locations[item.type] === boatLocation,
            drop: (item: DraggableItem) => handleItemDropped(item),
            collect: monitor => ({
                isOver: !!monitor.isOver()
            })
        })
    )

    useEffect(() => {
        console.log("selectedItem changed,", selectedItem)
    }, [selectedItem])


    const handleItemDropped = (item: DraggableItem) => {
        // if (selectedItem) {
        //     console.log("if")
        //     setLocations((prev: Locations) => ({ ...prev, [selectedItem.type]: prev[item.type], [item.type]: "onboat" }))
        // } else {
        //     console.log("else")
        //     setLocations((prev: Locations) => ({ ...prev, [item.type]: "onboat" }))
        // }
        if (locations.wolf === "onboat") {
            setLocations((prev: Locations) => ({ ...prev, "wolf": prev[item.type], [item.type]: "onboat" }))
        } else if (locations.sheep === "onboat") {
            setLocations((prev: Locations) => ({ ...prev, "sheep": prev[item.type], [item.type]: "onboat" }))
        } else if (locations.cabbage === "onboat") {
            setLocations((prev: Locations) => ({ ...prev, "cabbage": prev[item.type], [item.type]: "onboat" }))
        }else {
            console.log("else");
            setLocations((prev: Locations) => ({ ...prev, [item.type]: "onboat" }))
        }
        console.log("Before setSelectedItem", selectedItem)
        setSelectedItem(item);
        console.log("After setSelecteditem", selectedItem)
    }

    const variants = {
        left: { x: 500 },
        right: { x: 1000 },
    };

    return (
        <motion.div
            initial={boatLocation}
            animate={boatLocation}
            variants={variants}
            transition={{ duration: 0.5 }}
            style={{
                position: 'relative',
                width: '200px',
            }}
            onAnimationComplete={onMoveComplete}
        >
            <div
                ref={drop}
                style={{
                }}
            >
                {selectedItem && (
                    <img src={selectedItem.src} alt={selectedItem.type} width="200px" style={{
                        position: "absolute",
                        zIndex: -1,
                    }} />
                )}
                <img src="/boat.png" alt="boat" width="300px" />
            </div>
        </motion.div>
    )
}
