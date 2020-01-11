/** 
 * 引导页的控制器模块
*/

angular.module("loginPage.controller",['login.service'])

.controller("LoginPageController",function($scope,$state,loginService){
    $scope.name
    $scope.password
    $scope.login = function(name,password){
        loginService.getData(name,password,function(data){
            if(data.success){
                localStorage.setItem('userId',data.rows[0].userId);
                localStorage.setItem('headUrl',data.rows[0].headUrl);
                localStorage.setItem('readerName',data.rows[0].name);
                localStorage.setItem('home_isShow',true)
                $state.go('tab.bookshop');
            }else{
                $scope.error = data.msg;
            }
        })
    }
    /** 
    * 输入框获取焦点，清除错误信息
    */
    $scope.clearError = function (){
        $scope.error = ""
    }
})