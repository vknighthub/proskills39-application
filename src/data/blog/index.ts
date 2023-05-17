import { useQuery } from "react-query";
import client from "../client";

export const FetchBlog = (locale: string | undefined) => {
    const { data, isLoading, error, refetch } = useQuery(
        'blog',
        () =>
            client.blog.get(
                {
                    language: locale
                }
            )
    );

    return {
        data: data?.result.data,
        refetch,
        isLoading,
        error
    };
}