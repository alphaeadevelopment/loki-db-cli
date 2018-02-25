import Loki from 'lokijs';
import forEach from 'lodash/forEach';
import { loadDatabase, closeDatabase } from '../utils';

const builder = () => { };

const handler = ({ filename }) => {
  const db = new Loki(filename);
  try {
    loadDatabase(db)
      .then(() => {
        const colls = db.listCollections();
        forEach(colls, c => console.log(c.name)); // eslint-disable-line no-console
        closeDatabase(db);
      })
      .catch((err) => {
        console.error(err); // eslint-disable-line no-console
        process.exit(1);
      });
  }
  catch (err) {
    console.error(err); // eslint-disable-line no-console
    process.exit(1);
  }
};

export default ({
  command: 'listCollections',
  builder,
  desc: 'Lists the collections in a database',
  handler,
});
