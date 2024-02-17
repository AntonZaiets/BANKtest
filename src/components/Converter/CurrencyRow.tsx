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
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount} />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default CurrencyRow;
