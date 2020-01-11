/** 
 * 引导页的路由模块
*/

angular.module("loginPage.route",["loginPage.controller"])

.config(function($stateProvider){
  $stateProvider
  .state("loginPage",{
    url:"/loginPage",
    // 配置视图模板的相对路径，注意要以index.html为相对对象
    templateUrl:"./areas/loginPage/loginPage.html",
    controller:"LoginPageController"  //配置控制器名称
  })
})