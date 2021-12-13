// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Likes, Guide, Users } = initSchema(schema);

export {
  Likes,
  Guide,
  Users
};