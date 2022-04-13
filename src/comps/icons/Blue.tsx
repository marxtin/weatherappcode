import { IconContext } from "react-icons";


import { BsMoonStars } from "react-icons/bs";

export default function OrangeIcon() {

    return (
        <>
            <IconContext.Provider value={{ color: "#8088f8", size: "2rem" }}>
                <BsMoonStars />
            </IconContext.Provider>
        </>
    );
}