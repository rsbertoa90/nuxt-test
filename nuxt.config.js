const laravelNuxt = require("laravel-nuxt");

module.exports = laravelNuxt({
    // Options such as mode, srcDir and generate.dir are already handled for you.
    modules: [
        // Simple usage
        [
            'nuxt-mq',
            {
                // Default breakpoint for SSR
                defaultBreakpoint: 'default',
                breakpoints: {
                    sm: 450,
                    md: 1250,
                    lg: Infinity
                }
            }
        ]
    ],
    plugins: [],
});