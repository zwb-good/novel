/**
 *  阅读小说数据服务模块
 */
angular.module('readNovel.service',[])
.factory("readNovelService",function($http,configService){
    return{
        //获取小说内容
        getData:function(url,startLength,endLength,callback){
            var url = configService.getHostUrl() + '/BookAction/getContent.do?url='+url+'/txt&startLength='+startLength+'&endLength='+endLength+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){   // 将数据回调
                callback(data)
            })
        },

        //获取用户个性设置信息
        getSetting:function(userId,callback){
            var url = configService.getHostUrl() + '/SettingAction/getByUserId.do?userId='+userId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        },

        //修改个性设置
        saveSetting:function(userId,fontFamily,bgcColor,fontSize,callback){
            console.log(bgcColor)
            var url = configService.getHostUrl() + '/SettingAction/update.do?userId='+userId+'&fontFamily='
                url += fontFamily+'&bgcColor=%23'+bgcColor+'&fontSize='+fontSize+'&callback=JSON_CALLBACK'
                console.log(url)
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        }
    }
})