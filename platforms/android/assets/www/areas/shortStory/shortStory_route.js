angular.module('shortStory.route',['shortStory.controller'])
.config(function($stateProvider){
    $stateProvider
    .state('shortStory',{
        url:'/shortStory',
        templateUrl:'./areas/shortStory/shortStory.html',
        controller:'ShortStoryCtrl'
            
        
    })
})

