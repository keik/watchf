module.exports = watchf;

var childProcess = require('child_process'),
    chokidar = require('chokidar');

var SH = process.env.SHELL;

/** verbose flag */
var isv;

function watchf (globs, cmd, opts) {
  isv = opts.v || opts.verbose;

  v('globs   :', globs);
  v('command :', cmd);
  v('opts    :', opts);

  i('watching change on', globs, '...');

  chokidar.watch(globs)
    .on('change', function (path) {
      cmd = cmd.replace(/{}/, path);
      i('changed', path, 'spawn', cmd);
      childProcess.spawn(SH, ['-c', cmd], {
        stdio: 'inherit'
      });
    });
}

// easy logging
function v () {

  /* eslint no-console: [0] */
  if (isv) console.log.apply(console, Array.prototype.concat.apply(['[watchfy]'.verbose], arguments));
}

function i () {

  /* eslint no-console: [0] */
  console.log.apply(console, Array.prototype.concat.apply(['[watchfy]'.info], arguments));
}
