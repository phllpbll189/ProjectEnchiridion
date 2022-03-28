// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ratings, Stats, Guide, User } = initSchema(schema);

export {
  Ratings,
  Stats,
  Guide,
  User
};