import React, { FC } from "react";
import { CacheProvider } from "@emotion/react";

import { MDSCacheProviderTypes } from "./MDSCacheProvider.types";

const Index: FC<MDSCacheProviderTypes> = ({ children, cache }) => {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export default Index;
