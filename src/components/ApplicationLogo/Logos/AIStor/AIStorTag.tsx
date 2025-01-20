// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { FC, SVGProps } from "react";

import LogoBase from "../LogoBase/LogoBase";
import { LogoBaseProps } from "../LogoBase/LogoBase.types";

const AIStorTag: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 202.2 51" inverse={inverse} onClick={onClick}>
      <g>
        <rect
          className={"minioSection"}
          x="36.3"
          y=".7"
          width="4.9"
          height="14.4"
        />
        <path
          className={"minioSection"}
          d="M30.4.9l-9.9,6.1c-.1,0-.3,0-.5,0L10.1.9c-.2-.1-.5-.2-.7-.2h0c-.8,0-1.4.6-1.4,1.4v13h4.9v-6.2c0-.4.4-.6.7-.4l5.6,3.4c.5.3,1.2.3,1.8,0l5.9-3.4c.3-.2.7,0,.7.4v6.2h4.9V2.1c0-.8-.6-1.4-1.4-1.4h0c-.3,0-.5,0-.7.2"
        />
        <path
          className={"minioSection"}
          d="M65.6.7h-5v6.6c0,.4-.4.6-.7.4L47.1.9c-.2-.1-.4-.2-.6-.2h0c-.8,0-1.4.6-1.4,1.4v13h4.9v-6.6c0-.4.4-.6.7-.4l12.9,6.8c.2.1.4.2.6.2.8,0,1.4-.6,1.4-1.4V.7h0Z"
        />
        <rect
          className={"minioSection"}
          x="69.4"
          y=".7"
          width="2.2"
          height="14.4"
        />
        <path
          className={"minioSection"}
          d="M84.9,15.4c-6,0-10.3-2.9-10.3-7.5S78.8.4,84.9.4s10.4,2.9,10.4,7.5-4.2,7.5-10.4,7.5M84.9,2.3c-4.5,0-8,2-8,5.6s3.5,5.6,8,5.6,8-1.9,8-5.6-3.5-5.6-8-5.6"
        />
        <path
          className={"minioSection"}
          d="M52.5,30.8v-3.7c0-.9.7-1.6,1.6-1.6h8.9c1.8,0,2.2,2.4.6,3.1l-8.9,3.7c-1.1.4-2.2-.3-2.2-1.5"
        />
        <path
          className={"minioApplicationName"}
          d="M30.5,50.1h8.2l-13.2-24.5h-10.3L1.8,50.1h9.9l11.4-4.8c1.5-.6,1.1-2.9-.6-2.9h-8.7l6.6-13s10.2,20.7,10.2,20.7Z"
        />
        <path
          className={"minioApplicationName"}
          d="M94.6,28.2l-2.3,4.8c-3.6-1.9-8.2-2.8-12.3-2.8s-6.5.8-6.5,2.2,3,2.1,8.8,2.5c8.1.6,13.3,2.4,13.3,7.3s-5.8,8.3-15.2,8.3-11.6-1.6-15-4.5l3.5-4.1c2.6,2.2,7.5,3.5,12.2,3.5s7.3-1.1,7.3-2.6-3.2-2.2-9.6-2.7c-6.9-.5-12.5-2.3-12.5-7.2s5.3-7.8,14.3-7.8,10,1,14,3.2"
        />
        <polygon
          className={"minioApplicationName"}
          points="109.7 50.1 109.7 30.6 97.4 30.6 97.4 25.5 128.8 25.5 128.8 30.6 116.6 30.6 116.6 50.1 109.7 50.1"
        />
        <path
          className={"minioApplicationName"}
          d="M165.9,37.8c0,7.8-7.3,12.8-18,12.8s-17.9-5-17.9-12.8,7.4-12.7,17.9-12.7,18,4.8,18,12.7M137.3,37.7c0,4.8,4.3,7.8,10.6,7.8s10.5-3,10.5-7.8-4.3-7.5-10.5-7.5-10.6,2.4-10.6,7.5"
        />
        <path
          className={"minioApplicationName"}
          d="M200.4,50.1l-10.4-9.2c6,0,9.9-3.7,9.9-7.6s-4-7.7-13.1-7.7h-16.1v24.5h7v-19.6h8.1c4.4,0,6.7,1,6.7,3.2s-1.7,3.6-6.3,3.6h-4c-.9,0-1.5.2-1.8.8-.2.5,0,1.1.9,2.2l9.4,9.7h9.7Z"
        />
        <rect
          x="41.4"
          y="25.6"
          width="6.9"
          height="24.5"
          className={"minioApplicationName"}
        />
      </g>
    </LogoBase>
  );
};

export default AIStorTag;
