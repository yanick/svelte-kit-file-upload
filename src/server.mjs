import polka from 'polka';

import { assetsMiddleware, prerenderedMiddleware, kitMiddleware } from '../build/middlewares.js';
import {uploadMiddleware} from './lib/uploadPlugin.mjs';

const app = polka();

app.use(uploadMiddleware);

app.all('*', assetsMiddleware, prerenderedMiddleware, kitMiddleware);

app.listen(3000);
