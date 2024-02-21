import { motion } from "framer-motion";
import { BoatLocation } from "../App";
import { useAppState } from "../AppStateContext";

type Props = {
    boatLocation: BoatLocation
    onMoveComplete: () => void
}

export type DraggableItem = {
    type: "wolf" | "sheep" | "cabbage";
    src: string;
}



export const Boat = (props: Props) => {
    const { boatLocation, onMoveComplete} = props;
    const { selectedItem } = useAppState();

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
                {selectedItem && (
                    <img src={selectedItem.src} alt={selectedItem.type} width="200px" style={{
                        position: "absolute",
                        zIndex: -1,
                    }} />
                )}
                <img src="/boat.png" alt="boat" width="300px" />
        </motion.div>
    )
}
