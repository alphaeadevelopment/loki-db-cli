import loki from 'lokijs';
import forEach from 'lodash/forEach';
import { loadDatabase } from '../utils';
import { closeDatabase } from '../utils';

const builder = (yargs) => {
}

const handler = ({ name, filename }) => {
  const db = new loki(filename);
  try {
    loadDatabase(db)
      .then(() => {
        const colls = db.listCollections();
        forEach(colls, c => console.log(c));
        closeDatabase(db)
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default ({
  command: 'listCollections',
  builder,
  desc: 'Lists the collections in a database',
  handler,
});
