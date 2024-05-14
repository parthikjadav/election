const { default: axios } = require("axios")

export const get_api = (action)=>{
    const {url} = action
    return axios.get(url).then(
        (res)=> {
           return {"data":res.data.data,"status":res.status}
        }
    ).catch((err)=>err)
}

export const post_api = (action)=>{
    const {url,data} = action.payload
    const options = action?.options || {}
    return axios.post(url,data,options).then(
        (res)=> {
            return {"data":res.data.data,"status":res.status}
        }
    ).catch((err)=>err)
}

export const delete_api = (action)=>{
    const {url} = action.payload
    return axios.delete(url).then(
        (res)=> {
           return {"data":res.data,"status":res.status}
        }
    ).catch((err)=>err)
}