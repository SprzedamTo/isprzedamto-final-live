import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            iSprzedamTo.pl
          </Link>
          <nav className="space-x-4">
            <Link href="/add" className="hover:underline">Dodaj ogłoszenie</Link>
            <Link href="/register" className="hover:underline">Rejestracja</Link>
            <Link href="/login" className="hover:underline">Logowanie</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4">
        {children}
      </main>

      <footer className="bg-gray-200 text-center py-3 mt-8 text-sm text-gray-600">
        © {new Date().getFullYear()} iSprzedamTo.pl – Wszystkie prawa zastrzeżone
      </footer>
    </div>
  )
    }
