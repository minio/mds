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

const AIStor: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 393.6 51" inverse={inverse} onClick={onClick}>
      <g>
        <g id="Layer_1">
          <g>
            <path
              className={"minioApplicationName"}
              d="M285.6.8c7.5,0,14.8,1.1,21.5,4.6,4.5,2.4,8.5,5.4,10.9,10.1,3.9,7.8,3.6,19.2-5.5,26.5-5.4,4.3-11.6,6.6-18.3,7.5-7.6,1-15.2.8-22.6-1.1-5.9-1.5-11.2-4.2-15.3-8.7-4.2-4.6-5.7-10.1-5.2-16.2.6-7.8,4.8-13.3,11.4-17.2,5.5-3.2,11.4-4.7,17.7-5.2,1.8-.1,3.7-.2,5.5-.3ZM285.3,40.3c.7,0,1.4,0,2.2,0,5.2-.3,9.9-1.6,14-5,6.4-5.4,6-18.2-3.1-22.1-8.4-3.5-16.7-3.6-25.1-.3-4.8,1.9-7.6,5.4-8.1,10.5-.6,5.3,1.2,9.7,5.6,12.8,4.4,3.1,9.3,4.1,14.6,4Z"
            />
            <path
              className={"minioApplicationName"}
              d="M181.9,7c-1.4,3-2.8,5.9-4.3,8.9-1.5-.6-2.8-1.1-4.2-1.6-8.7-3.2-17.6-4.6-26.8-3-1.5.3-3,.8-4.3,1.6-1.8,1.1-1.6,3,.2,4.1,2,1.1,4.2,1.5,6.4,1.8,6.3.7,12.6,1.4,18.9,2.3,3.4.5,6.7,1.5,9.8,3.1,6.9,3.6,8.5,11.8,3.4,17.7-2.8,3.2-6.4,5.1-10.4,6.2-12.3,3.2-24.6,3.1-36.7-1.4-3.1-1.2-5.9-2.9-8.6-5.1,2.1-2.5,4.2-4.9,6.3-7.3.1-.2.8,0,1.1.1,4,2.3,8.1,4,12.6,5,6.6,1.4,13.2,1.3,19.7-.2,1.3-.3,2.5-1,3.6-1.8,2-1.5,1.6-3.8-.7-4.5-3.1-.9-6.3-1.7-9.5-2.2-5.7-.8-11.5-1.3-17.2-2.1-2.9-.4-5.6-1.5-8.2-2.9-7.6-4.3-8.2-13.4-1.2-18.8,4-3,8.5-4.5,13.4-5.2,9.3-1.4,18.6-1,27.6,1.8,2.7.8,5.3,2,7.9,3.1.3.1.6.3,1,.6Z"
            />
            <path
              className={"minioApplicationName"}
              d="M345,49.1h-13.4v-1.2c0-14.9,0-29.9,0-44.8,0-1,.2-1.4,1.3-1.3,11.4.1,22.8.2,34.3.3,5.1,0,10,1.1,14.4,3.8,8.2,5.1,8.4,16,.4,21.4-3.5,2.3-7.3,3.5-11.4,4-.5,0-.9.1-1.5.4,7.5,5.7,15,11.5,22.6,17.2,0,0,0,.2-.1.2-.4,0-.7,0-1.1,0-5.3,0-10.6,0-15.9,0-.5,0-1.2-.2-1.5-.5-7.2-6.4-14.3-12.8-21.5-19.2-.5-.5-1-1-1.5-1.5-.6-.7-1-1.6-.4-2.3.5-.6,1.3-1.1,2-1.2,2.7-.2,5.4,0,8.1-.1,2.5,0,5,0,7.5-.4,1.5-.2,3.1-1,4.5-1.8,2.8-1.7,3.4-7-.7-9-2.1-1.1-4.4-1.5-6.8-1.6-5.9-.1-11.8,0-17.7-.2-1.1,0-1.4.3-1.4,1.4,0,11.6,0,23.2,0,34.8,0,.5,0,1,0,1.5Z"
            />
            <path
              className={"minioApplicationName"}
              d="M70,49.2h-7.6c-1.9,0-3.9,0-5.8,0-.9,0-1.2-.3-1.6-1-6.1-12.7-12.3-25.3-18.5-38-.2-.3-.3-.7-.6-1.2-4.1,8.5-8.1,16.9-12.3,25.6,1.8-.2,3.3-.4,4.8-.7,3.3-.5,6.6-1,9.9-1.5,2-.3,4.1,2.1,3.5,4-.2.5-.7.9-1.2,1.2-6,3.1-12.1,6.1-18.1,9.2-.9.4-1.8.8-2.6,1.3-1.6.9-3.2,1.3-5.1,1.2-3.9-.1-7.7-.1-11.6-.2-.3,0-.6,0-1.1,0,.2-.5.4-.9.6-1.3,7.8-14.9,15.6-29.9,23.4-44.8.5-1,1.3-1.5,2.4-1.4,5,0,9.9,0,14.9,0,1.2,0,1.9.4,2.5,1.5,7.8,14.9,15.7,29.7,23.5,44.6.2.4.4.8.7,1.4Z"
            />
            <path
              className={"minioApplicationName"}
              d="M248.2,11.5h-23.5v37.5h-13.4V11.5h-23.5V1.9h60.4v9.6Z"
            />
            <path
              className={"minioApplicationName"}
              d="M77.5,1.8h13.2v47.2h-13.2V1.8Z"
            />
            <path
              className={"minioSection"}
              d="M100.5,10.4c0-1.9,0-3.7,0-5.6,0-1.9,1.2-3.1,3.1-3.1,4.9,0,9.8,0,14.7,0,1.1,0,2,.4,2.4,1.5.4,1.1,0,2.1-.9,2.8-5.2,4.1-10.4,8.1-15.5,12.2-.8.6-1.7.7-2.6.3-.9-.4-1.3-1.2-1.3-2.2,0-2,0-3.9,0-5.9Z"
            />
          </g>
        </g>
      </g>
    </LogoBase>
  );
};

export default AIStor;
