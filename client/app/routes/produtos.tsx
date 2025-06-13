import ErroPage from "~/components/errorpage/ErrorPage";
import LoadingPage from "~/components/loading/LoadingPage";
import ProductList from "~/components/product-card/productList";
import { useProduto } from "~/hooks/Produto/useProduto";

export default function Produtos() {

    const { data: produtos, isLoading } = useProduto();
    if (isLoading) return (<LoadingPage />)
    if (!produtos) return (<ErroPage />)

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <main>
                <ProductList produto={produtos} />
            </main>
            <footer className="text-center p-4 text-gray-500 text-sm">
                <p>Clique em um card para ver os detalhes do produto (simulação de navegação).</p>
            </footer>
        </div>
    );
}