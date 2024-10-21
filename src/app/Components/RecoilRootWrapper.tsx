"use client";

import React, { FC, ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface Props {
  children: ReactNode;
}

const RecoilRootWrapper: FC<Props> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootWrapper;
