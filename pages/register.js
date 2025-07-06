import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Utworzono konto dla:\n${email}`)
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <Head>
        <title>Rejestracja</title>
      </Head>
      <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
        <h1>🔐 Rejestracja</h1>
        <form onSubmit={handleSubmit}>
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
            Zarejestruj się
          </button>
        </form>
        <p style={{ marginTop: '1rem' }}>
          Masz już konto? <Link href="/login">Zaloguj się</Link>
        </p>
      </main>
    </>
  )
}
