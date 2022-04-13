import { IconContext } from "react-icons";
import { GrSolaris } from "react-icons/gr";


export default function OrangeIcon() {

    return (
        <>
            <IconContext.Provider value={{ color: "#f0844f",size: "2.5rem" }}>
                <GrSolaris/>
            </IconContext.Provider>
        </>
    );
}