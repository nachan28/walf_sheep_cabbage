import { Item } from "./Item"

export type SideItemProps = {
    items: string[]
}

export const RightSideItems = (items: SideItemProps) => {
    return (
        <div className="right-item-container" style={{
            position: "fixed",
            top: "0",
            right: "0",
            margin: "20px"
        }}>
            <p>RightSide</p>
            {items.items.map((item, index) => (
                <>
                    <div key={index} className="right-item">
                        {item}
                        <img src={item === "wolf" ? "/wolf.png" :
                            item === "sheep" ? "/sheep.png" : "/cabbage.png"}
                            alt={item}
                            width="100px"/>
                    </div>
                </>
            ))}
        </div>
    )
}
