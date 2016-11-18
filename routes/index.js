var express = require('express');
var router = express.Router();
var utilNext = require("../z_util/utilNext");
// var testControl = require("../z_controls/testControl");
var assetsControl = require("../z_controls/assetsControl");


/* GET home page. */
router.get('/', function(req, res, next)
{
  testControl.test(1,'2131',function(data)
  {
    	utilNext.utilRender(data,'index',res,next)
  });
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
