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

export const FetchBlogDetail = (slug: string, locale: string, initData: any) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: 'blog-detail',
        queryFn: () =>
            client.blog.getdetail(
                {
                    slug: slug,
                    language: locale
                }
            ),
        initialData: initData

    }
    );

    return {
        data: data?.result.data,
        refetch,
        isLoading,
        error
    };
}

export const FetchUserProfile = (username: string, initData: any) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: 'user-profile-blog',
        queryFn: () =>
            client.users.userinfo(
                {
                    username: username
                }
            ),
        initialData: initData

    }
    );

    return {
        data: data?.result.data,
        refetch,
        isLoading,
        error
    };
}
