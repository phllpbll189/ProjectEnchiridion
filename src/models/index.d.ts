import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LikesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GuideMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Likes {
  readonly id: string;
  readonly usersID?: string;
  readonly guideID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Likes, LikesMetaData>);
  static copyOf(source: Likes, mutator: (draft: MutableModel<Likes, LikesMetaData>) => MutableModel<Likes, LikesMetaData> | void): Likes;
}

export declare class Guide {
  readonly id: string;
  readonly usersID?: string;
  readonly Likes?: (Likes | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Guide, GuideMetaData>);
  static copyOf(source: Guide, mutator: (draft: MutableModel<Guide, GuideMetaData>) => MutableModel<Guide, GuideMetaData> | void): Guide;
}

export declare class Users {
  readonly id: string;
  readonly Email?: string;
  readonly Password?: string;
  readonly Username?: string;
  readonly untitledfield?: string;
  readonly Likes?: (Likes | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}