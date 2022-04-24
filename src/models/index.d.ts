import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RatingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StatsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GuideMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Ratings {
  readonly id: string;
  readonly Stats?: (Stats | null)[] | null;
  readonly ratingType: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ratings, RatingsMetaData>);
  static copyOf(source: Ratings, mutator: (draft: MutableModel<Ratings, RatingsMetaData>) => MutableModel<Ratings, RatingsMetaData> | void): Ratings;
}

export declare class Stats {
  readonly id: string;
  readonly guideID: string;
  readonly ratingsID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Stats, StatsMetaData>);
  static copyOf(source: Stats, mutator: (draft: MutableModel<Stats, StatsMetaData>) => MutableModel<Stats, StatsMetaData> | void): Stats;
}

export declare class Guide {
  readonly id: string;
  readonly contentJson?: string | null;
  readonly creationDate?: number | null;
  readonly userID: string;
  readonly Ratings?: (Stats | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Guide, GuideMetaData>);
  static copyOf(source: Guide, mutator: (draft: MutableModel<Guide, GuideMetaData>) => MutableModel<Guide, GuideMetaData> | void): Guide;
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly tagline?: string | null;
  readonly Guides?: (Guide | null)[] | null;
  readonly Stats?: (Guide | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}