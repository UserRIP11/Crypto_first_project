import Card from '../../component/Card/Card';
import CoinsList from '../../component/CoinsList/CoinsList';
import FilterBlock from '../../component/FilterBlock/FilterBlock';
import style from './style.module.css';

const Main = ({ balance, setBalance, coins, setCoins }) => {

    return (
        <main className={style.main}>
            <Card balance={balance} setBalance={setBalance} />
            <FilterBlock setCoins={setCoins} />
            {coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
        </main>
    );
};

export default Main;

