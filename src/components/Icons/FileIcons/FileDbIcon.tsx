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

const FileDbIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g id="a">
      <g transform="translate(505.005 -4637.798)">
        <path
          d="M188.5,255.932H14.5A14.5,14.5,0,0,1,0,241.432V14.5A14.5,14.5,0,0,1,14.5,0H128.834l.192.265L203,74.279V241.432a14.5,14.5,0,0,1-14.5,14.5Z"
          transform="translate(-479.005 4637.867)"
          fill="#da367d"
        />
        <path
          d="M83.175,74.189h64.8L73.787,0V64.787a10.155,10.155,0,0,0,9.388,9.4"
          transform="translate(-424.321 4637.798)"
          fill="#ed609d"
        />
        <path
          d="M43.306,43.306a122.175,122.175,0,0,0,24.981-2.425q11.617-2.425,18.326-7.16v9.585q0,3.89-5.807,7.216T65.017,55.794a113.584,113.584,0,0,1-21.708,1.945A113.584,113.584,0,0,1,21.6,55.794Q11.62,53.849,5.807,50.523T0,43.306V33.718q6.711,4.738,18.326,7.16A122.412,122.412,0,0,0,43.306,43.3Zm0,43.306a122.175,122.175,0,0,0,24.981-2.425q11.617-2.425,18.326-7.16v9.585q0,3.89-5.807,7.216T65.017,99.1a113.583,113.583,0,0,1-21.708,1.945A113.583,113.583,0,0,1,21.6,99.1Q11.62,97.155,5.813,93.829T0,86.61V77.024q6.711,4.738,18.326,7.16A122.412,122.412,0,0,0,43.306,86.61Zm0-21.652a122.176,122.176,0,0,0,24.981-2.425q11.617-2.425,18.326-7.16v9.585q0,3.89-5.807,7.216T65.017,77.448a113.583,113.583,0,0,1-21.708,1.945A113.583,113.583,0,0,1,21.6,77.448Q11.62,75.5,5.813,72.177T0,64.958V55.373q6.711,4.738,18.326,7.16a122.412,122.412,0,0,0,24.981,2.425ZM43.306,0A113.556,113.556,0,0,1,65.014,1.945Q74.992,3.89,80.8,7.216t5.807,7.216v7.216q0,3.89-5.807,7.216T65.014,34.136a113.87,113.87,0,0,1-21.708,1.951A112.984,112.984,0,0,1,21.6,34.142q-9.981-1.951-15.791-5.271T0,21.652V14.435q0-3.89,5.807-7.216T21.6,1.948A113.743,113.743,0,0,1,43.306,0Z"
          transform="translate(-423.358 4740.307)"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);

export default FileDbIcon;
