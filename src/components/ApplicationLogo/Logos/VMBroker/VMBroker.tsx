// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

const VMBroker: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 189.7 49.96" inverse={inverse} onClick={onClick}>
      <g>
        <g>
          <rect
            x="21.92"
            y=".09"
            width="3.8"
            height="11.1"
            className="minioSection"
          />
          <path
            d="m17.33.29l-7.6,4.6c-.1.1-.2.1-.4,0L1.73.29c-.2-.1-.4-.2-.5-.2h0C.62.09.12.59.12,1.09v10h3.8v-4.7c0-.2.2-.4.4-.4q.1,0,.2.1l4.3,2.6c.4.3,1,.3,1.4,0l4.4-2.6c.2-.1.4,0,.5.1,0,.1.1.1.1.2v4.8h3.8V1.09c0-.6-.5-1-1-1h0c-.3,0-.5.1-.7.2Z"
            className="minioSection"
          />
          <path
            d="m44.42.09h-3.8v5.1c0,.2-.2.4-.4.4h-.2L30.12.19c-.1-.1-.3-.1-.5-.1h0c-.6,0-1,.5-1,1v10h3.8v-5c0-.2.2-.4.4-.4h.2l9.9,5.3c.2.1.3.1.5.1h0c.6,0,1-.5,1-1V.09Z"
            className="minioSection"
          />
        </g>
        <path d="m47.33,11.2V.1h1.8v11.1h-1.8Z" className="minioSection" />
        <path
          d="m59.33,11.4c-4.7,0-8-2.2-8-5.7s3.3-5.7,8-5.7,8,2.2,8,5.7-3.3,5.7-8,5.7Zm0-10c-3.5,0-6.2,1.5-6.2,4.2s2.7,4.3,6.1,4.3,6.1-1.5,6.1-4.3c.1-2.7-2.6-4.2-6-4.2Z"
          className="minioSection"
        />
      </g>
      <g>
        <path
          d="m21.7,23.5l-8.2,21.8h-5.3L0,23.5h4.6l6.3,17.4,6.3-17.4h4.5Z"
          className={"minioApplicationName"}
        />
        <path
          d="m48.6,23.5v21.8h-4.3v-16.5l-5.4,14.4h-4.6l-5.4-14.2v16.3h-4.3v-21.8h6.4l5.7,14.7,5.7-14.7s6.2,0,6.2,0Z"
          className={"minioApplicationName"}
        />
        <path
          d="m51.9,23.5h8.4c2.4,0,4.4.5,5.8,1.4s2.1,2.4,2.1,4.4c0,1.2-.3,2.2-.9,3-.6.8-1.4,1.4-2.4,1.8,1.1.4,2.1,1,2.7,1.9s1,2,1,3.3c0,2.1-.7,3.6-2.1,4.6s-3.3,1.5-5.9,1.5h-8.9v-21.9h.2Zm8.4,2.4h-5.8v7.2h5.9c.8,0,1.5-.1,2.1-.2s1.2-.3,1.7-.6.9-.6,1.2-1.1c.3-.5.4-1.1.4-1.8s-.1-1.3-.4-1.8-.7-.9-1.2-1.1-1.1-.4-1.7-.6c-.7,0-1.4,0-2.2,0Zm.4,9.5h-6.2v7.5h6.2c.9,0,1.6-.1,2.2-.2.6-.1,1.2-.3,1.7-.6s.9-.7,1.1-1.2.4-1.1.4-1.8c0-1.4-.5-2.3-1.4-2.9s-2.3-.8-4-.8Z"
          className={"minioApplicationName"}
        />
        <path
          d="m73.8,23.5h8.6c2.5,0,4.3.5,5.6,1.6,1.3,1.1,2,2.6,2,4.6s-.7,3.4-2,4.5c-1.4,1.1-3.2,1.7-5.5,1.7h-.4l7.8,9.5h-3.1l-7.7-9.6h-2.8v9.5h-2.5v-21.8Zm8.5,2.4h-6v7.7h6c1.7,0,2.9-.3,3.8-1s1.3-1.6,1.3-2.9-.4-2.2-1.3-2.8-2.1-1-3.8-1Z"
          className={"minioApplicationName"}
        />
        <path
          d="m104.9,23.2c2.1,0,4.1.5,5.8,1.4,1.7,1,3.1,2.3,4,4,1,1.7,1.5,3.6,1.5,5.8s-.5,4.1-1.5,5.8-2.3,3-4,4-3.6,1.4-5.8,1.4c-1.6,0-3.1-.3-4.5-.8-1.4-.6-2.6-1.3-3.6-2.3s-1.8-2.2-2.3-3.6c-.6-1.4-.9-2.9-.9-4.5s.3-3.1.9-4.5,1.4-2.6,2.3-3.6c1-1,2.2-1.8,3.6-2.3s2.9-.8,4.5-.8Zm0,2.4c-1.2,0-2.4.2-3.4.6-1.1.4-2,1-2.7,1.8-.8.8-1.4,1.7-1.8,2.8-.4,1.1-.7,2.3-.7,3.6s.2,2.5.7,3.6c.4,1.1,1,2,1.8,2.8s1.7,1.4,2.7,1.8c1.1.4,2.2.6,3.4.6,1.6,0,3.1-.4,4.4-1.1,1.3-.7,2.3-1.8,3.1-3.1s1.1-2.9,1.1-4.6-.4-3.2-1.1-4.6-1.8-2.4-3.1-3.1c-1.3-.7-2.8-1.1-4.4-1.1Z"
          className={"minioApplicationName"}
        />
        <path
          d="m135.9,45.3l-9.6-9.8h-2.6v9.8h-2.5v-21.8h2.5v9.7h2.6l9.1-9.7h3.2l-10.3,10.7,10.9,11.1h-3.3Z"
          className={"minioApplicationName"}
        />
        <path
          d="m158.2,43v2.4h-15.4v-21.9h15.2v2.4h-12.7v7.3h12.3v2.3h-12.3v7.5h12.9Z"
          className={"minioApplicationName"}
        />
        <path
          d="m163.8,23.5h8.6c2.5,0,4.3.5,5.6,1.6s2,2.6,2,4.6-.7,3.4-2,4.5c-1.4,1.1-3.2,1.7-5.5,1.7h-.4l7.8,9.5h-3.1l-7.7-9.5h-2.8v9.5h-2.5v-21.9Zm8.6,2.4h-6v7.7h6c1.7,0,2.9-.3,3.8-1s1.3-1.6,1.3-2.9-.4-2.2-1.3-2.8-2.2-1-3.8-1Z"
          className={"minioApplicationName"}
        />
      </g>
    </LogoBase>
  );
};

export default VMBroker;
