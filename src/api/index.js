import { version } from '../../package.json';
import { Router } from 'express';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	// api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});
  api.post('/login', ({body}, res) => {
    if (body.username === 'test' && body.password === 'password') {
      // const token = jwt.sign({
      //   data: {
      //     username: body.username,
      //     password: body.password
      //   }
      // }, 'sophon', { expiresIn: '24h' });
      // res.set('Authorization', 'Bear ' + token);
      res.json({'token': 'testToken'})
    } else {
      res.sendStatus(401);
    }
  })
  api.get('*')

	return api;
}
