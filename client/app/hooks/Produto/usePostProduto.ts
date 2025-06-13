import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import API_URL from "../../constants/AppConstants";
import { showToast } from "../../components/toast/Toast";
import type { Produto } from "~/interface/Produto";
import { getUserIdFromToken } from "~/util/AuthService";

export function usePostProduto() {
    return useMutation({
        mutationFn: async (newProduct: Omit<Produto, 'id'>) => {


            const token = localStorage.getItem("token");

            const response = await axios.post(`${API_URL}/produto`, newProduct, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        }, onSuccess: () => {
            showToast("Produto adicionado com sucesso!", "success")
        }, onError: () => {
            showToast("Erro ao adicionar o Produto!", "error")
        }
    });
}