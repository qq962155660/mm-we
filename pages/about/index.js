// pages/about/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    QQ:"962155660",
    email: "962155660@qq.com",
    web:"https://www.whitenight.online",
    github:"https://github.com/qq962155660",
    name: 'cdf'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  copyDataTap: function (a) {
    var t = a.target.dataset.index;
    wx.setClipboardData({
      data: t,
      success: function (a) {
        wx.getClipboardData({
          success: function (a) {
            console.log(a.data);
          }
        });
      }
    });
  },
  open (){
    wx.navigateToMiniProgram({
      appId: 'wxdfb81cfa65c520bc',
      path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  }
})