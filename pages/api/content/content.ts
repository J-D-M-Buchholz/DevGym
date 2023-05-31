//Test API

import express from 'express';

const app = express();

app.get('/api/content/content', (req: express.Request, res: express.Response) => {
    res.send('Get Hello');
});

app.post('/api/content/content', (req: express.Request, res: express.Response) => {
    res.send('Post Hello');
});

export default app;