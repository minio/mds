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

const ShuffleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M93.9,204l30.9-30.9l30.9,30.9l13.4-13.4l-30.9-30.9l30.9-30.9l-13.4-13.4l-30.9,30.9l-30.9-30.9l-13.4,13.4l30.9,30.9
        l-30.9,30.9L93.9,204z M216.7,26.6H204V1.3h-25.3v25.3H77.3V1.3H52v25.3H39.3C25.2,26.6,14.1,38,14.1,52l-0.1,177.4
        c0,13.9,11.3,25.3,25.3,25.3h177.4c13.9,0,25.3-11.4,25.3-25.3V52C242.1,38,230.6,26.6,216.7,26.6z M216.7,229.4H39.3V90h177.4
        V229.4z"
    />
  </svg>
);

export default ShuffleIcon;
