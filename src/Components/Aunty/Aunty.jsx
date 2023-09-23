import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Aunty = () => {

    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
           <h2>Aunty</h2> 
           <section className='flex'>
            <Cousin name={'Roma'}></Cousin>
            <Cousin name={'Mimo'}></Cousin>
           </section>
           <p>Has money: {money}</p>
           <button onClick={() => setMoney(money+1000)}>Add 1K Money</button>
        </div>
    );
};

export default Aunty;<h2>Aunty</h2>