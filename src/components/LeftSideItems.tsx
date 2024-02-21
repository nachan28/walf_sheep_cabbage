import { useAppState } from "../AppStateContext";
import { Item } from "./Item"
import { SideItemProps } from "./RightSideItems"

export const LeftSideItems = ({ items, locations }: SideItemProps) => {
    const { selectedItem, setSelectedItem } = useAppState();
    const handleItemClicked = (item: ("wolf" | "sheep" | "cabbage")) => {
        setSelectedItem({
            type: item,
            src: item === "wolf" ? "/wolf.png" :
                item === "sheep" ? "/sheep.png" : "/cabbage.png"
        })
    }
    return (
        <div className="left-item-container" style={{
            position: "fixed",
            top: "0", 
            left: "0",
            margin: "20px"
        }}>
            {items.map((item, index) => (
                <Item src={item === "wolf" ? "/wolf.png" :
                item === "sheep" ? "/sheep.png" : "/cabbage.png"}
                type={item}
                location={locations[item]}
                key={index}
                onClick={() => handleItemClicked(item)}></Item>
            ))}
        </div>
    )
}