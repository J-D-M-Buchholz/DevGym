import express from 'express';

const app = express();

app.get('/api/courses/courses', (req: express.Request, res: express.Response) => {
    res.send('Get Hello');
});

app.post('/api/courses/courses', (req: express.Request, res: express.Response) => {
    res.send('Post Hello');
});

export default app;