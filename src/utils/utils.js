import {Message} from "element-ui"

const message = (type, info, duration=3000) => {
    Message({
        type,
        message: info,
        duration    // 设置关闭时间 默认值 3000
    })
}

export {
    message
}