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

## Example
```
$ loki-db-cli listCollections -f /tmp/films.db
$
$ loki-db-cli addCollection -n films -u title -u director -f /tmp/films.db
$ loki-db-cli insert -n films -f /tmp/films.db -d '{"title":"Episode IV - A New Hope", "releaseDate": "May 25, 1977", "director": "George Lucas"}'
$ loki-db-cli dumpCollection -n films -f /tmp/films.db
[
  {
    "title": "Episode IV - A New Hope",
    "releaseDate": "May 25, 1977",
    "director": "George Lucas",
    "meta": {
      "revision": 0,
      "created": 1519587452683,
      "version": 0
    },
    "$loki": 1
  }
]
$ loki-db-cli insert -n films -f /tmp/films.db -d '{"title":"Episode V - The Empire Strikes Back", "releaseDate": "May 21, 1980", "director": "Irvin Kershner"}'
$
$ loki-db-cli findBy -f /tmp/films.db -n films -c "director" -v "George Lucas"
{
  "title": "Episode IV - A New Hope",
  "releaseDate": "May 25, 1977",
  "director": "George Lucas",
  "meta": {
    "revision": 0,
    "created": 1519588055568,
    "version": 0
  },
  "$loki": 1
}
$ lokidb-cli query -n films -f /tmp/films.db -q '{"director": { "$ne": "George Lucas"}}'
[
  {
    "title": "Episode V - The Empire Strikes Back",
    "releaseDate": "May 21, 1980",
    "director": "Irvin Kershner",
    "meta": {
      "revision": 0,
      "created": 1519588375616,
      "version": 0
    },
    "$loki": 2
  }
]
$
```
