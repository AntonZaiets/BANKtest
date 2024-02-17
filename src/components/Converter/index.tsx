import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

interface CurrencyData {
    base: string;
    rates: Record<string, number>;
}

function Convertor() {
    const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
    const [fromCurrency, setFromCurrency] = useState<string>('UAH');
    const [toCurrency, setToCurrency] = useState<string>('USD');
    const [exchangeRate, setExchangeRate] = useState<number>(1);
    const [amount, setAmount] = useState<number>(1);
    const [amountInFromCurrency, setAmountInFromCurrency] = useState<boolean>(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then((data: CurrencyData) => {
                setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
                setExchangeRate(data.rates[fromCurrency]); // Set exchange rate based on 'fromCurrency'
            })
            .catch(error => console.error('Error fetching initial data:', error));
    }, [fromCurrency]); // Fetch data whenever 'fromCurrency' changes

    useEffect(() => {
        if (fromCurrency && toCurrency) {
            fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(res => res.json())
                .then((data: CurrencyData) => setExchangeRate(data.rates[toCurrency]))
                .catch(error => console.error('Error fetching exchange rate:', error));
        }
    }, [fromCurrency, toCurrency]); // Fetch data whenever 'fromCurrency' or 'toCurrency' changes

    function handleFromAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAmount(parseFloat(e.target.value));
        setAmountInFromCurrency(true);
    }

    function handleToAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAmount(parseFloat(e.target.value));
        setAmountInFromCurrency(false);
    }

    const toAmount = amountInFromCurrency ? amount : amount * exchangeRate;
    const fromAmount = amountInFromCurrency ? amount / exchangeRate : amount;

    return (
        <div className = "currency_row">
            <div>
                <CurrencyRow
                    currencyOptions={currencyOptions}
                    selectedCurrency={toCurrency}
                    onChangeCurrency={(e: React.ChangeEvent<HTMLSelectElement>) => setToCurrency(e.target.value)}
                    onChangeAmount={handleFromAmountChange}
                    amount={toAmount}
                />
            </div>
            <div>
                <CurrencyRow
                    currencyOptions={currencyOptions}
                    selectedCurrency={fromCurrency}
                    onChangeCurrency={(e: React.ChangeEvent<HTMLSelectElement>) => setFromCurrency(e.target.value)}
                    onChangeAmount={handleToAmountChange}
                    amount={fromAmount}
                />
            </div>
        </div>
    );
}

export default Convertor;
