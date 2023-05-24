module.exports = app =>{
	const home = (req, res) =>{
		res.render('index', {})
	}
	return home;
}
