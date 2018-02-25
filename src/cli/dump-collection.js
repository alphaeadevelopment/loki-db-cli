import loki from 'lokijs';
import merge from 'lodash/merge';
import { collectionName } from './common-options';
import { loadCollection } from '../utils';
import { closeDatabase } from '../utils';

const builder = (yargs) => {
  yargs
    .options(
      collectionName,
    //     'name': {
    //       alias: 'n',
    //       type: 'string',
    //       description: 'The name of the collection',
    //       demandOption: true,
    //     },
  );
}

const handler = ({ name, filename }) => {
  const db = new loki(filename);
  loadCollection(db, name)
    .then((collection) => {
      const data = collection.find({});
      console.log(JSON.stringify(data, null, 2));
      closeDatabase(db)
        .then(() => console.log('complete'));
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    })
}

export default ({
  command: 'dumpCollection',
  desc: 'Dumps the full contents of a collection',
  builder,
  handler,
});
