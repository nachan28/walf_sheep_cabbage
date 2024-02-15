import { SideItemProps } from "./RightSideItems"

export const LeftSideItems = (items: SideItemProps) => {
    return (
        <div className="left-item-container" style={{

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