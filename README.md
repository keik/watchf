# watchf

Watch change on files and run commands.

In the command part, you can put placeholders `{}` for a changed file path.


## Install

```
% npm i watchf -g
````

## Usage

```
% watchf <files> -c <command> [options]
```

* `files` can be globs.
* `command` can contain placefolder `{}` for changed file name.

```
% watchf '**/*.js' '**/*.es' --ignore vendor --command 'eslint {}'
```

## Options

* `--command, -c` - Command to run when change files.
* `--ignore, -i` - Ignore to watch. Files can be globs. Default values are `['**/node_modules/**', '**/flycheck_**']`.

* `--verbose, -d` - Output verbose messages.
* `--help, -h` - Show help message.
