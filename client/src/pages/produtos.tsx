import ErroPage from "../components/errorpage/ErrorPage";
import LoadingPage from "../components/loading/LoadingPage";
import ProductList from "../components/product-card/productList";
import { useProduto } from "../hooks/Produto/useProduto";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CartModal from "../components/cartmodal/CartModal";

export default function Produtos() {

    const { data: produtos, isLoading } = useProduto();
    const [isCartOpen, setIsCartOpen] = useState(false);

    if (isLoading) return (<LoadingPage />)
    if (!produtos) return (<ErroPage />)



    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <header className="flex justify-end p-4">
                <button onClick={() => setIsCartOpen(true)} className="relative">
                    <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />

                </button>
            </header>
            <main>
                <ProductList produto={produtos} />
            </main>
            <footer className="text-center p-4 text-gray-500 text-sm">
                <p>Clique em um card para ver os detalhes do produto (simulação de navegação).</p>
            </footer>
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    );
}