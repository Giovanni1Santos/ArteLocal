import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import API_URL from "../../constants/AppConstants";
import { showToast } from "../../components/toast/Toast";
import type { Produto } from "../../interface/Produto";

export function usePostProduto() {
    return useMutation({
        mutationFn: async (newProduct: Omit<Produto, 'id'>) => {


            const token = localStorage.getItem("token");
            console.log(newProduct)
            const response = await axios.post(`${API_URL}/produto`, newProduct, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        }, onSuccess: (res) => {
            showToast("Produto adicionado com sucesso!", "success")
            console.log(res)
        }, onError: (err) => {
            showToast("Erro ao adicionar o Produto!", "error")
            console.log(err)
        }
    });
}