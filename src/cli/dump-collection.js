import Loki from 'lokijs';
import { collectionName } from './common-options';
import { loadCollection, closeDatabase } from '../utils';

const builder = (yargs) => {
  yargs
    .options(
      collectionName,
    );
};

const handler = ({ name, filename }) => {
  const db = new Loki(filename);
  loadCollection(db, name)
    .then((collection) => {
      const data = collection.find({});
      console.log(JSON.stringify(data, null, 2)); // eslint-disable-line no-console
      closeDatabase(db);
    })
    .catch((err) => {
      console.error(err); // eslint-disable-line no-console
      process.exit(1);
    });
};

export default ({
  command: 'dumpCollection',
  desc: 'Dumps the full contents of a collection',
  builder,
  handler,
});
