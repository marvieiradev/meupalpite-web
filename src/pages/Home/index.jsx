import { useLocalStorage } from 'react-use'
import { Navigate } from 'react-router-dom'

export function Home() {
    const [auth] = useLocalStorage('auth', {})

    if (auth?.user?.id) {
        return <Navigate to="/dashboard" replace={true} />
    }

    return (
        <div className="h-screen bg-red-700 text-white flex flex-col p-4 items-center space-y-4 md:space-y-6">

            <header className="container flex justify-center max-w-5xl p-2 md:p-4">
                <img src="/img/logo/logo-white.svg" className="w-40 md:w-80" />
            </header>

            <div className="container max-w-5xl flex-1 flex flex-col p-4 items-center md:flex-row space-y-4 md:space-y-0 md:space-x-6">

                <div className="md:flex-1 justify-center">
                    <img src="/img/imagem/img.png" className="w-60 md:w-full max-w-sm" />
                </div>

                <div className="md:flex-1 flex flex-col space-y-4 md:space-y-6">
                    <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold">Dê seu palpite na copa do mundo do Catar 2022!</h1>

                    <a href="/signup" className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
                        Criar minha conta
                    </a>

                    <a href="/login" className="text-center text-white border border-white text-xl px-6 py-4 rounded-xl">
                        Fazer login
                    </a>
                </div>
            </div>
            <footer>

            </footer>
        </div>

    )
}