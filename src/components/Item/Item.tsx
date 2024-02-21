import { Location } from "../../App";

type Props = {
    src: string;
    type: "wolf" | "sheep" | "cabbage"
    location: Location
    onClick: () => void
}

export const Item = (props: Props) => {
    const { src, type, onClick } = props

    return (
        <div
            className="item"
        >
            <img src={src} alt={type} width="250px"
                onClick={onClick} />
        </div>
    )
}
