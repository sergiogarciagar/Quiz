var models = require('../models/models.js');

//Comprueba si el usuario esta registrado en users
// So autenticación falla o hay errores se ejecuta callbacj(error).
exports.autenticar = function(login, password, callback) {
	model.User.find({
		where: {
			username: login
		}
	}).then(function(user){
	if(user){
		if(user.verifyPassword(password)){
        callback(null, user);
		}
		else { callback(new Error ('Password erróneo.')); }
	} else { callback(new Error('No existe el usuario.' + login))}
}).catch(function(error){callback(error)});
};