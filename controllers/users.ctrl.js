const User = require('./../models/User')
const fs = require('fs')


module.exports = {


	addUser: (req, res, next) => {
			// let { name, email, password, labels } = req.body
			saveUser({ name, email, password, labels })
			function saveUser(obj) {
				new User(obj).save((err, user) => {
					if (err)
						res.send(err)
					else if (!user)
						res.send(400)
					else {
						return 'A OK'
						// return user.addAuthor(req.body.author_id).then((_article) => {
						// 	return res.send(_article)
						// })
					}
					next()
				})
			}
		},


	// addArticle: (req, res, next) => {
	// 	let { text, title, claps, description } = req.body
	// 	saveArticle({ text, title, claps, description, feature_img: '' })
	// 	function saveArticle(obj) {
	// 		new Article(obj).save((err, article) => {
	// 			if (err)
	// 				res.send(err)
	// 			else if (!article)
	// 				res.send(400)
	// 			else {
	// 				return article.addAuthor(req.body.author_id).then((_article) => {
	// 					return res.send(_article)
	// 				})
	// 			}
	// 			next()
	// 		})
	// 	}
	// },

	// getAll: (req, res, next) => {
	// 	Article.find(req.params.id)
	// 	.populate('author')
	// 	.populate('comments.author').exec((err, article)=> {
	// 		if (err)
	// 			res.send(err)
	// 		else if (!article)
	// 			res.send(404)
	// 		else
	// 			res.send(article)
	// 		next()            
	// 	})
	// },

	// clapArticle: (req, res, next) => {
	// 	Article.findById(req.body.article_id).then((article)=> {
	// 		return article.clap().then(()=>{
	// 			return res.json({msg: "Done"})
	// 		})
	// 	}).catch(next)
	// },

	// commentArticle: (req, res, next) => {
	// 	Article.findById(req.body.article_id).then((article)=> {
	// 		return article.comment({
	// 			author: req.body.author_id,
	// 			text: req.body.comment
	// 		}).then(() => {
	// 			return res.json({msg: "Done"})
	// 		})
	// 	}).catch(next)
	// },

	// getArticle: (req, res, next) => {
	// 	Article.findById(req.params.id)
	// 	.populate('author')
	// 	.populate('comments.author').exec((err, article)=> {
	// 		if (err)
	// 			res.send(err)
	// 		else if (!article)
	// 			res.send(404)
	// 		else
	// 			res.send(article)
	// 		next()            
	// 	})
	// }



}