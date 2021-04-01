import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

const moook = (req: Request, res: Response) => {
  res.status(200).json({
    version: '1.0.0',
    date: new Date().toISOString(),
    ...req.body,
  });
};

app.get('/', (req, res) => {
  moook(req, res);
});

app.post('/', (req, res) => {
  moook(req, res);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at port ${port}`);
});
