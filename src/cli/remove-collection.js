import loki from 'lokijs';
import { loadCollection } from '../utils';
import { closeDatabase, saveDatabase } from '../utils';

const builder = (yargs) => {
}

const handler = ({ name, filename }) => {
  const db = new loki(filename);
  db.removeCollection(name);
  saveDatabase(db)
  closeDatabase(db)
    .then(() => console.log('complete'))
    .catch(err => {
      console.error(err);
      process.exit(1);
    })
}

export default ({
  command: 'removeCollection',
  desc: 'Removes the given collection',
  builder,
  handler,
});
