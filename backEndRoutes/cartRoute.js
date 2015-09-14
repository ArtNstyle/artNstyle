var cartCtrl = require('./backEndControllers/cartCtrl');

app.post('/api/cart', cartCtrl.create);
app.get('/api/cart', cartCtrl.read);
app.put('/api/cart', cartCtrl.update);
app.delete('/api/cart', cartCtrl.remove);