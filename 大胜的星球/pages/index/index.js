//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    animation: '',
    animations: '',
    animationt: '',
    screenType:'',
    screenTypef:'',
    screenTypes: '',
    screenTypet: '',
    titleshow:'',
    article:"",
    title:"hellow world"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: 'hi 你好吗'
    })
  },
  showList: function () {
     var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
      delay: 100,
      transformOrigin: "left top 0 "
    })
    this.animation = animation,
    this.animation.translate(0, 100).width(125).height(80).step().translate(40, 40).step();
    this.setData({
      title:"你 好",
      screenType: 1,
      screenTypef: 1,
      article:"总会做一些奇怪的梦，耳朵里长出仙人掌、大风吹走的牙齿、轮胎旋转成齿轮、麦克风里钻出蟒蛇......也许，耳朵里应该长出狗尾巴草、大风应该吹走眉毛、轮胎旋转成了风车、麦克风里爬出的是蚯蚓......只有这样，当一个超短裙女生走到我面前时，才会说：你好，当然，我不会对她回复你好。虽然她的长发与我的白色鞋带纠缠在一起。 \n 毕竟鞋带曾有过足球场上洒脱的青春！球场上却没有穿着超短裙的女生。然而,超短裙女生其实一直住在足球场的水管下。水管漏出的每一个水滴都会淹死一只爬虫，超短裙女生收集了所有死去爬虫的每一只脚，想拼凑出一个环游世界的梦想。\n冬天下雪时，超短裙女生的水管不会结冰，她极其期待满天飞雪时的一声闷雷，但却不渴望闪电。结果，冬夜里的闪电还是劈断了足球场。\n 只有这样，超短裙女生走到我面前时，才会说：你好！当然，我不会对她说你好。虽然她的长发吹到了我的肩上。\n白色没有斑的马，是超短裙女生的弟弟。他背上有一整片草原，他一直带着这一片草原奔跑在大海之上。超短裙女生的眼泪流进了大海却没有灌溉马背上的草原。足球场上的绿茵坪还没有枯萎的时候，马背上的草原已经干黄。超短裙女生的弟弟死在了秋天的第一场雨之前。\n只有这样，超短裙女生走到我面前时，才会说：你好！最终，我也不会对她说你好，虽然大风吹走了我的牙齿。",
      //输出动画
      animation: this.animation.export(),

    })
  },
  showLists: function () {
    wx.pageScrollTo({
      scrollTop: 0,
    });
    var animations = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
      delay: 100,
      transformOrigin: "left top 0 "
    })
    this.animations = animations,
      this.animations.translate(0, -100).width(125).height(80).step().translate(40, -200).step();
    this.setData({
      title: "酒",
      screenType: 1,
      screenTypes:1,
      article: "喝酒这个事，已经记不清当时是谁劝我来的第一杯，这个人真是送了我一个美好的世界。\n 酒真的可以说是这个世上最美丽的一个存在，它美在可以出现在任何一种情绪或是你人生重要的场合中都不觉得突然。开心、难过、兴奋、抑郁...接风洗尘、临别饯行、婚丧嫁娶等等，在不同的情境下它放大了不同的感情得以让人有了释放和庆祝的力气。\n 大家都说，做朋友嘛，至少三观你要合拍，不然很难相处的。我觉得这话没毛病，朋友相处时，啤酒观、白酒观、洋酒观真的会决定能不能一起愉快的玩耍，能不能一起变成喷泉。谁都有几个养鱼的兄弟，也都有几个再来三杯的姐妹。酒量行不行不会影响感情，关键还得看你牛皮扯不扯得开，如果喝酒都打不开你话匣子，那真是友谊的小船已经在漏水了。不过话匣子可别开太大了，都喝酒了，容易挨揍。\n喝酒就少不了大排档，大排档这个精神文化圣地，每次都让你整个人升华，走路带风，连碰个杯子自己心里都配出好几段BGM。而且大排档是你可以和最聊得来的（和你一样穷的）朋友一起合唱“让我们红尘作伴活得潇潇洒洒”的地方。\n酒吧那就更不用提，都不用嘣沙咔啦咔或者C哩C哩的，随便一个小跳蛙都可以让你嗨到飞起---论气氛的重要性。在俺们大东北酒吧，那被酒精熏陶了的小青年尬起舞来，你都想上去把他戳瞎。所以总是一边释放自己又要一边安抚自己他比你小、他比你年轻、他比你腰细、他比你不要脸......\n这是结尾：本来想要以“酒，以水的状态在流淌但却以火的性格在燃烧”来开头，突然发现自己格局有限就放飞自我了。\n这也是结尾：我说所有的酒，都不如你！是你，没错，看这个文章的你，别笑",
      //输出动画
      animations: this.animations.export(),

    })
  },
  showListt: function () {
    var animationt = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
      delay: 100,
      transformOrigin: "left top 0 "
    })
    this.animationt = animationt,
      this.animationt.translate(0, -100).width(125).height(80).step().translate(40, -450).step();
    this.setData({
      title: "感谢",
      screenType: 1,
      screenTypet: 1,
      article: "对于自己给别人什么感觉，这个很难摸索，而且100个人对你就有100个印象和感觉。我希望自己能成为一个有温度、有趣味的人，不麻木、不单调。在成为自己的路上，能遇见每一个朋友，我非常幸运，你们带给了我很多，帮助我很多，做鬼也不会放过你们的！\n Tips1：接口调用《一个》，感谢开源，不过可能加载速度有时候比较感人，不要急\n Tips2：有些图标可能会存在加载不出，比如音乐播放、暂停，那你就凭感觉点吧，爱听不听\n Tips3：感谢设计总监熙瑞美女的图片设计以及产品经理新影美女的公关和帮助",
      //输出动画
      animationt: this.animationt.export(),

    })
  },
  closeList: function () {
   
    if (this.animations) { this.animations.translate(0, 100).width(375).height(240).translateY(-100).step();
      this.setData({
        animations: this.animations.export(),
        title: "你 好",
        screenType: '',
        screenTypes: ''
        })
      this.animations='';
    }
    else if (this.animation){
      this.animation.translate(0, 100).width(375).height(240).translateY(-100).step();
      this.setData({
        animation: this.animation.export(),
        title: "你 好",
        screenType: '',
        screenTypef: ''

      })
      this.animation = '';
    } else if (this.animationt){
      this.animationt.translate(0, 100).width(375).height(240).translateY(-100).step();
      this.setData({
        animationt: this.animationt.export(),
        title: "你 好",
        screenType: '',
        screenTypet: ''

      })
      this.animationt = '';
    }
  },

  onShow: function () {
    
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})