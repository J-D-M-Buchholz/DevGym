//Test API

import express from 'express';

const app = express();

app.get('/api/contact/contact', (req: express.Request, res: express.Response) => {
    res.send('Get Hello');
});

app.post('/api/contact/contact', (req: express.Request, res: express.Response) => {
    res.send('Post Hello');
});

export default app;