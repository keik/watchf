#!/usr/bin/env node

var fs = require('fs'),
    xtend = require('xtend'),
    watchf = require('./');

require('colors').setTheme({
  info: 'cyan',
  verbose: 'magenta'
});

var argv = require('minimist')(process.argv.slice(2)),
    defaults = {
      verbose: false
    },
    opts = xtend(defaults, argv),
    globs = argv._,
    cmd = argv.c;

// show help
if (globs.length < 1 || opts.h || opts.help) {
  fs.createReadStream('./usage.txt')
    .on('end', function () {
      process.exit(1);
    })
    .pipe(process.stdout);
}

// start watch
watchf(globs, cmd, opts);
