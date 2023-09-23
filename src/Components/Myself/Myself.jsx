import BestFd from "../BestFd/BestFd";

const Myself = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section className="flex">
                <BestFd asset={asset}></BestFd>
            </section>
        </div>
    );
};

export default Myself;