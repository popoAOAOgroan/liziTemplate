var express = require('express');
var router = express.Router();
var utilNext = require("../z_util/utilNext");
// var testControl = require("../z_controls/testControl");
var assetsControl = require("../z_controls/assetsControl");
var http = require('http');


/* GET home page. */
router.get('/', function(req, res, next)
{
  // testControl.test(1,'2131',function(data)
  // {
  //   	utilNext.utilRender(data,'index',res,next)
  // });
});
  
router.get('/api/leagued', function(req, res, next)
{
  var thatRes = res;
  var options = {
      hostname: 'op.juhe.cn',
      port: 80,
      path: '/onebox/football/league?key=13264dcdaee8b7664f5100cc77c2472f&league=法甲',
      method: 'GET' 
  };
  var req = http.request(options,function(res){
    res.setEncoding('utf8');  
    res.on('data', function(data){
        utilNext.utilSend(data,thatRes,next);
    });
    res.on('end', function() {
      
    });
    // console.log('res',res);
    //   utilNext.utilSend(res.body,thatRes,next);
  });
  req.on('error', function(event){
    console.log('message',event.message);
    utilNext.utilSend(event.message ,thatRes,next);
  });
  req.end();  
  // console.log('resObj',res);
  // utilNext.utilSend('abcdefg', res, next);
  // var data = app.get('http://op.juhe.cn/onebox/football/leagued?type=&league=&key= ', function(req, res, next){
  //   console.log('data res', res.body);
  //   //utilNext.utilSend(res,thatRes,next);
  // })
});



// router.post('/',function(req,res,next)
// {
//   testControl.test(1,'2131',function(data)
//   {
//     	utilNext.utilSend(data,res,next)
//   });
// });

router.get('/api/assets/all',function(req,res,next){
	var assetsData = assetsControl.getAssetsList();
	utilNext.utilSend(assetsData,res,next);
});

router.post('/api/assets/add',function(req,res,next){
	var assetsData = assetsControl.addAssets(req);
	utilNext.utilSend(assetsData,res,next);
});

module.exports = router;
