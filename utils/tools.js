const getPicFromCenavm = (ctx) => {
  return new Promise((resolve, reject) => {
    ctx.takePhoto({
      quality: "low",
      success: (res) => {
        getBase64(res.tempImagePath).then((result) => {
          resolve("data:image/png;base64," + result.data)
        })
      }
    })
  })
}
//将图片转base64
const getBase64 = (path) => {
  return new Promise((resolve, reject) => {
    wx.getFileSystemManager().readFile({
      filePath: path,
      encoding: "base64",
      success: (res) => {
        resolve(res)
      }
    })
  })
}

module.exports = {
  getPicFromCenavm
}