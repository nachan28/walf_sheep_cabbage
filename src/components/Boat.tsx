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
            {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            backgroundColor: 'yellow',
          }}
        />
      )}
            <img src="/boat.png" alt="boat" width="200px" />
        </div>
    )
}
