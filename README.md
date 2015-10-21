# Instructions

Install base packages:

    $ npm install
    $ bower install

Setup your path to use the tools installed locally by npm:

    $ export PATH=$(pwd)/node_modules/.bin:$PATH

Use this command to start watchify that will refresh the bundle with code changes:

    $ npm start

If you get something like this error on Linux:

    Error: watch ENOSPC
        at errnoException (fs.js:1028:11)
        at FSWatcher.start (fs.js:1060:11)
        at Object.fs.watch (fs.js:1085:11)
        at createFsWatchInstance ...

You might need to increse your inotify limit:

    $ sudo sysctl fs.inotify.max_user_watches=30000

To open the application in the browser you just need to serve the `public` folder.
That's easy with Python for example:

    $ cd public
    $ python -m SimpleHTTPServer

Now just open your browser in http://localhost:8000

In dev mode full sourcemaps are generated, including for the Stylus styles, you can
check in Chrome's dev tools.