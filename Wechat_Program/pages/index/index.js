Page({
 data:{
 // text:”Mirror Pictures Icon”
 imageSrc:'../../pages/image/ico.jpg'
 },


 goIndex: function () {
    wx.navigateTo({
      url: '../out/out', //
      success: function () {

      },
      fail: function () { },
      complete: function () { }
    })
 }
 
})