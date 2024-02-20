import React from 'react';
import "./style.scss"
interface Props {
    currencyOptions: string[];
    selectedCurrency: string;
    onChangeCurrency: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
    amount: number;
}

const CurrencyRow: React.FC<Props> = ({ currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount }) => {
    return (
        <div className="forms">
            <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
            <select value={selectedCurrency} onChange={onChangeCurrency} style={{ backgroundImage: `url(https://flagsapi.com/${selectedCurrency.substring(0, 2)}/flat/64.png)` }}>
                {currencyOptions.map(option => (
                    <option key={option} value={option} >{option}</option>
                ))}
            </select>

        </div>
    );
}

export default CurrencyRow;
