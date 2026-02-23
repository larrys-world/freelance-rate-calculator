export default function BuyMeACoffee() {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
      <p className="text-gray-700 mb-4">Find this calculator helpful?</p>
      <a
        href="https://www.buymeacoffee.com/larrysworld"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          className="h-10 w-36"
        />
      </a>
      <p className="text-sm text-gray-500 mt-2">
        Your support helps keep these tools free!
      </p>
    </div>
  );
}