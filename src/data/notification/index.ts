import { useQuery } from "react-query";
import client from "../client";

export const FetchNotifications = (locale: string) => {
    const { data, isLoading, error, refetch } = useQuery(
        'notification',
        () =>
            client.notification.get(
                {
                    language: locale
                }
            ),
        {
            enabled: false,
        }
    );

    return {
        data: data?.result.data,
        refetch,
        isLoading,
        error
    };
}