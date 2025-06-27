import { useNavigate } from "react-router-dom";

export default function ErroPage() {
    let router = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
            <svg className="w-24 h-24 text-red-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Algo deu errado.</h1>
            <p className="text-lg text-gray-600 mb-6">A página que você está procurando não foi encontrada.</p>
            <button
                onClick={() => router('/')}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
                Voltar para a Página Inicial
            </button>
        </div>
    );
}