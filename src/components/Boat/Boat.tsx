import { motion } from "framer-motion";
import { BoatLocation } from "../../App";
import { useAppState } from "../../AppStateContext";
import "./Boat.scss";

type Props = {
    boatLocation: BoatLocation
    onMoveComplete: () => void
}

export type DraggableItem = {
    type: "wolf" | "sheep" | "cabbage";
    src: string;
}



export const Boat = (props: Props) => {
    const { boatLocation, onMoveComplete } = props;
    const { selectedItem } = useAppState();

    const boatWidth = 200;
    const variants = {
        left: { x: `calc(30vw - ${boatWidth / 2}px)` },
        right: { x: `calc(70vw - ${boatWidth}px)` }
    };

    return (
        <motion.div
            initial={boatLocation}
            animate={boatLocation}
            variants={variants}
            transition={{ duration: 0.5 }}
            className="boat-wrapper"
            onAnimationComplete={onMoveComplete}
        >
            {selectedItem && (
                <img src={selectedItem.src} alt={selectedItem.type} width="200px" className="selected-item" />
            )}
            <img src="/boat.png" alt="boat" className="boat-img" />
        </motion.div>
    )
}
