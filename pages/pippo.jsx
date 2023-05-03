import { GetServerSideProps } from 'next';
import Layout from '../components/layout';

export default function Pippo({ data }) {
  return (
    <Layout>
      <main>
        <h1>
          Test chiamata al kursaal <br />
          <small
            style={{ fontSize: 'small', top: '-20px', position: 'relative' }}
          >
            e relativa cache
          </small>
        </h1>
        <div>
          {/* {data.films[0].plot} */}
          <ul>
            {data.films.map((film) => {
              <li key={film.id}>
                <h3>{film.cast}</h3>
              </li>;
            })}
          </ul>
        </div>
      </main>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  /* const res = await fetch(
    'https://kursaal.18tickets.it/api/v2/films/expanded.json'
  ); 
  const data = await res.json();
  */
  const res = `{
    "films":[
      {
        "id":"827c79f2-9822-48aa-974b-b699c9fc56f7",
        "title":"Il sol dell' avvenire",
        "plot":"Giovanni, regista italiano in ambasce tra una moglie in analisi e un produttore sull'orlo del fallimento, ha smesso di credere nell'avvenire. A immagine del suo protagonista, figura di prua dell'Unità e della sezione comunista del Quarticciolo, vuole 'farla finita' col mondo che avanza in direzione ostinata e contraria: la consorte ha deciso di investire su un giovane regista de-genere, la figlia di sposare un uomo (molto) più vecchio di lei, la sua attrice principale di improvvisare l'amore in un racconto politico e poi c'è Netflix che produce cinema in scatola.",
        "playbill_path":"https://cdn.18tickets.net/impero/uploads/film/playbill/14176/b63da6e3-8569-418f-8411-f75798628c95.jpg",
        "cast":"Nanni Moretti, Margherita Buy, Silvio Orlando, Barbora Bobuľová, Mathieu Amalric, Jerzy Stuhr, Anger Zsolt, Teco Celio, Valentina Romani, Flavio Furno, Giuseppe Scoditti, Valerio Da Silva, Angelo Galdi, Arianna Pozzoli, Francesco Brandi, Laura Nardi, Arianna Serrao, Blu Yoshimi, Michele Eburnea, Elena Lietti, Benjamin Stender, Francesco Rossini, Federica Sandrini, Carolina Pavone",
        "director":"Nanni Moretti",
        "length":90,
        "film_url":"https://kursaal.18tickets.it/film/14176","technologies":null,
        "age":"n/p",
        "genre":"Commedia","country":"IT","country_name":"Italia","url_trailer":"Tj2SzXLyADw","film_occupations":[{"projection_url":"https://kursaal.18tickets.it/film/il-sol-dell-avvenire_2023-ff4606b7-1e1d-4c33-9838-c6cef394b794/362977#sala","projection_public_id":"4d124e06-1baf-4753-b0b3-7ad3797e99c9","cinema_name":"Cinema kursaal","theater_name":"Sala","cinema_id":29,"cinema_town":"Porretta - alto reno terme","theater_public_id":"2bf3790f-8dd1-4572-88d7-b7cfc889bbc4","start":"2023-05-06T18:00:00.000+02:00","now_entering":null},{"projection_url":"https://kursaal.18tickets.it/film/il-sol-dell-avvenire_2023-ff4606b7-1e1d-4c33-9838-c6cef394b794/362984#sala","projection_public_id":"09b3d602-30ef-4950-a45c-f4bdc2f5f685","cinema_name":"Cinema kursaal","theater_name":"Sala","cinema_id":29,"cinema_town":"Porretta - alto reno terme","theater_public_id":"2bf3790f-8dd1-4572-88d7-b7cfc889bbc4","start":"2023-05-07T21:00:00.000+02:00","now_entering":null}],"year":2023,"start_date":"2023-04-20","tmdb_id":925263,"cinetel_film_code":"00015746","language":"Italiano","notes":"","critics":"","film_url_for_cinema":"https://kursaal.18tickets.it/film/14176"},{"id":"d5695b1c-4838-4c38-a9ca-83cadff2b1cc","title":"Guardiani della galassia vol. 3 (guardians of the galaxy vol. 3)","plot":"PETER QUILL, ANCORA PROVATO DALLA PERDITA DI GAMORA, DEVE RIUNIRE LA SUA SQUADRA PER DIFENDERE L'UNIVERSO E PROTEGGERE UNO DI LORO.","playbill_path":"https://cdn.18tickets.net/impero/uploads/film/playbill/14243/bf1a52dc-4532-4e0d-afea-d0e77f157955.jpg","cast":"C. Pratt, Z. Saldana, W. Poulter, K. Gillan, K. Gillan","director":"J. GUNN","length":150,"film_url":"https://kursaal.18tickets.it/film/14243","technologies":null,"age":"n/p","genre":"Fantastico","country":"US","country_name":"Stati Uniti","url_trailer":"yrsVzqqX4Qk","film_occupations":[{"projection_url":"https://kursaal.18tickets.it/film/guardiani-della-galassia-vol-3-guardians-of-the-galaxy-vol-3-_2023-1127d113-6052-45ab-9a2e-10361ba89ec0/362721#sala","projection_public_id":"d103bb53-5c51-49e1-85ce-a481faea8594","cinema_name":"Cinema kursaal","theater_name":"Sala","cinema_id":29,"cinema_town":"Porretta - alto reno terme","theater_public_id":"2bf3790f-8dd1-4572-88d7-b7cfc889bbc4","start":"2023-05-04T21:00:00.000+02:00","now_entering":null},{"projection_url":"https://kursaal.18tickets.it/film/guardiani-della-galassia-vol-3-guardians-of-the-galaxy-vol-3-_2023-1127d113-6052-45ab-9a2e-10361ba89ec0/362722#sala","projection_public_id":"52473e99-f5e3-44e1-be77-4bdce6afe07f","cinema_name":"Cinema kursaal","theater_name":"Sala","cinema_id":29,"cinema_town":"Porretta - alto reno terme","theater_public_id":"2bf3790f-8dd1-4572-88d7-b7cfc889bbc4","start":"2023-05-05T21:00:00.000+02:00","now_entering":null},{"projection_url":"https://kursaal.18tickets.it/film/guardiani-della-galassia-vol-3-guardians-of-the-galaxy-vol-3-_2023-1127d113-6052-45ab-9a2e-10361ba89ec0/362723#sala","projection_public_id":"cee35d96-bb96-4849-92da-6d011fa45854","cinema_name":"Cinema kursaal","theater_name":"Sala","cinema_id":29,"cinema_town":"Porretta - alto reno terme","theater_public_id":"2bf3790f-8dd1-4572-88d7-b7cfc889bbc4","start":"2023-05-06T21:00:00.000+02:00","now_entering":null},{"projection_url":"https://kursaal.18tickets.it/film/guardiani-della-galassia-vol-3-guardians-of-the-galaxy-vol-3-_2023-1127d113-6052-45ab-9a2e-10361ba89ec0/362964#sala","projection_public_id":"785550fc-cf90-495c-8874-c6afcbcb3d30","cinema_name":"Cinema kursaal","theater_name":"Sala","cinema_id":29,"cinema_town":"Porretta - alto reno terme","theater_public_id":"2bf3790f-8dd1-4572-88d7-b7cfc889bbc4","start":"2023-05-07T17:00:00.000+02:00","now_entering":null},{"projection_url":"https://kursaal.18tickets.it/film/guardiani-della-galassia-vol-3-guardians-of-the-galaxy-vol-3-_2023-1127d113-6052-45ab-9a2e-10361ba89ec0/362726#sala","projection_public_id":"c4ffd63e-9c37-40af-8b20-bca845adda75","cinema_name":"Cinema kursaal","theater_name":"Sala","cinema_id":29,"cinema_town":"Porretta - alto reno terme","theater_public_id":"2bf3790f-8dd1-4572-88d7-b7cfc889bbc4","start":"2023-05-08T21:00:00.000+02:00","now_entering":null}],"year":2023,"start_date":"2023-05-03","tmdb_id":447365,"cinetel_film_code":"00015800","language":"Italiano","notes":"","critics":"","film_url_for_cinema":"https://kursaal.18tickets.it/film/14243"}
    ]
  }`;

  const data = JSON.parse(res);
  console.log('DATA ', data);

  return { props: { data } };
};
