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

const ObjectManagerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className={`min-icon`}
      fill={"currentcolor"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <g>
        <path d="M216,169H83.14a34,34,0,0,1-24.09-10.15L9.56,108A33.56,33.56,0,0,1,9.56,61L59,10.1A33.91,33.91,0,0,1,83.13,0H216a33.68,33.68,0,0,1,33.65,33.65V135.37A33.68,33.68,0,0,1,216,169M83.14,9A24.93,24.93,0,0,0,65.5,16.42L16,67.36a24.54,24.54,0,0,0,0,34.29l49.5,50.92A24.91,24.91,0,0,0,83.12,160H216a24.64,24.64,0,0,0,24.66-24.62V33.65A24.64,24.64,0,0,0,216,9H83.14Z" />
        <path d="M162.57,96h0a7.23,7.23,0,1,1-10,10.46l-.2-.24L138.78,92.68l-13.54,13.57a7.21,7.21,0,1,1-10.79-9.58c.12-.14.25-.27.38-.4l.24-.24,13.56-13.55L115.09,68.94a7.22,7.22,0,0,1,10.17-10.21l13.59,13.58,13.54-13.58a7.22,7.22,0,0,1,10.18,10.21L149,82.48Z" />
      </g>
    </svg>
  );
};

export default ObjectManagerIcon;
