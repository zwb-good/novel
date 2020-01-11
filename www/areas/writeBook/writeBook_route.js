/**
 * 写书路由
  */
angular.module('writeBook.route',['writeBook.controller'])
    .config(function($stateProvider){
        $stateProvider
        .state('tab.writeBook',{
            url:'/writeBook',
            //指定模板的渲染位置
            views:{
                'tab-writeBook':{
                    templateUrl:'areas/writeBook/writeBook.html',
                    controller:'writeBookCtrl'
                }
            }
        })
    })