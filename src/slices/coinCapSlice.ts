// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import endpoint from "src/configs/endpoint";

export interface IAssets {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface IAssetsResponse {
  data: IAssets[];
  timestamp: number;
}

// Define a service using a base URL and expected endpoints
const coinCapApi = createApi({
  reducerPath: "coincap",
  baseQuery: fetchBaseQuery({ baseUrl: endpoint.coinCap }),
  endpoints: (builder) => ({
    assets: builder.query<IAssetsResponse, void>({
      query: () => "assets?limit=10",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAssetsQuery } = coinCapApi;
export default coinCapApi;
