import { motion } from "framer-motion";
import { useDrag } from "react-dnd";

type Props = {
    src: string;
    type: string;
    onClick: () => void;
    location: "right" | "left"
    onMoveComplete: () => void
}

export const Item = (props: Props) => {
    const { src, type, onClick, location, onMoveComplete } = props

    const [{ isDragging }, drag] = useDrag(() => ({
        type: type,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const cursorStyle = isDragging ? "grabbing" : "grab";

    // アニメーション
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
            onAnimationComplete={onMoveComplete}
        >
            <div
                ref={drag}
                style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    cursor: cursorStyle,
                }}
            >
                <img src={src} alt={type} onClick={onClick} width="150px" />
            </div>
        </motion.div>
    )
}
