Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'nova-settings-sections',
            path: '/nova-settings',
            component: require('./components/Sections'),
        },
        {
            name: 'nova-settings-section',
            path: '/nova-settings/section/:slug',
            component: require('./components/Section'),
            props: true
        },
    ])
})
