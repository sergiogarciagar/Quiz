var models = require('../models/models.js');
var fav = false;

//GET de faovoritos
exports.index = function(req, res, next) {
	req.user.getFavourites().then(function(favourites){
		favourites.forEach(function(favourites){
		//favourites.favourites = true;
		fav = true;
	});
	res.render('favourites/index.ejs',{
		favourites: favourites, fav: fav,
		errors: []
	});
}).catch(function(error){
	next(error);
});
};

exports.load = function(req, res, next, favouritesId) {
	models.Quiz.find({
		where: { id: Number(UserId)}, include: [{ model: models.Quiz }] }
		).then(function(quiz){
			if (quiz) {
				req.quiz = quiz;
				next();
			} else { next (new Error ('No existe quizId=' + quizId))}
	      }
		).catch(function(error) { next(error)});
};


//PUT de pregunta favoritas
exports.add = function(req, res, next) {
	fav = true;
	
	var redir = req.body.redir || '/user/' + req.user.id + '/favourites'

	req.user.addFavourite(req.quiz).then(function(){
		res.redirect(redir);
	}).catch(function(error){
		next(error);
	}); 
};

//DELETE de preguntas favoritas
exports.destroy = function(req, res, next) {
	fav = false;
	var redir = req.body.redir || '/user/' + req.user.id + '/favourites'

	req.user.removeFavourite(req.quiz).then(function(){
		res.redirect(redir);
	}).catch(function(error){
		next(error);
	});
};	