import React, { useContext } from 'react';
import './style.css';
import { CoinsContext } from '../../context/coinsContext';
import { useFilterCoins } from '../../Helpers/hooks/useFilterCoins';

const FilterBlock = ({ setCoins }) => {
    const coinsContext = useContext(CoinsContext);
    const { coins } = coinsContext;
   
    const {setValue, value} = useFilterCoins(setCoins,coins);

    return (
        <div className='filter-block'>
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className='input'
                type='text'
                placeholder='bitcoin'
            />
        </div>
    )
}

export default React.memo(FilterBlock);