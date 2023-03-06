const routes = {
    home: '',
    proposalsUrl: (slug: number) => `proposals/${slug}`,
    chanllengesUrl: (slug: string) => `challenges/${slug}`,
    categories: {
        grapphic_design: 'categories/graphics-design',
        programing_tech: 'categories/programing-tech'
    }
}
export default routes;