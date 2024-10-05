const fixImgUrl = (url="") =>{
    if(!url) return ""
    if(url.includes(":")){
        if(url.split(':').length>2)
            return url.split(":")[1]
    }
    return url
}

export default fixImgUrl;