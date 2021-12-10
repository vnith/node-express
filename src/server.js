// node-modules
import { json, urlencoded } from 'body-parser';
import express, { static as staticFiles } from 'express';

// config files
import router from './routes';

const app = express();

// Time Logger
app.use((req, res, next) => {
  /* eslint-disable no-console */
  console.log(`A new request received at ${Date.now()}`, req.method, req.url);
  /* eslint-enable no-console */
  next();
});
// To parse URL encoded data
app.use(urlencoded({ extended: false }));
// To parse json data
app.use(json());

// Static files
app.use(staticFiles('dist'));

// Route handlers
app.use(router);

app.listen(
  80,
  /* eslint-disable no-console */
  () => console.log('Node server started on port: ', 80),
  /* eslint-enable no-console */
);
