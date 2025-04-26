"use client";

import { useState, useEffect } from 'react';
import { getExchangeRates } from '@/services/currency';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast"

const currencyOptions = [
  { value: 'USD', label: 'USD - US Dollar' },
  { value: 'EUR', label: 'EUR - Euro' },
  { value: 'GBP', label: 'GBP - British Pound' },
  { value: 'JPY', label: 'JPY - Japanese Yen' },
  { value: 'CAD', label: 'CAD - Canadian Dollar' },
];

const localStorageKey = 'swiftConvertFavorites';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [favoritePairs, setFavoritePairs] = useState<string[]>([]);
  const { toast } = useToast()

  useEffect(() => {
    const storedFavorites = localStorage.getItem(localStorageKey);
    if (storedFavorites) {
      setFavoritePairs(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setIsLoading(true);
      try {
        const rates = await getExchangeRates(fromCurrency);
        setExchangeRate(rates.rates[toCurrency] || 0);
      } catch (error) {
        console.error("Failed to fetch exchange rates", error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch exchange rates. Please try again."
        })
      } finally {
        setIsLoading(false);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency, toast]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleCurrencySwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const addToFavorites = () => {
    const pairString = `${fromCurrency}-${toCurrency}`;
    const updatedFavorites = [...favoritePairs, pairString];
    setFavoritePairs(updatedFavorites);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedFavorites));
    toast({
      title: "Currency pair added to favorites.",
      description: "You can now quickly access this pair from your favorites list.",
    })
  };

  const removeFromFavorites = () => {
    const pairString = `${fromCurrency}-${toCurrency}`;
    const updatedFavorites = favoritePairs.filter(pair => pair !== pairString);
    setFavoritePairs(updatedFavorites);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedFavorites));
    toast({
      title: "Currency pair removed from favorites.",
      description: "This pair has been removed from your favorites list.",
    })
  };

  const isFavorite = favoritePairs.includes(`${fromCurrency}-${toCurrency}`);

  const convertedAmount = amount * exchangeRate;

  return (
    <Card className="w-[400px] bg-background shadow-md rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Currency Converter</CardTitle>
        <CardDescription>Convert between different currencies</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-foreground">
            Amount:
          </label>
          <Input
            type="number"
            id="amount"
            className="mt-1 p-2 w-full rounded-md border-input bg-background text-foreground"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="fromCurrency" className="block text-sm font-medium text-foreground">
              From:
            </label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {currencyOptions.map((currency) => (
                  <SelectItem key={currency.value} value={currency.value}>
                    {currency.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="toCurrency" className="block text-sm font-medium text-foreground">
              To:
            </label>
             <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {currencyOptions.map((currency) => (
                  <SelectItem key={currency.value} value={currency.value}>
                    {currency.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <Button variant="outline" onClick={handleCurrencySwap}>Swap</Button>
          {isFavorite ? (
            <Button variant="secondary" onClick={removeFromFavorites}>Remove from Favorites</Button>
          ) : (
            <Button onClick={addToFavorites}>Add to Favorites</Button>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground">
            Exchange Rate:
          </label>
          <span className="mt-1 text-lg text-green-500">
            {isLoading ? "Loading..." : `${exchangeRate.toFixed(2)}`}
          </span>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground">
            Converted Amount:
          </label>
          <span className="mt-1 text-lg text-blue-500">
            {convertedAmount.toFixed(2)} {toCurrency}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
