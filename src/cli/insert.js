import loki from 'lokijs';
import merge from 'lodash/merge';
import { collectionName } from './common-options';
import { loadCollection } from '../utils';
import { closeDatabase, saveDatabase } from '../utils';

const builder = (yargs) => {
  yargs
    .options(merge(
      collectionName, {
        'data': {
          alias: 'd',
          type: 'string',
          description: 'The data',
          default: '{}',
        },
      }));
};

const handler = ({ name, filename, data }) => {
  const db = new loki(filename);
  loadCollection(db, name)
    .then((collection) => {
      let item;
      try {
        item = JSON.parse(data);
      } catch (e) {
        console.error('Error parsing JSON: %s', data);
        process.exit(1);
      }
      collection.insert(item);
      saveDatabase(db)
        .then(() => {
          closeDatabase(db)
            .then(() => null);
        })
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    })
}

export default ({
  command: 'insert',
  desc: 'Inserts data into a collection',
  builder,
  handler,
});
