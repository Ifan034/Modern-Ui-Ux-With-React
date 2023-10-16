import React from 'react';
import styles from '../style';
import { clients } from '../constants';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {/* mapping the logo airbnb binance coinbase dropbox */}
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt='logo' className='sm:w-[192px]' />
        </div>
      ))}
    </div>
         
  </section>
)


export default Clients
