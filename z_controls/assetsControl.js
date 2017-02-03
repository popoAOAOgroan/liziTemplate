
var assetsControl = module.exports;
var netData = require("../z_models/netData");
var code = require("../z_util/code");
var assets = require("../z_models/assetsData");

var mockData = {
"key": "法甲",
"tabs": {
"saicheng1": "第17轮赛程",
"saicheng2": "第18轮赛程",
"saicheng3": null,
"jifenbang": "积分榜",
"sheshoubang": "射手榜"
},
"views": {
"saicheng1": [
{
"c1": "未开赛",
"c2": "12-06周六",
"c3": "03:30",
"c4R": "VS",
"c4T1": "图卢兹",
"c4T1URL": "http://match.sports.sina.com.cn/football/team.php?id=486",
"c4T2": "摩纳哥",
"c4T2URL": "http://match.sports.sina.com.cn/football/team.php?id=317",
"c51": "视频暂无",
"c51Link": "",
"c52": "图文直播",
"c52Link": "http://match.sports.sina.com.cn/livecast/g/live.php?id=111967"
}
],
"saicheng2": [
{
"c1": "未开赛",
"c2": "12-13周六",
"c3": "03:30",
"c4R": "VS",
"c4T1": "里昂",
"c4T1URL": "http://match.sports.sina.com.cn/football/team.php?id=436",
"c4T2": "卡昂",
"c4T2URL": "http://match.sports.sina.com.cn/football/team.php?id=10165",
"c51": "视频暂无",
"c51Link": "",
"c52": "图文直播",
"c52Link": "http://match.sports.sina.com.cn/livecast/g/live.php?id=111972"
},
{
"c1": "未开赛",
"c2": "12-14周日",
"c3": "00:00",
"c4R": "VS",
"c4T1": "南特",
"c4T1URL": "http://match.sports.sina.com.cn/football/team.php?id=480",
"c4T2": "波尔多",
"c4T2URL": "http://match.sports.sina.com.cn/football/team.php?id=476",
"c51": "视频暂无",
"c51Link": "",
"c52": "图文直播",
"c52Link": "http://match.sports.sina.com.cn/livecast/g/live.php?id=111975"
},
{
"c1": "未开赛",
"c2": "12-14周日",
"c3": "03:00",
"c4R": "VS",
"c4T1": "巴斯蒂亚",
"c4T1URL": "http://match.sports.sina.com.cn/football/team.php?id=376",
"c4T2": "雷恩",
"c4T2URL": "http://match.sports.sina.com.cn/football/team.php?id=477",
"c51": "视频暂无",
"c51Link": "",
"c52": "图文直播",
"c52Link": "http://match.sports.sina.com.cn/livecast/g/live.php?id=111968"
}
],
"saicheng3": null,
"jifenbang": [
{
"c1": "1",
"c2": "马赛",
"c2L": "http://match.sports.sina.com.cn/football/team.php?id=478",
"c3": "16",
"c41": "11",
"c42": "2",
"c43": "3",
"c5": "19",
"c6": "35"
},
{
"c1": "2",
"c2": "巴黎圣日耳曼",
"c2L": "http://match.sports.sina.com.cn/football/team.php?id=316",
"c3": "16",
"c41": "9",
"c42": "7",
"c43": "0",
"c5": "19",
"c6": "34"
},
{
"c1": "3",
"c2": "圣埃蒂安",
"c2L": "http://match.sports.sina.com.cn/football/team.php?id=483",
"c3": "16",
"c41": "8",
"c42": "5",
"c43": "3",
"c5": "6",
"c6": "29"
}
],
"sheshoubang": [
{
"c1": "1",
"c2": "拉卡泽特",
"c2L": "http://match.sports.sina.com.cn/football/player.php?id=59966",
"c3": "里昂",
"c3L": "http://match.sports.sina.com.cn/football/team.php?id=436",
"c4": "11",
"c5": "1"
},
{
"c1": "2",
"c2": "吉尼亚克",
"c2L": "http://match.sports.sina.com.cn/football/player.php?id=37827",
"c3": "马赛",
"c3L": "http://match.sports.sina.com.cn/football/team.php?id=478",
"c4": "11",
"c5": "1"
},
{
"c1": "3",
"c2": "马迪巴",
"c2L": "http://match.sports.sina.com.cn/football/player.php?id=90126",
"c3": "雷恩",
"c3L": "http://match.sports.sina.com.cn/football/team.php?id=477",
"c4": "7",
"c5": "0"
}
]
}
};

assetsControl.getAssetsList = function(){
	console.log('?');
	// assets.selectAllWithUser(1);
    var returnData = new netData(code.success, mockData,'资产列表');
    return returnData; 
}

assetsControl.addAssets = function(){
    var returnData = new netData(code.success, mockData,'增加资产');
    return returnData;
}