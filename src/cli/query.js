import loki from 'lokijs';
import merge from 'lodash/merge';
import { collectionName } from './common-options';
import { loadCollection } from '../utils';
import { closeDatabase } from '../utils';

const builder = (yargs) => {
  yargs
    .options(merge(
      collectionName, {
        'query': {
          alias: 'q',
          type: 'string',
          description: 'The query',
          default: '{}',
        },
      }));
};

const handler = ({ name, filename, query }) => {
  const db = new loki(filename);
  loadCollection(db, name)
    .then((collection) => {
      let dbQuery;
      try {
        dbQuery = JSON.parse(query);
      } catch (e) {
        console.error('Error parsing JSON: %s', query);
        process.exit(1);
      }
      const data = collection.find(dbQuery);
      if (data) console.log(JSON.stringify(data, null, 2));
      closeDatabase(db)
        .then(() => null);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    })
}

export default ({
  command: 'query',
  desc: 'Executes the given query on a collection',
  builder,
  handler,
});
