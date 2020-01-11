/**
 * 书城数据服务模块
  */

angular.module('bookshop.service',[])
.factory('bookshopService',function($http,configService){
    return{
        //获取书城数据
        getCarousel:function(callback){
            var url = configService.getHostUrl()+'/admin/CarouselAction/getByPhone.do?callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function(data){
                callback(data); //返回数据
            })
        },

        //分页数据获取 num为页数 position为位置
        getBook:function(num,position,callback){
            var url = configService.getHostUrl()+'/admin/BookshopAction/getByPosition.do?num='+num+'&position='+position+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function(data){
                callback(data); //返回数据
            })
        }
    }
})