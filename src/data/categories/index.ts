import { GetParams } from "@/types";
import { useQuery } from "react-query";
import client from "../client";

export const FetchFetchServiceCatalogBySlug = (dataFillter: GetParams) => {
    const { data, isLoading, error, refetch } = useQuery(
        'service-catalog-parent',
        () => client.services.getbyparent(dataFillter)
    );

    return {
        data: data?.result.data,
        refetch,
        isLoading,
        error
    };
}