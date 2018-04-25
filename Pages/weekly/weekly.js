Page({
  data: {
   weeklyMovieList: [
    {
      name: "泰坦尼克号",
      comment: "失去的才是永恒的",
      imagePath: "/images/titanic.jpg",
      isHighlyRecommended: false,
      id: 1292722
    },
    {
      name: "这个杀手不太冷",
      comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事",
      imagePath: "/images/leon.jpg",
      isHighlyRecommended: false,
      id: 1295644
    },
    {
      name: "教父",
      comment: "最精彩的剧本，最真实的黑帮电影。",
      imagePath: "/images/jf.jpg",
      isHighlyRecommended: true,
      id: 1291841
    }
  ],
  count: 0,
  score: 61,
  
  },
  onLoad:function(options)
  {
    this.setData(
      {
        currentIndex: this.data.weeklyMovieList.length - 1
      }
    )
  },
   f0: function (event) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
   },
   f1: function (event) {
     var movieId = event.currentTarget.dataset.movieId
     //console.log(movieId);

     wx.navigateTo({
       url: '/Pages/detail/detail?id=' + movieId
     })
   },
  // f0: function (event) {
  //   this.setData({
  //    count:this.data.count+1,
  //    "weeklyMovieList[2].name":"教父三"
  //   })
  //  }
  onShareAppMessage: function () {
     return {
       title: "每周推荐"
     }
   }

})