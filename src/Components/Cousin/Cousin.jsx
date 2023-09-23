import BestFd from "../BestFd/BestFd";
import Friend from "../Friend/Friend";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <h6>{name}</h6>
            <section className="flex">
                {asset && <BestFd asset={asset}></BestFd>}
                {name==='Mimo' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;