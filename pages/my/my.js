Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData: {},
    signNum: 0,
    sign: false,
    signTime: '',
    loading: true,
    noReadNewsCount: 0
  },

  onLoad: function (options) {
    var that = this
    wx.getUserInfo({
      success: (result) => {
        var nickName = result.userInfo.nickName
        var userPic = result.userInfo.avatarUrl
        var userData = { 'nickName': nickName, 'userPic': userPic }
        wx.setStorageSync('userInfo', userData)
        that.setData({
          userData: userData
        })
      }
    })
    that.spinShow()
    wx.u.getSignNum().then(res => {
      if (res.result[0] != "" && res.result[0] != undefined) {
        var day = new Date(res.result[0].createdAt).toDateString();

        if (day == new Date().toDateString()) {
          that.setData({
            sign: true,
            signTime: res.result[0]
          })
        }
      }
      that.setData({
        signNum: res.signNum
      })
      that.spinShow()
    })
    
  },


  //签到
  sign() {
    var that = this
    wx.showLoading({
      title: '签到中',
    })
    wx.u.saveSign().then(res => {
      if (res.result) {
        setTimeout(function () {
          wx.hideLoading()
          that.setData({
            sign: true,
            signShow: true,
            signTime: res.data,
            signNum: that.data.signNum + 1
          })
        }, 1500)
      }else{
        that.spinShow();
      }
    })
  },
 
  //分享
  share() {

  },
  spinShow: function () {
    var that = this
    setTimeout(function () {
      that.setData({
        loading: !that.data.loading,
      });
      console.log("spinShow");
    }, 1500)
  }
})