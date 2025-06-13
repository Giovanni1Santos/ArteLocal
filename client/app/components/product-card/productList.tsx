import type { Produto } from "~/interface/Produto";
import ProductCard from "./ProductCard";


type ProductListProps = {
    produto: Produto[];
};


const ProductList = ({ produto }: ProductListProps) => {
    return (
        <div className="p-4 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Nossos Produtos</h1>
            <p className="text-md text-gray-600 mb-8">Explore nossa coleção de produtos incríveis.</p>

            {/* Grid responsivo para os cards de produtos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                {produto.map(produto => (
                    <ProductCard produto={produto} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;