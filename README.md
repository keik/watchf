# watchf

Watch change on files and spawn commands.

In the command part, you can put placeholders `{}` for a changed file path.


## Install

```sh
% npm i watchf -g
````

## Usage

```sh
% watchf [files] [command] {Options}
```

* `files` can be globs.
* `command` can contain placefolder `{}` for changed file name.

```sh
% watchf **/*.js **/*.es -i vendor -c 'eslint {}'
```

## Options

* `--command, -c` Command to run when change files.
* `--ignore, -i` Ignore to watch. Files can be globs.
* `--verbose, -d` Output verbose messages.
* `--help, -h` Show help message.
