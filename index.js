module.exports = watchf;

var childProcess = require('child_process'),
    chokidar = require('chokidar');

var SH = process.env.SHELL || process.env.COMSPEC;
var C_OPT = process.env.SHELL && !process.env.COMSPEC ? '-c' : '/c';

/** verbose flag */
var isv;

function watchf (globs, cmd, opts) {
  isv = opts.v;

  var ignores = ['**/node_modules/**', '**/flycheck_**'].concat(opts.i);

  v('globs   :', globs);
  v('command :', cmd);
  v('opts    :', opts);
  v('ignores :', ignores);

  i('watching change on', globs, '...');

  chokidar.watch(globs, {ignored: ignores})
    .on('change', function (path) {
      var newCmd = cmd.replace(/{}/, path);

      i('changed', path, '->', '\'' + newCmd + '\'');

      var p = childProcess.spawn(SH, [C_OPT, newCmd], {
        stdio: 'inherit'
      });
    });
}

// easy logging
function v () {

  /* eslint no-console: [0] */
  if (isv) console.log.apply(console, Array.prototype.concat.apply(['[watchf]'.verbose], arguments));
}

function i () {

  /* eslint no-console: [0] */
  console.log.apply(console, Array.prototype.concat.apply(['[watchf]'.info], arguments));
}
