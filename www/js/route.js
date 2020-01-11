/**
 * 项目的全局路由模块，实现默认页面的跳转，以及依赖子模块的路由
  */

angular.module('route',[
  'guidePage.route', //引导页
  'tab.route',   //标签导航栏
  'home.route', //首页标签
  'bookshop.route', //书城
  'user.route',  //个人资料
  'myNews.route',  //我的消息
  'comment.route', //我的书评
  'collect.route', //我的收藏
  'skin.route', //个性皮肤
  'search.route',  //查找页面
  'readNovel.route', //阅读页面
  'loginPage.route',  //登录页面
  'registerPage.route', //注册界面
  'novelIntroduction.route', //介绍小说页面
  'cartoon.route',  //动漫
  'writeBook.route', //写书
  'publish.route', //出版
  'youthCampus.route', //青春校园
  'sort.route', //分类
  'rankingList.route',  //排行榜
  'shortStory.route',  //短篇
  'bookList.route' ,//书单列表
  'bookReview.route', //书评
  'writeComment.route', //写书评
  'catalog.route', //目录
  'replay.route' //回复评论
])

.config(function($urlRouterProvider){
  //使用H5提供的LocalStorage来存储一个布尔变量，判断是否第一次打开App
  if(localStorage['isNotFirst']){
    //跳到首页
    $urlRouterProvider.otherwise('/tab/bookshop')
  }else{
      //设置项目的启动页面url
      $urlRouterProvider.otherwise('/guidePage')
  }
})
