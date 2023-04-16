const routes = {
    home: '',
    login: 'login',
    register: 'register',
    proposalsUrl: (slug: number) => `proposals/${slug}`,
    chanllengesUrl: (slug: string) => `challenges/${slug}`,
    categoriesUrl: (slug?: string) => `categories/${slug}`,
    categories: {
        grapphic_design: 'categories/graphics-design',
        programing_tech: 'categories/programing-tech'
    },
    service: {
        servicelist: (slug: string) => `categories/services/${slug}`,
        servicedetail: (slug: string) => `categories/services/servicedetail/${slug}`
    },
    policy_privacy: 'privacy-policy',
    terms_of_service: 'terms-of-service'
}
export default routes;