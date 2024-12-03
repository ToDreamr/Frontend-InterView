let imageAsync = url => {
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.src = url
        img.onload = () => {
            console.log(`图片请求成功，此处进行通用操作`)
            resolve(img);
        }
        img.onerror = (error) => {
            console.log(`失败，此处进行失败的通用操作`)
            reject(error)
        }
    })
}
imageAsync("https://p3-passport.byteimg.com/img/mosaic-legacy/3795/3033762272~100x100.awebp").then(()=>{
    console.log("加载成功");
}).catch((error)=>{
    console.log(error.message)
    console.log("加载失败");
})