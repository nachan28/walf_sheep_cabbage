import { ReactNode } from "react";

type RiverProps = {
    children: ReactNode;
}
export const River = ({ children }: RiverProps) => {
    return (
        <div style={{ 
            backgroundImage: "url('/river.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            // height: "100vh",
            width: "100vw",
            zIndex: -200
        }}>
            {children}
        </div>
    )
}
