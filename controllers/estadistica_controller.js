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
	var pregcon = 0;
	models.Quiz.findAll(options).then(
    	function(quizes) {
    		models.Comment.findAll(valores).then(
           function(comment){
          models.Comment.findAll(numero)
         .then(function(coment){   
         var i; 
         for(i=0;i<comment.length;i++){
          if(numero[comment[i].QuizId]){
            numero[comment[i].QuizId]++;
          }
          else{
            numero[comment[i].QuizId]=1;
          }
      }
      if(quizes.length !== 0){
        for(i=1;i<=quizes.length;i++){
          if(numero[i]){
            pregcon++;
          }
        }
      }
      else{
        pregcon=0;
      }  
    		res.render('estadistica.ejs', {quizes: quizes, comment: comment, pregcon: pregcon, errors: []});
    		}
    	);
    }
      );
      }
    );
};
