#!/usr/bin/env node

var fs = require('fs'),
    xtend = require('xtend'),
    watchf = require('./');

require('colors').setTheme({
  info: 'cyan',
  verbose: 'magenta'
});

var argv = require('minimist')(process.argv.slice(2), {boolean: ['v', 'h'], alias: {h: 'help', v: 'verbose', c: 'command'}}),
    defaults = {v: false, h: false, c: ''},
    opts = xtend(defaults, argv),
    globs = opts._,
    cmd = opts.c;

// show help
if (globs.length < 1 || opts.h) {
  return fs.createReadStream('./usage.txt')
    .on('end', function () {
      process.exit(1);
    })
    .pipe(process.stdout);
}

// start watch
watchf(globs, cmd, opts);
