var eventCtrl = require('./backEndControllers/eventCtrl');

app.post('/api/events', eventCtrl.create);
app.get('/api/events/all', eventCtrl.readAll);
app.get('/api/events', eventCtrl.read);
app.put('/api/events', eventCtrl.update);
app.delete('/api/events', eventCtrl.remove);