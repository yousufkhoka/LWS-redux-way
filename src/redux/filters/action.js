import { COLORCHANGED, STATUSCHANGED } from './actionType'

export const statusChanged = (status) => {
    return {
        type:STATUSCHANGED,
        payload: status,
    }
}

export const colorchanged = (color , colorType) => {

    return {
        type:COLORCHANGED,
         payload:{color, colorType}
    }
}