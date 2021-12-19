# svelte-kit-file-upload

Full example with a simple form, the script client-side, and the upload server-side.

The pieces:

* `svelte.config.js` -- set the upload plugin for development mode.
* `src/server.mjs` -- the prod server. Orchestrate between the svelte kit app
    and the upload middlewares.
* `src/lib/uploadPlugin.mjs` -- the middleware that takes care of the uploads
    to the endpoint '/upload'.
* `src/lib/components/UppyDashboard.svelte` -- the frontend component using
    Uppy that talks to the `/upload` endpoint.

There isn't a lot of CSS and form design. Not very fun but it works!
