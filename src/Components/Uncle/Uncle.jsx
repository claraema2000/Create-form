import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Paula'}></Cousin>
                <Cousin name={'Ananda'} asset={asset}></Cousin>
                <Cousin name={'Priyanka'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;