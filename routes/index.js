var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

// Página de entrada (home page)
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors: [] });
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load); // autoload :quizId

// Definición de rutas de /quizes
router.get('/quizes',						quizController.index);
router.get('/quizes/:quizId(\\d+)',			quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',	quizController.answer);
router.get('/quizes/new',					quizController.new);
router.post('/quizes/create',				quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',	quizController.edit);
router.put('/quizes/:quizId(\\d+)',			quizController.update);
<<<<<<< HEAD
router.delete('/quizes/:quizId(\\d+)',		quizController.destroy);
=======
>>>>>>> e9befd44e8da5af170d8f8936ba7f1e81ac312da

// Página de créditos
router.get('/author', function(req, res) {
  res.render('author');
});

module.exports = router;
