import { useAppState } from "../../AppStateContext"
import { Item } from "../Item/Item"
import "./SideItems.scss";

export type SideItemProps = {
    items: ("wolf" | "sheep" | "cabbage")[]
}

export const RightSideItems = ({ items }: SideItemProps) => {

    const { selectedItem, setSelectedItem, locations, setLocations } = useAppState();
    const handleItemClicked = (item: ("wolf" | "sheep" | "cabbage")) => {
        if (selectedItem) {
            setLocations((prev) => ({ ...prev, [selectedItem.type]: prev[item], [item]: "onboat" }))
        } else {
            setLocations((prev) => ({ ...prev, [item]: "onboat" }))
        }
        setSelectedItem({
            type: item,
            src: item === "wolf" ? "/wolf.png" :
                item === "sheep" ? "/sheep.png" : "/cabbage.png"
        });
    }

    return (
        <div className="right-item-container">
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
