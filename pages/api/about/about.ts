//Test API

import express from 'express';

const app = express();

app.get('/api/about/about', (req: express.Request, res: express.Response) => {
    res.send('Get Hello');
});

app.post('/api/about/about', (req: express.Request, res: express.Response) => {
    res.send('Post Hello');
});

export default app;