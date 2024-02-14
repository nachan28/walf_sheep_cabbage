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
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: 25,
                    fontWeight: 'bold',
                    cursor: 'move',
                }}
            >
                <img src={src} alt={type} onClick={onClick} width="100px" />
            </div>
        </motion.div>
    )
}
