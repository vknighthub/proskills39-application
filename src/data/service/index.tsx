import { SubmitDealResponse } from "@/types";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
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
            Swal.fire({
                position: 'center',
                icon: 'error',
                color: 'red',
                title: 'Oops...',
                text: `${error?.response?.status === 400 ? error?.response?.data.messagedetail : 'Error'}`,
            })

        }
    });
};