import { GetServerSideProps } from 'next';

export default function Index() {
  return (
      <main>
        <h1>Qualche test veloce con Next.js</h1>
      </main>
  );
}

export const getServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  return {
    props: {
      time: new Date().toISOString(),
    },
  };
};
