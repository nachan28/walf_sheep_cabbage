import { Locations } from "../App"
import { useAppState } from "../AppStateContext"
import { Item } from "./Item"

export type SideItemProps = {
    items: ("wolf" | "sheep" | "cabbage")[]
    locations: Locations
}



export const RightSideItems = ({ items, locations }: SideItemProps) => {

    const { setSelectedItem } = useAppState();
    const handleItemClicked = (item: ("wolf" | "sheep" | "cabbage")) => {
        console.log("clicked!")
        setSelectedItem({
            type: item,
            src: item === "wolf" ? "/wolf.png" :
                item === "sheep" ? "/sheep.png" : "/cabbage.png"
        })
    }

    return (
        <div className="right-item-container" style={{
            position: "fixed",
            top: "0",
            right: "0",
            margin: "20px"
        }}>
            {items.map((item) => (
                <Item src={item === "wolf" ? "/wolf.png" :
                    item === "sheep" ? "/sheep.png" : "/cabbage.png"}
                    type={item}
                    location={locations[item]}
                    key={item}
                    onClick={() => handleItemClicked(item)}></Item>
            ))}
        </div>
    )
}
