var stylistCtrl = require('./backEndControllers/stylistCtrl');

app.post('/api/stylists', stylistCtrl.create);
app.get('/api/stylists/all', stylistCtrl.readAll);
app.get('/api/stylists', stylistCtrl.read);
app.put('/api/stylists', stylistCtrl.update);
app.delete('/api/stylists', stylistCtrl.remove);