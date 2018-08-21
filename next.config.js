const withLess = require('@zeit/next-less')

module.exports = withLess({
    exportPathMap: function(defaultPathMap) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' }
        }
    }
})
