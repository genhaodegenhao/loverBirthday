//获取应用实例
const app = getApp()

Page({
  data: {
    animationData: {},
    animationData1: {},
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    text: 'genhao',
    imgUrl: [
      'http://genhao.kuaiyunds.com/genhao/page1_bg.jpg',
      'http://genhao.kuaiyunds.com/genhao/page2_bg.jpg',
      'http://genhao.kuaiyunds.com/genhao/page3_bg.jpg',
      'http://genhao.kuaiyunds.com/genhao/page4_bg.jpg',
      'http://genhao.kuaiyunds.com/genhao/page5_bg.jpg'
    ]
  },
  nextPage: function () {
    wx.navigateTo({
      url: '../pagetwo/pagetwo'
    })
  },
  onShow: function(){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2,2).rotate(45).step()

    this.setData({
      animationData:animation.export(),
      animationData1:animation.export()
    })

    setTimeout(function() {
      animation.translate(30).step()
      this.setData({
        animationData1:animation.export()
      })
    }.bind(this), 1000)
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData1: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData: this.animation.export()
    })
  }
})