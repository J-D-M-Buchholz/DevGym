//Test API

import express from 'express';

const app = express();

app.get('/api/footer/footer', (req: express.Request, res: express.Response) => {
    res.send('Get Hallo');
});

app.post('/api/footer/footer', (req: express.Request, res: express.Response) => {
    res.send('Post Hallo');
});

export default app;