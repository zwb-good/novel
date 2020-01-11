/**
 * 书评的路由配置模块
 */
angular.module('bookReview.route',['bookReview.controller'])
.config(function($stateProvider){
    $stateProvider
    .state('bookReview',{
        url:'/bookReview',
        templateUrl:'areas/bookReview/bookReview.html',
        controller:'bookReviewCtrl',
        params:{bookId:null}
    })
})