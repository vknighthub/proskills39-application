import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const SearchServicePage: NextPageWithLayout = (props: Props) => {
    const router = useRouter();
    const { categories  } = router.query; // lấy giá trị của param từ URL
    console.log(categories )
    return (
        <div>{categories }</div>
    )
}
SearchServicePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default SearchServicePage