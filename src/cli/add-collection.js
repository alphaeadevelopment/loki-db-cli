import loki from 'lokijs';
import merge from 'lodash/merge';
import { collectionName } from './common-options';
import { closeDatabase, saveDatabase } from '../utils';
const builder = (yargs) => {
  yargs
    .options(
      merge(collectionName, {
        'unique': {
          alias: 'u',
          type: 'array',
          description: 'Property names to define unique constraints for',
          demandOption: true,
        },
      }));
}

const handler = ({ name, filename, unique }) => {
  const db = new loki(filename);
  var collection = db.addCollection(name, { unique });
  saveDatabase(db)
    .then(() => {
      closeDatabase(db)
        .then(() => null);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    })
}

export default ({
  command: 'addCollection',
  desc: 'Adds a collection',
  builder,
  handler,
});
