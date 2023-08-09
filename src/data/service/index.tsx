import { GetParams, SubmitDealResponse } from "@/types";
import { GenerateMessage } from "@/utils/Encrypt";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import Swal from "sweetalert2";
import client from "../client";

export const useSubmitDeal = () => {
    const router = useRouter()
    return useMutation(client.services.submitdeal, {
        onSuccess: (data) => {
            if (data.errorcode === 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    color: 'green',
                    title: 'Succeed!',
                    text: 'Your offer has been processed successfully. The seller will contact to you if they have any concern. Now back to home page'
                }).then((response: any) => {
                    if (response.isConfirmed) {
                        router.push('/')
                    }
                })
            }
        },
        onError: (errorAsUnknown) => {
            const error = errorAsUnknown as AxiosError<SubmitDealResponse>;
            const texterror = error?.response?.status === 400 ? error.response.data.messagedetail : 'Error'
            Swal.fire({
                position: 'top',
                icon: 'error',
                color: 'red',
                title: 'Oops...',
                text: texterror,
                didClose: () => window.scrollTo(0,0)
            })
            window.scrollTo(0,0)
        }
    });
};



export const FetchAllServices = (dataFillter: GetParams) => {
    const { data, isLoading, error, refetch } = useQuery(
        'service-get-all',
        () => client.services.getall(dataFillter),
    );

    return {
        data: data?.result.data,
        totalpage: data?.result.totalpage,
        total: data?.result.total,
        refetch,
        isLoading,
        error
    };
}