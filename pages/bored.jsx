import { GetServerSideProps } from 'next';
import Layout from '../components/layout';

export default function Pippo({ data }) {
  return (
    <Layout>
      <main>
        <h1>Feeling bored?</h1>
        <p>Just... {data.activity}, bitch!</p>
      </main>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('https://www.boredapi.com/api/activity');
  const data = await res.json();

  console.log('DATA ', data);
  return {
    props: {
      data: data,
    },
  };
};
