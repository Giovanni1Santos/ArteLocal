import type { Produto } from '../../interface/Produto'
import ProductImageIcon from './ProductImageIcon';


export type ProductCardProps = {
    produto: Produto;
};





const ProductCard = ({ produto }: ProductCardProps) => {
    const cardBaseClasses = "block border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white";


    const addCart = (produto: Produto) => {
        const cartStr = localStorage.getItem("carrinho");
        const cart = cartStr ? JSON.parse(cartStr) : [];

        const index = cart.findIndex((item: any) => item.id === produto.id);

        if (index !== -1) {
            cart[index].quantidade += 1;
        } else {
            cart.push({ ...produto, quantidade: 1 });
        }

        localStorage.setItem("carrinho", JSON.stringify(cart));
    };


    return (
        <a className={cardBaseClasses} onClick={(e) => e.preventDefault()}>
            <div className="p-6">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-24 w-24 bg-gray-100 rounded-md">
                        <ProductImageIcon />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{produto.nome}</h3>
                            {/* Indicador de Disponibilidade */}
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${produto.disp
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                                }`}>
                                {produto.disp ? 'Disponível' : 'Indisponível'}
                            </span>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm">{produto.descricao}</p>
                        <p className="text-xs text-gray-400 mt-4">ID do Vendedor: {produto.userId}</p>

                        <div className="mt-4">
                            <button
                                onClick={() => addCart(produto)} // Substitua isso por lógica real
                                disabled={!produto.disp}
                                className={`w-full px-4 py-2 rounded-md text-sm font-medium ${produto.disp
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProductCard

