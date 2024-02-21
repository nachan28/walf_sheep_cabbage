import { useEffect } from "react"
import { Locations } from "../App"
import { useAppState } from "../AppStateContext"
import { Item } from "./Item"

export type SideItemProps = {
    items: ("wolf" | "sheep" | "cabbage")[]
}

export const RightSideItems = ({ items}: SideItemProps) => {

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

    useEffect(() => {
        console.log("RightSide location changed!")
    }, [locations])

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
