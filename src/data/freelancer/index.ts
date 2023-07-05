import { GetParams } from "@/types";
import { useQuery } from "react-query";
import client from "../client";

export const FetchFreelancerByLevel = (dataFillter: GetParams) => {
    const { data, isLoading, error, refetch } = useQuery(
        'freelancer-by-level',
        () =>client.freelancer.getbylevel(dataFillter)
    );

    return {
        data: data?.result.data.data,
        total: data?.result.data.total,
        refetch,
        isLoading,
        error
    };
}