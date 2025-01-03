const newsRouter = require('./news.route')
const siteRouter = require('./site.route')
const courseRouter = require('./course.route')

function route(app) {
    app.use('/', siteRouter)
    app.use('/news', newsRouter)
    app.use('/courses', courseRouter)
}

module.exports = route
