class EventCenter {
    // 定义事件容器
    handlers = {}

    // 事件名 方法
    addEventListener(type, handler) {
        // 如果当前事件没有添加过
        if(!this.handlers[type])
            this.handlers[type] = []
        this.handlers[type].push(handler)
    }

    // 触发事件 事件名
    dispatchEvent(type, params) {
        if(!this.handlers[type]) {
            return new Error('事件未注册')
        }
        this.handlers.forEach(handler => {
            handler(...params)
        })
    }

    // 移除事件, 如果没有第二个事件则移除整个类型事件
    removeEventListener(type, handler) {
        if (!this.handlers[type]) {
            return new Error('事件无效')
        }
        if(!handler) {
            delete this.handlers[type]
        }else {
            const index = this.handlers.findIndex(el => el === handler)
            if (index === -1) {
                return new Error('无该绑定事件')
            }
            // 移除事件
            this.handlers[type].splice(index, 1)
            if (this.handlers[type].length === 0) {
                delete this.handlers[type]
            }
        }
    }
}