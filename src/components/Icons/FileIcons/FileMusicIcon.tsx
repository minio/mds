// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

import * as React from "react";
import { SVGProps } from "react";

const FileMusicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(4890 -5423.044)">
      <path
        d="M188.5,255.978H14.5A14.5,14.5,0,0,1,0,241.478V14.5A14.5,14.5,0,0,1,14.5,0H128.834l.192.265L203,74.292V241.478a14.5,14.5,0,0,1-14.5,14.5Z"
        transform="translate(-4864 5423.07)"
        fill="#0f86cd"
      />
      <path
        d="M83.177,74.2h64.814L73.787,0V64.8a10.157,10.157,0,0,0,9.39,9.4"
        transform="translate(-4809.328 5423.044)"
        fill="#3ba6e6"
      />
      <path
        d="M106.386,4.909H33.428a4.559,4.559,0,0,0-4.555,4.555V78.006a23.456,23.456,0,0,0-5.05-.562c-10.631,0-19.25,6.983-19.25,15.6s8.619,15.594,19.25,15.594,19.25-6.983,19.25-15.594V27.2H96.75V64.84a23.456,23.456,0,0,0-5.05-.562c-10.631,0-19.25,6.983-19.25,15.6S81.069,95.469,91.7,95.469s19.25-6.983,19.25-15.594V9.464A4.559,4.559,0,0,0,106.39,4.9Z"
        transform="translate(-4825.479 5534.429)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default FileMusicIcon;
