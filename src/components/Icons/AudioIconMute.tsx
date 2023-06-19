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

import React, { SVGProps } from "react";

const AudioIconMute = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`min-icon`}
      fill={"currentcolor"}
      {...props}
      viewBox="0 0 256 256"
    >
      <g id="a">
        <g>
          <path d="m178.39,178.92l-18.83-19.27c-3.23-3.27-3.23-8.53,0-11.8l19.55-20.02-19.56-20.02c-3.23-3.27-3.23-8.53,0-11.8l18.75-19.19c3.26-3.34,8.6-3.4,11.94-.15.05.05.1.1.15.15l8.77,8.98v-38.85h0c0-5.07-4.13-9.17-9.2-9.17l-108.27,42.29c-5.02,1.99-9.2,4.1-9.2,9.17v84.57c0,5.06,1.95,6.42,9.2,9.16l108.27,35.25c5.07,0,9.19-4.09,9.2-9.17v-39.19l-8.77,8.98c-3.31,3.29-8.65,3.33-12,.08Z" />
          <rect
            x="2.17"
            y="81.37"
            width="54.63"
            height="101.16"
            rx="13"
            ry="13"
          />
        </g>
        <path d="m228.81,127.93l25.02-25.61-18.74-19.81-22.77,22.66-2.86,2.93-24.99-25.59-19.38,19.19,22.29,23.43,2.73,2.8-25.02,25.61,18.75,19.81,22.77-22.66,2.86-2.93,25,25.59.32.13c.12,0,.23-.05.32-.13l18.74-19.19-22.29-23.43-2.73-2.8Z" />
      </g>
    </svg>
  );
};

export default AudioIconMute;
