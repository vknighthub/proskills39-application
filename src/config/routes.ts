const routes = {
    home: '',
    proposalsUrl: (slug: string) => `proposals/${slug}`,
    categories: {
        grapphic_design: 'categories/graphics-design',
        programing_tech: 'categories/programing-tech'
    }
}
export default routes;