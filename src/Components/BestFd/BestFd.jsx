import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const BestFd = ({asset}) => {

    const gift = useContext(AssetContext);

    return (
        <div>
            <h2>Bosom Friend</h2>
            <p>Get *{asset}* from Grandpa</p>
            <p>Also get *{gift}*</p>
        </div>
    );
};

export default BestFd;