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

const TestTubeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.96667 1.3333C4.96667 0.946701 5.28008 0.633301 5.66667 0.633301H10.3333C10.7199 0.633301 11.0333 0.946701 11.0333 1.3333C11.0333 1.70873 10.7378 2.01512 10.3667 2.03252V13C10.3667 14.3199 9.31994 15.3666 8.00001 15.3666C6.68008 15.3666 5.63334 14.3199 5.63334 13V2.03252C5.26222 2.01512 4.96667 1.70873 4.96667 1.3333ZM7.03334 2.0333V9.96663H8.96667V2.0333H7.03334ZM8.96667 11.3666H7.03334V13C7.03334 13.5467 7.45327 13.9666 8.00001 13.9666C8.54674 13.9666 8.96667 13.5467 8.96667 13V11.3666Z"
      fill="currentColor"
    />
  </svg>
);
export default TestTubeIcon;
