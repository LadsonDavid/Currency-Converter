import CurrencyConverter from '@/components/CurrencyConverter';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to SwiftConvert
        </h1>
        <CurrencyConverter />
      </main>
    </div>
  );
}

