# watchf

Watch change on files and spawn commands.

In command part, you can put placeholder `{}` for a changed file path.


## Install

    % npm i watchf -g


## Usage

    % watchf [files] [command] {Options}

* `files` can be globs.
* `command` can contain placefolder `{}` for changed file name.

    % watchf **/*.js `eslint {}`


## Options

* `--ignore, -i (Not implemented)` Ignore to watch. Files can be globs.
* `--verbose -d` Output verbose messages.
* `--help, -h` Show help message
