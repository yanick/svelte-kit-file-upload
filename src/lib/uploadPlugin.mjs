/* The upload plugin and its functions. */

import multer from "multer";
import fs from "fs-extra";
import path from "path";

const uploadHandler = multer({ dest: "./uploads" }).array("file");

/* Uploads the files server-side */
const uploadFiles = async (req) =>
    new Promise((resolve) =>
        uploadHandler(req, null, () => resolve({ success: true }))
    );

export const uploadMiddleware = async (req, res, next) => {
            if (!req.url.startsWith("/upload")) return next();

            try {
                await uploadFiles(req);
                res.writeHead(200, { "Content-Type": "text/plain" });
                return res.end("ok");
            } catch (err) {
                res.writeHead(500, {
                    "Content-Type": "text/plain",
                });
                return res.end("upload plugin error: " + err);
            }
        }

/* The upload plugin. See the svelte.config.js file */
const uploadPlugin = {
    name: "upload-middleware",
    configureServer(server) {
        server.middlewares.use(uploadMiddleware);
    },
};

export { uploadPlugin };
