import addCollection from './add-collection';
import listCollections from './list-collections';
import removeCollection from './remove-collection';
import dumpCollection from './dump-collection';
import insert from './insert';
import findBy from './find-by';
import query from './query';
import findAndRemove from './find-and-remove';
const yargs = require('yargs/yargs');

// const args = process.argv.slice(2);

const parser = yargs(process.argv.slice(2))
  .command(listCollections)
  .command(addCollection)
  .command(removeCollection)
  .command(dumpCollection)
  .command(findAndRemove)
  .command(findBy)
  .command(query)
  .command(insert)
  .options({
    'filename': {
      alias: 'f',
      type: 'string',
      default: 'loki.db',
      description: 'The filename of the database',
      demandOption: false,
    },
  })
  .demandCommand()
  .strict()
  .help()
  .argv;
// const argv = parser.parse(process.argv.slice(2));
