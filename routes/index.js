var express = require('express');
var router = express.Router();
var path=require("path")
var music=path.join(__dirname,"../public/musics")
/* GET home page. */
router.get('/', function(req, res, next) {
	var fs=require("fs")
	fs.readdir(music,function(err,names){
		if(err){
			console.log(err)
			next(err)
		}else{
			res.render('index', { title: 'Passionate Music',music: names });
		}
	})
});

module.exports = router;
