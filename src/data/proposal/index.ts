import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import Swal from "sweetalert2";
import client from "../client";
import { GetParamsProposal } from "@/types";


export const FetchProposal = (proposal: number, dataFillter: GetParamsProposal, initData: any) => {
    const { data, isLoading, error, refetch } = useQuery(
        'proposal-get-all',
        () => client.proposal.all(proposal, dataFillter),
        { initialData: initData }
    );

    return {
        data: data?.result.data.data,
        totalpage: data?.result.data.totalpage,
        total: data?.result.data.total,
        refetch,
        isLoading,
        error
    };
}