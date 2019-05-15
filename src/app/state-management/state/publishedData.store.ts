import { PublishedData } from "state-management/models";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface PublishedDataState extends EntityState<PublishedData> {
  publishedData: PublishedData[];
  currentPublishedData: PublishedData;
  filters: {
    skip: number;
    limit: number;
  };
}

// adapter with custom selectId using doi
export const adapter: EntityAdapter<PublishedData> = createEntityAdapter<
  PublishedData
>({ selectId: (publishedData: PublishedData) => publishedData.doi });

export const initialPublishedDataState: PublishedDataState = adapter.getInitialState(
  {
    currentPublishedData: null,
    publishedData: null,
    filters: {
      skip: 0,
      limit: 10
    }
  }
);
/*ids: null,
    entities: null,
    publishedData: null,
    currentPublishedData: null*/
