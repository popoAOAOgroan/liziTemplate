var sql = require('../z_models/database');

var assets = {
	selectAllWithUser : function(userId){
		sql.query('select * from assets where user_id ='+ userId ,function(err, rows, fields){
			console.log('data rows',rows);
		});
	}
}

module.exports = assets;
