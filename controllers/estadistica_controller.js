var models = require('../models/models.js');
// GET /quizes/statistics
//exports.estadistica = function(req, res, quizes, comment){
   // res.render('estadistica.ejs', {quizes: quizes, comment: comment, errors: []});
//};   

exports.estadistica = function(req, res, next){
	var options = {};
	var valores = {};
	var numero = {};
	var comment = req.comment;
	var quizes = req.quizes;
	var quizId = req.quizId 
	models.Quiz.findAll(options).then(
    	function(quizes) {
    		models.Comment.findAll(valores).then(
           function(comment){
           	models.Comment.findAll(numero).then(
           		function(quizId){
    		res.render('estadistica.ejs', {quizes: quizes, comment: comment, quizId: quizId, errors: []});
    		}
    	   );
          }
    	);
      }
    );
};
