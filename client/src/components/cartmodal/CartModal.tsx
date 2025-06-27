import React, { useEffect, useRef, useState } from "react";
import ProductImageIcon from "../product-card/ProductImageIcon";
import { TrashIcon } from '@heroicons/react/24/outline';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface CartItem {
    id: string;
    nome: string;
    quantidade: number;
    userId: string;
    descricao: string;
    disp: boolean;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
    const backdropRef = useRef<HTMLDivElement>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            const cartStr = localStorage.getItem("carrinho");
            const items = cartStr ? JSON.parse(cartStr) : [];
            setCartItems(items);
        }
    }, [isOpen]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === backdropRef.current) {
            onClose();
        }
    };

    const handleRemoveItem = (id: string) => {
        const updatedCart = cartItems
            .map(item =>
                item.id === id
                    ? { ...item, quantidade: item.quantidade - 1 }
                    : item
            )
            .filter(item => item.quantidade > 0);

        setCartItems(updatedCart);
        localStorage.setItem("carrinho", JSON.stringify(updatedCart));
    };

    if (!isOpen) return null;

    return (
        <div
            ref={backdropRef}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end transition-opacity duration-300"
        >
            <div className="bg-white w-full max-w-md h-full flex flex-col shadow-lg">
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Seu Carrinho</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 text-xl"
                    >
                        ×
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500 text-sm">Seu carrinho está vazio.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="border rounded p-3 flex items-center justify-between space-x-3"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0">
                                        <ProductImageIcon />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{item.nome}</p>
                                        <p className="text-sm text-gray-600">Quantidade: {item.quantidade}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition text-sm"
                                >
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-4 border-t">
                    <button
                        onClick={() => alert("Pagamento finalizado!")}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                    >
                        Finalizar pagamento
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
