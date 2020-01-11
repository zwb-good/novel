angular.module("writeBook.service",[])
.factory("writeBookService",function($http,configService){
return{
    getData:function(userId,callback){
    // 定义访问后天的接口地址
    var url = configService.getHostUrl() + '/admin/ReaderAction/getReader.do?userId='+userId+'&callback=JSON_CALLBACK'
        $http.jsonp(url)
    .success(function (data){
        // 将数据回调
        callback(data)
    })
    }
}
})