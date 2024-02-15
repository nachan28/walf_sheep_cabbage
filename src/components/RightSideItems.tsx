import { Locations } from "../App"
import { Item } from "./Item"

export type SideItemProps = {
    items: ("wolf" | "sheep" | "cabbage")[]
    locations: Locations
}

export const RightSideItems = ({ items, locations }: SideItemProps) => {

    return (
        <div className="right-item-container" style={{
            position: "fixed",
            top: "0",
            right: "0",
            margin: "20px"
        }}>
            <p>RightSide</p>
            {items.map((item, index) => (
                <Item src={item === "wolf" ? "/wolf.png" :
                    item === "sheep" ? "/sheep.png" : "/cabbage.png"}
                    type={item}
                    location={locations[item]}
                    key={index}></Item>
            ))}
        </div>
    )
}
