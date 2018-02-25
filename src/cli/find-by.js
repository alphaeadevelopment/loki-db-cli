import Loki from 'lokijs';
import merge from 'lodash/merge';
import { collectionName } from './common-options';
import { loadCollection, closeDatabase } from '../utils';

const builder = (yargs) => {
  yargs
    .options(merge(
      collectionName, {
        'field': {
          alias: ['c', 'column'],
          type: 'string',
          description: 'The unique field',
          demandOption: true,
        },
        'value': {
          alias: 'v',
          type: 'string',
          description: 'The value',
          demandOption: true,
        },
      }));
};

const handler = ({ name, filename, field, value }) => {
  const db = new Loki(filename);
  loadCollection(db, name)
    .then((collection) => {
      const data = collection.by(field, value);
      if (data) console.log(JSON.stringify(data, null, 2));
      closeDatabase(db)
        .then(() => null);
    })
    .catch((err) => {
      console.error(err); // eslint-disable-line no-console
      process.exit(1);
    });
};

export default ({
  command: 'findBy',
  desc: 'Find by index value',
  builder,
  handler,
});
