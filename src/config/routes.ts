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
    terms_of_service: 'terms-of-service',
    how_to_start_sellings_page: 'support/how-to-start-selling',
    how_to_start_buying_page: 'support/how-to-start-buying',
    referral_program: 'referral_program'

}
export default routes;