var artistCtrl = require('./backEndControllers/artistCtrl');

app.post('/api/artists', artistCtrl.create);
app.get('/api/artists/all', artistCtrl.readAll);
app.get('/api/artists', artistCtrl.read);
app.put('/api/artists', artistCtrl.update);
app.delete('/api/artists', artistCtrl.remove);