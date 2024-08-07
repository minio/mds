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

const ContainerImagesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.25572 1.18138C8.91507 0.769291 9.7517 0.769291 10.411 1.18138L14.411 3.68138C15.0056 4.05295 15.3667 4.70457 15.3667 5.40565V9.26099C15.3667 9.96206 15.0056 10.6137 14.411 10.9853L10.411 13.4853C9.7517 13.8973 8.91507 13.8973 8.25572 13.4853L3.94238 10.7894C3.5428 10.5397 3.30005 10.1017 3.30005 9.63049V5.40565C3.30005 4.70458 3.66121 4.05295 4.25572 3.68138L8.25572 1.18138ZM9.66905 2.36858C9.46368 2.24023 9.20309 2.24023 8.99772 2.36858L5.23153 4.72245L9.05755 7.01807L10.1444 6.39702L13.1689 4.556L9.66905 2.36858ZM4.70005 6.03623L8.63342 8.39625V12.0704L4.70005 9.61201V6.03623ZM11.3001 11.2787L10.0334 12.0703V8.07288L10.8474 7.60776L10.864 7.59793L11.3001 7.33251V11.2787ZM12.7001 10.4037V6.48034L13.9667 5.70935V9.26099C13.9667 9.47935 13.8542 9.68232 13.669 9.79805L12.7001 10.4037Z"
      fill="currentColor"
    />
    <path
      d="M2.70005 6.00005C2.70005 5.61345 2.38665 5.30005 2.00005 5.30005C1.61345 5.30005 1.30005 5.61345 1.30005 6.00005V10.6054C1.30005 11.2973 1.65186 11.9417 2.23384 12.3158L6.28818 14.9222C6.61338 15.1313 7.04648 15.0371 7.25554 14.7119C7.4646 14.3867 7.37044 13.9536 7.04525 13.7446L2.9909 11.1382C2.80963 11.0217 2.70005 10.8209 2.70005 10.6054V6.00005Z"
      fill="currentColor"
    />
  </svg>
);
export default ContainerImagesIcon;
