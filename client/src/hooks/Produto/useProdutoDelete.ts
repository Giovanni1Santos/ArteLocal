import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import API_URL from "../../constants/AppConstants";
import { showToast } from "../../components/toast/Toast";

export function useDeleteProduto() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: number | string) => {
            const token = localStorage.getItem("token");
            const response = await axios.delete(`${API_URL}/produto/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        },
        onSuccess: () => {
            showToast("Produto removido com sucesso!", "success");
            queryClient.invalidateQueries({ queryKey: ['produto-data'] });
        },
        onError: (err) => {
            showToast("Erro ao remover o Produto!", "error");
            console.error(err);
        },
    });
}
