
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>isprzedamto.pl</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1 style={{ color: '#0070f3' }}>isprzedamto.pl</h1>
        <p>Twoje miejsce na darmowe ogłoszenia.</p>

        <Link href="/add">
          <button style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            marginTop: '20px',
            fontWeight: 'bold'
          }}>+ Dodaj ogłoszenie ZA DARMO!</button>
        </Link>

        <div style={{ marginTop: '40px' }}>
          <h2>📋 Przykładowe ogłoszenie</h2>
          <p><strong>Nissan Almera 1.5 Benzyna</strong></p>
          <p>2006 | 152 000 km | 115 KM</p>
          <p>📍 Kraków | Dodano: 06.07.2025</p>
        </div>
      </main>
    </>
  );
}
