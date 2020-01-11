/**
 * 短篇页的控制器模块
 */

angular.module('shortStory.controller', [])
    .controller('ShortStoryCtrl', function ($scope, $state) {
        //返回上一页
        $scope.func_back = function(){
            window.history.go(-1);
        }

        $(function(){
            $(".find_nav_list").css("left","0px");
            $(".find_nav_list li").each(function(){
                if($(this).find("a").text()==sessionStorage.pagecount){
                    $(".home-content").css({left:(-$(this).index())*$(window).width()});
                    $(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
                    navName(sessionStorage.pagecount);
                    return false
                }
                else{
                    $(".find_nav_list li").eq(0).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
                }
            });
            var nav_w=$(".find_nav_list li").first().width();
            $(".find_nav_list li").on('click', function(){
                $(".home-content").stop(true);
                $(".home-content").animate({left:(-$(this).index())*$(window).width()},300);
                $(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
                var fn_w = ($(".find_nav").width() - nav_w) / 2;
                var fnl_l;
                var fnl_x = parseInt($(this).position().left);
                if (fnl_x <= fn_w) {
                    fnl_l = 0;
                } else if (fn_w - fnl_x <= flb_w - fl_w) {
                    fnl_l = flb_w - fl_w;
                } else {
                    fnl_l = fn_w - fnl_x;
                }
                $(".find_nav_list").animate({
                    "left" : "0px"
                }, 300);
                sessionStorage.left=fnl_l;
                var c_nav=$(this).find("a").text();
                navName(c_nav);
            });
            var fl_w=$(".find_nav_list").width();
            var flb_w=$(".find_nav_left").width();
            $(".find_nav_list").on('touchstart', function (e) {
                var touch1 = e.originalEvent.targetTouches[0];
                x1 = touch1.pageX;
                y1 = touch1.pageY;
                ty_left = parseInt($(this).css("left"));
            });
            $(".find_nav_list").on('touchmove', function (e) {
                var touch2 = e.originalEvent.targetTouches[0];
                var x2 = touch2.pageX;
                var y2 = touch2.pageY;
                if(ty_left + x2 - x1>=0){
                    $(this).css("left", 0);
                }else if(ty_left + x2 - x1<=flb_w-fl_w){
                    $(this).css("left", flb_w-fl_w);
                }else{
                    $(this).css("left", ty_left + x2 - x1);
                }
                if(Math.abs(y2-y1)>0){
                    e.preventDefault();
                }
            });
        });
        function navName(c_nav) {
            switch (c_nav) {
                case "全部":
                    sessionStorage.pagecount = "全部";
                    break;
                case "儿童文学":
                    sessionStorage.pagecount = "儿童文学";
                    break;
                case "评论文集":
                    sessionStorage.pagecount = "评论文集";
                    break;
                case "影视剧本":
                    sessionStorage.pagecount = "影视剧本";
                    break;
            }
        }
        function sidelineWidth(){
            var nav_w=$(".find_nav_cur").width();
            $(".sideline").width(nav_w);
        }
        setTimeout(function () {
            sidelineWidth();
        }, 100)
    
        //获取屏幕宽度
       
    
        function homeContextWidth(){
            // var tabIdeaWidth = document.documentElement.clientWidth
            $('.home-content').css('width',$(window).width()*4)
        }
        homeContextWidth()
    


    })