import { useState } from "react";
import { usePostProduto } from "~/hooks/Produto/usePostProduto";
import { getUserIdFromToken } from "~/util/AuthService";
import { useNavigate } from "react-router";

export default function CreateProduto() {
    let router = useNavigate();
    const { mutate: addProduct } = usePostProduto();

    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        disp: true,
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let userId = getUserIdFromToken();
        console.log("antes do if: " + userId)
        if (!userId) return;
        console.log("depois do if");

        addProduct({ ...formData, userId });
        router(-1);
    };

    return (
        <div className="max-w-2xl mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Criar Novo Produto</h1>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
                <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome do Produto</label>
                    <input type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                    <textarea name="descricao" id="descricao" value={formData.descricao} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" name="disp" id="disp" checked={formData.disp} onChange={handleChange} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <label htmlFor="disp" className="ml-2 block text-sm text-gray-900">Disponível para venda</label>
                </div>
                <div className="flex justify-end space-x-4">
                    <button type="button" onClick={() => router('produtos')} className="px-5 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300">
                        Cancelar
                    </button>
                    <button type="submit" className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                        Salvar Produto
                    </button>
                </div>
            </form>
        </div>
    );
};