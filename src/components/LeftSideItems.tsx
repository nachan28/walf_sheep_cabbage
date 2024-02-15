import { SideItemProps } from "./RightSideItems"

export const LeftSideItems = (items: SideItemProps) => {
    return (
        <div className="left-item-container" style={{
            position: "fixed",
            top: "0", 
            left: "0",
            margin: "20px"
        }}>
            <p>LeftSide</p>
            {items.items.map((item, index) => (
                <div key={index} className="left-item">
                    {item}
                </div>
            ))}
        </div>
    )
}