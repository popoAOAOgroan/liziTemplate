
var assetsControl = module.exports;
var netData = require("../z_models/netData");
var code = require("../z_util/code");
var assets = require("../z_models/assetsData");

var mockData = {
	results :[
		{
			name: '固定资产',
			list: [
				{
					aName: '小财迷',
					aTotal: 16023100,
					aYesterdayCash: '+34.78',
					aTotalRate: '+1.67%'
				}
			]
		},
		{
			name: '浮动收益类',
			list: [
				{
					aName: '千山药剂',
					aTotal: 1265681,
					aYesterdayCash: '-154.78',
					aTotalRate: '+12.67%'
				}
			]
		},
		{
			name: '其他资产',
			list: [
				{
					aName: 'SurfacePro 4',
					aTotal: 868800,
					passDay: 9,
					aYesterdayCash: '-0.00%'
				}
			]
		}
	]
};

assetsControl.getAssetsList = function(){
	console.log('?');
	assets.selectAllWithUser(1);
    var returnData = new netData(code.success, mockData,'资产列表');
    return returnData; 
}

assetsControl.addAssets = function(){
    var returnData = new netData(code.success, mockData,'增加资产');
    return returnData;
}