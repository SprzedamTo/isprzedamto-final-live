import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    alert(`Zalogowano jako: ${email}`)
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <Head>
        <title>Logowanie</title>
      </Head>
      <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
        <h1>🔓 Logowanie</h1>
        <form onSubmit={handleLogin}>
          <label>Email:<br />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label><br /><br />
          <label>Hasło:<br />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label><br /><br />
          <button type="submit" style={{
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '10px 20px',
            border: 'none'
          }}>
            Zaloguj się
          </button>
        </form>
        <p style={{ marginTop: '1rem' }}>
          Nie masz konta? <Link href="/register">Zarejestruj się</Link>
        </p>
      </main>
    </>
  )
}
