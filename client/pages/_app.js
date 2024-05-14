import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-700 ">
      <div className="flex min-h-screen items-center justify-center">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
