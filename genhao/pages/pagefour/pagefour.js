//获取应用实例
const app = getApp()

Page({
  data: {
    animationData: {},
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  nextPage: function () {
    wx.navigateTo({
      url: '../pagefive/pagefive'
    })
  },
})