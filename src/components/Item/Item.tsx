import { Location } from "../../App";
import "./Item.scss"

type Props = {
    src: string;
    type: "wolf" | "sheep" | "cabbage"
    location: Location
    onClick: () => void
}

export const Item = (props: Props) => {
    const { src, type, onClick } = props

    return (
        <div>
            <img src={src} alt={type} className="item-img"
                onClick={onClick} />
        </div>
    )
}
