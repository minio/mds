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

const BedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.3333 1.96666C1.7199 1.96666 2.0333 2.28006 2.0333 2.66666V4.63333H13.3333C13.8726 4.63333 14.3898 4.84755 14.7711 5.22888C15.1524 5.6102 15.3666 6.12739 15.3666 6.66666V13.3333C15.3666 13.7199 15.0532 14.0333 14.6666 14.0333C14.28 14.0333 13.9666 13.7199 13.9666 13.3333V12.0333H2.0333V13.3333C2.0333 13.7199 1.7199 14.0333 1.3333 14.0333C0.946701 14.0333 0.633301 13.7199 0.633301 13.3333V2.66666C0.633301 2.28006 0.946701 1.96666 1.3333 1.96666ZM2.0333 6.03333V10.6333H3.29997V6.03333H2.0333ZM4.69997 6.03333V10.6333H13.9666V6.66666C13.9666 6.49869 13.8999 6.3376 13.7811 6.21883C13.6624 6.10005 13.5013 6.03333 13.3333 6.03333H4.69997Z"
      fill="currentColor"
    />
  </svg>
);
export default BedIcon;
