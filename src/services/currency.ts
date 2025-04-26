/**
 * Represents currency exchange rates.
 */
export interface ExchangeRates {
  /**
   * The base currency for the exchange rates.
   */
  base: string;
  /**
   * A map of currency codes to their exchange rates relative to the base currency.
   */
  rates: { [currencyCode: string]: number };
}

const API_KEY = process.env.EXCHANGE_RATE_API_KEY;

/**
 * Asynchronously retrieves the latest exchange rates for a given base currency.
 *
 * @param baseCurrency The currency to use as the base for exchange rates.
 * @returns A promise that resolves to an ExchangeRates object containing the base currency and its rates.
 */
export async function getExchangeRates(baseCurrency: string): Promise<ExchangeRates> {
  const apiUrl = `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return {
      base: baseCurrency,
      rates: data.rates,
    };
  } catch (error) {
    console.error("Failed to fetch exchange rates from API", error);
    throw error;
  }
}
