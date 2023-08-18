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

const EurekaNew: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 149.615 41.178" inverse={inverse} onClick={onClick}>
      <g>
        <g>
          <path
            d="M160.647,103.275c0,7.069-4.512,10.667-11.014,10.667s-11.015-3.6-11.015-10.667V87.913h5.115v15.106c0,4.2,2.375,6.046,5.9,6.046s5.9-1.845,5.9-6.046V87.913h5.115Z"
            transform="translate(-114.732 -72.764)"
            className={"minioApplicationName"}
          />
          <path
            d="M303.977,87.912c6.1,0,9.371,2.886,9.371,7.782,0,4.2-2.923,7.069-7.836,7.544l7.873,10.247H307.21l-7.453-10.174h-1.5v10.174h-5.1V87.912Zm-5.717,4.694v6.265h5.626c2.776,0,4.219-1.023,4.219-3.178,0-2.119-1.516-3.087-4.219-3.087Z"
            transform="translate(-242.646 -72.763)"
            className={"minioApplicationName"}
          />
          <path
            d="M580.983,102.964h-2.356v10.521h-5.1V87.913h5.1V98.269h2.411l8.457-10.357h6.393l-10.722,12.476,11.526,13.1h-6.612Z"
            transform="translate(-474.701 -72.764)"
            className={"minioApplicationName"}
          />
          <path
            d="M742.783,113.485h-5.443l-2.229-5.955h-10.9l-2.228,5.955h-5.316l9.955-25.573h6.211ZM725.96,102.835h7.4l-3.69-9.882Z"
            transform="translate(-593.168 -72.763)"
            className={"minioApplicationName"}
          />
        </g>
      </g>
      <rect
        width="2.55"
        height="7.53"
        transform="translate(14.769 0.132)"
        className={"minioSection"}
      />
      <g>
        <g>
          <path
            d="M11.678.866,6.5,4.027a.231.231,0,0,1-.241,0L1.087.866a.709.709,0,0,0-.371-.1H.71a.71.71,0,0,0-.71.71V8.284H2.549V5.042a.255.255,0,0,1,.388-.218L5.837,6.6a.908.908,0,0,0,.934.009l3.061-1.8a.255.255,0,0,1,.383.22V8.284h2.548V1.472a.709.709,0,0,0-.709-.71h-.007a.71.71,0,0,0-.37.1"
            transform="translate(0 -0.631)"
            className={"minioSection"}
          />
          <path
            d="M122.847.764h-2.586V4.191a.255.255,0,0,1-.375.225l-6.7-3.569a.713.713,0,0,0-.334-.083h0a.71.71,0,0,0-.71.71V8.286H114.7V4.862a.255.255,0,0,1,.374-.225L121.8,8.206a.71.71,0,0,0,1.043-.627Z"
            transform="translate(-92.813 -0.632)"
            className={"minioSection"}
          />
          <rect
            width="1.173"
            height="7.53"
            transform="translate(32.039 0.132)"
            className={"minioSection"}
          />
          <path
            d="M206.895,7.8c-3.156,0-5.4-1.5-5.4-3.9s2.253-3.9,5.4-3.9S212.3,1.5,212.3,3.9s-2.212,3.9-5.409,3.9m0-6.8c-2.347,0-4.155,1.025-4.155,2.9s1.808,2.9,4.155,2.9,4.169-1.012,4.169-2.9S209.241,1,206.895,1Z"
            transform="translate(-166.777)"
            className={"minioSection"}
          />
          <rect
            width="19.062"
            height="5.016"
            transform="translate(0 15.046)"
            className={"minioApplicationName"}
          />
          <rect
            width="16.044"
            height="5.016"
            transform="translate(0 26.082)"
            className={"minioApplicationName"}
          />
          <rect
            width="19.062"
            height="5.016"
            transform="translate(0 36.114)"
            className={"minioApplicationName"}
          />
          <rect
            width="19.062"
            height="5.016"
            transform="translate(75.301 15.046)"
            className={"minioApplicationName"}
          />
          <rect
            width="16.044"
            height="5.016"
            transform="translate(75.301 26.082)"
            className={"minioApplicationName"}
          />
          <rect
            width="19.062"
            height="5.016"
            transform="translate(75.301 36.114)"
            className={"minioApplicationName"}
          />
        </g>
      </g>
    </LogoBase>
  );
};

export default EurekaNew;
