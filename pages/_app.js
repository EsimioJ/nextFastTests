import Layout from "../components/layout";
import "../global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <h1 className="text-red-300 font-bold text-8xl">Qualche test veloce con Next.js</h1>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
