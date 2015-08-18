module.exports = watchf;

var childProcess = require('child_process'),
    chokidar = require('chokidar');

var SH = process.env.SHELL;

/** verbose flag */
var isv;

function watchf (globs, cmd, opts) {
  isv = opts.v;

  var ignores = ['node_modules', 'flycheck_*'].concat(opts.i);

  v('globs   :', globs);
  v('command :', cmd);
  v('opts    :', opts);
  v('ignores :', ignores);

  i('watching change on', globs, '...');

  chokidar.watch(globs, {ignored: ignores})
    .on('change', function (path) {
      cmd = cmd.replace(/{}/, path);

      i('changed', path, '->', '\'' + cmd + '\'');

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
