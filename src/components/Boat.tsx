import { useDrop } from "react-dnd";

export const Boat = () => {
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: ["wolf", "sheep", "cabbage"],
            drop: () => handleItemDropped(),
            collect: monitor => ({
                isOver: !!monitor.isOver()
            })
        })
    )

    const handleItemDropped = () => {
        console.log("item dropped!")
    }
    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <img src="/boat.png" alt="boat" width="200px" />
        </div>
    )
}
