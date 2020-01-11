angular.module("bookshop.route",['bookshop.controller'])
  .config(function($stateProvider){
    $stateProvider
    .state(
      "tab.bookshop",{
        url:'/bookshop',
        views:{
          'tab-bookshop':{
            templateUrl:'areas/bookshop/bookshop.html',
            controller:'BookshopController'
          }
        }
      }

    )
  })