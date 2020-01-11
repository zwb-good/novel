/**
 * 小说排行页数据服务模块
*/

angular.module('rankingList.service', [])
    .factory('rankingListFty', function ($q){
        return{
            getRankData: function(){
                var rankData = [
                    {
                        name:"好评榜",
                        typeNumber: '100'
                    },
                    {
                        name:"热销榜",
                        typeNumber: '101'
                    },
                    {
                        name:"原创榜",
                        typeNumber: '102'
                    },
                    {
                        name:"完结榜",
                        typeNumber: '103'
                    },
                    {
                        name:"连载榜",
                        typeNumber: '104'
                    }
                ];
                //假设数据请求成功
                var deferred = $q.defer();
                deferred.resolve(rankData);
                return deferred.promise;
            },
            getRankDetailData:function(typeNumber){
                var rankDetailData = [];

                if(typeNumber==100){
                    rankDetailData=[
                        {
                            name:"暗恋",
                            src:"/www/img/bookshop/bookshop14.jpg",
                            author:"八月长安",
                            abstract:"暗恋是一个人的兵荒马乱，最是真挚也最是心酸，无疾而终的爱恋。",
                            id:"10001"
                        },
                        {
                            name:"白鹿原",
                            src:"/www/img/bookshop/bookshop11.jpg",
                            author:"陈忠实",
                            abstract:"一部渭河平原五十年变迁的雄奇史诗，一轴中国农村斑斓多彩、触目惊心的长幅画卷",
                            id:"10002"
                        },
                        {
                            name:"骄阳似我",
                            src:"/www/img/bookshop/bookshop12.jpg",
                            author:"顾漫",
                            abstract:"每个人的生命中都可能会有庄序的存在，也许你可能现在都记得他的样子，可是那些你曾爱的",
                            id:"10003"
                        },
                        {
                            name:"我想要两个西柚",
                            src:"/www/img/bookshop/bookshop15.jpg",
                            author:"胡辛束",
                            abstract:"你一个不经意的温暖笑容，点亮的却是我的整个·世界，我想和你一起虚度光阴",
                            id:"10004"
                        }
                    ];
                }else{
                    rankDetailData=[
                        {
                            name:"小王子",
                            src:"/www/img/bookshop/king.jpg",
                            author:"圣埃克苏佩里",
                            abstract:"遥远星球上的小王子，与美丽而骄傲的玫瑰吵架负气出走，在各星球漫游中，小王子遇到了",
                            id:"10001"
                        },
                        {
                            name:"荆棘王冠",
                            src:"/www/img/bookshop/bookshop4.jpg",
                            author:"独木舟",
                            abstract:"在海上看过月升，在春天寻过花开，在漫长的孤独中等过爱人。在人潮拥挤的街道与你相逢，在漆黑雨夜有过辗转的思念。",
                            id:"10001"
                        },
                        {
                            name:"东宫",
                            src:"/www/img/bookshop/bookshop9.jpg",
                            author:"匪我思存",
                            abstract:"比皇宫更危险的地方是东宫，比皇帝更难当的是太子，而我愿意以这山河万里，换取一段",
                            id:"10001"
                        },
                        {
                            name:"被遗忘的时光",
                            src:"/www/img/bookshop/bookshop5.jpg",
                            author:"青衫落拓",
                            abstract:"生活的种种琐碎与美好，一语道破。原来，在我的十年里，最美好的事情曾经汹涌来过",
                            id:"10001"
                        }
                    ];
                }
                // 假设数据请求成功
                var deferred = $q.defer();
                deferred.resolve(rankDetailData);
                return deferred.promise;
            }
        }
    })