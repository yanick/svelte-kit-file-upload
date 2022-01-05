import polka from 'polka';

import { handler } from '../build/handler.js';
import {uploadMiddleware} from './lib/uploadPlugin.mjs';

const app = polka();

app.use(uploadMiddleware);

app.all('*', handler );

app.listen(3000);

console.log("you can connect on http://localhost:3000");
