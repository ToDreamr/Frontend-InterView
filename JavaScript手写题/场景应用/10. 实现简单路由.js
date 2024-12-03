class Router {
    constructor() {
        // 路由存储对象
        this.routes = {}
        // 当前的hash
        this.currenHash = ''
        // 绑定this
        this.freshRoute = this.freshRoute.bind(this)
        // 监听
        window.addEventListener('load', this.freshRoute, false)
        window.addEventListener('hashchange', this.freshRoute, false)
    }

    storeRoute(path, cb) {
        this.routes[path] = cb || function () {}
    }

    freshRoute() {
        this.currenHash = location.hash.slice(1) || '/'
        this.routes[this.currenHash]()
    }
}