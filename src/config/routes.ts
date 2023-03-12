const routes = {
    home: '',
    proposalsUrl: (slug: number) => `proposals/${slug}`,
    chanllengesUrl: (slug: string) => `challenges/${slug}`,
    categoriesUrl: (slug?: string) => `categories/${slug}`,
    categories: {
        grapphic_design: 'categories/graphics-design',
        programing_tech: 'categories/programing-tech'
    },
    service: {
        servicelist:(slug: string) => `categories/services/${slug}`,
        servicedetail: (slug: string) => `categories/services/servicedetail/${slug}`
    }
}
export default routes;