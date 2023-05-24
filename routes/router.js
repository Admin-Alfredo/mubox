module.exports = app =>{
	const CLIENT_ID= "2a20ba02b93b4e4d9dc211d8bf88b4f4"
	const CLIENT_SECRET = "7b196b17697e4bac8c1bcd47e3c5bea3"
	const SCOPE = "user-read-private user-read-email"

	const getIp = app.config.index.getIp
	console.log('TEST', encodeURIComponent(`http://${getIp()}:${app.get('port')}/redirect`))
	app.get('/', app.controllers.home)
	app.get('/api/musicas', app.controllers.musicas.getAll)
	app.get('/api/musicas/:id', app.controllers.musicas.getOne)
	app.get('/api/login', (req, res) =>{
		res.redirect('https://accounts.spotify.com/authorize' +
		  '?response_type=code' +
		  '&client_id=' + CLIENT_ID +
		  (SCOPE ? '&scope=' + encodeURIComponent(SCOPE) : '') +
		  '&redirect_uri=' + `${encodeURIComponent('http://2886795281-3000-elsy04.environments.katacoda.com/mubox/callback')}`);
			 
	})
	app.get('/redirect', (req, res)=>{
		console.log(req.query)
		res.status(200).json({...req.query})
	})
}
