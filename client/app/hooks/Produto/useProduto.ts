import axios, { type AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import API_URL from "../../constants/AppConstants";
import type { Produto } from "~/interface/Produto";

const fetch = async (): AxiosPromise<Produto[]> => {
    const response = await axios.get(`${API_URL}/produtos`, {});
    return response;
};

export function useProduto() {
    const query = useQuery({
        queryKey: ['produto-data'],
        queryFn: fetch,
        retry: 1,
    });

    return {
        ...query,
        data: query.data?.data,
    };
}