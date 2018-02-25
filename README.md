# loki-db-cli

## Overview
This is a node CLI wrapper for [LokiJS](https://github.com/techfort/LokiJS) javascript NoSQL database.


## Usage
```
$ npm install -g loki-db-cli
$ loki-db-cli help
loki-db-cli <command>

Commands:
  loki-db-cli listCollections   Lists the collections in a database
  loki-db-cli addCollection     Adds a collection
  loki-db-cli removeCollection  Removes the given collection
  loki-db-cli dumpCollection    Dumps the full contents of a collection
  loki-db-cli findAndRemove     Removes the results of a query from a collection
  loki-db-cli findBy            Find by index value
  loki-db-cli query             Executes the given query on a collection
  loki-db-cli insert            Inserts data into a collection

Options:
  --version       Show version number                                  [boolean]
  --filename, -f  The filename of the database     [string] [default: "loki.db"]
  --help          Show help                                            [boolean]
```

