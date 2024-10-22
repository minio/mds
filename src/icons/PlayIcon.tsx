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

import * as React from "react";
import { SVGProps } from "react";

const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.66462 1.38565C3.88937 1.26295 4.16318 1.27276 4.37858 1.41122L13.7119 7.41122C13.9123 7.54003 14.0334 7.76187 14.0334 8.00005C14.0334 8.23823 13.9123 8.46007 13.7119 8.58887L4.37858 14.5889C4.16318 14.7273 3.88937 14.7372 3.66462 14.6144C3.43987 14.4917 3.30005 14.2561 3.30005 14V2.00005C3.30005 1.74398 3.43987 1.50835 3.66462 1.38565ZM4.70005 3.28222V12.7179L12.0389 8.00005L4.70005 3.28222Z"
      fill="currentColor"
    />
  </svg>
);
export default PlayIcon;
