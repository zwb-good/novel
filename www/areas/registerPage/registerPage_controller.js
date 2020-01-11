/** 
 * 引导页的控制器模块
*/

angular.module("registerPage.controller",['registPage.service'])

.controller("RegisterPageController",function($scope,$state,registService){
  $scope.name
  $scope.password
  $scope.rePassword
  var regName= /^1[3-578]\d{9}$/;  //手机号验证
  var regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{8,}$/;     //密码必须是数字 字母 特殊字符 不支持空格  最少8位
  /** 
   * 注册
  */
  $scope.regist = function(name,password,rePassword){
    if(name == null){
      $scope.erro = "手机号不能为空"
      return false
    }
    if(password == null){
      $scope.erro = "密码不能为空"
      return false
    }
    if(rePassword == null){
      $scope.erro = "确认密码不能为空"
      return false
    }
    if(rePassword != password){
      $scope.erro = "确认密码不一致"
      return false
    }
    if(!regName.test(name)){
      $scope.erro = "请输入正确的手机号"
      return false
    }
    if(!regPassword.test(password)){
      $scope.erro = "密码必须是数字和字母最少8位"
      return false
    }
    registService.getData(name,password,function(data){
      if(data.success){
        localStorage.setItem('userId',data.rows[0].userId);
        localStorage.setItem('readerName',data.rows[0].name);
        localStorage.setItem('home_isShow',true)
        $state.go('tab.bookshop');
      }else{
        $scope.erro = data.msg;
      }
    })
  }
  /** 
   * 输入框获取焦点，清除错误信息
  */
  $scope.clearErro = function (){
    $scope.erro = ""
  }
})