import { DefaultParams, GetParams } from "@/types";
import { useQuery } from "react-query";
import client from "../client";

export const FetchFetchServiceCatalogBySlug = (dataFillter: GetParams) => {
    const { data, isLoading, error, refetch } = useQuery(
        'service-catalog-parent',
        () => client.services.getbyparent(dataFillter),

    );

    return {
        data: data?.result.data,
        totalpage: data?.result.totalpage,
        refetch,
        isLoading,
        error
    };
}

export const FetchServiceByCatalogSlug = (dataFillter: GetParams, initData: any) => {
    const { data, isLoading, error, refetch } = useQuery(
        'service-catalog-slug',
        () => client.services.get(dataFillter),
        { initialData: initData }
    );
    return {
        data: data?.result.data,
        totalpage: data?.result.totalpage,
        refetch,
        isLoading,
        error
    };
}

export const FetchTopCategories = (dataFillter: DefaultParams) => {
    const { data, isLoading, error, refetch } = useQuery(
        'top-service-catalog',
        () => client.categories.gettop(dataFillter)
    );
    return {
        data: data?.result.data,
        totalpage: data?.result.totalpage,
        refetch,
        isLoading,
        error
    };
}