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

const StampIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.1106 1.31857C6.6277 0.841981 7.31005 0.633301 8 0.633301C8.71608 0.633301 9.40284 0.917764 9.90919 1.42411C10.4155 1.93046 10.7 2.61722 10.7 3.3333C10.7 4.15661 10.4815 4.60985 10.2744 4.97226C10.263 4.9922 10.2521 5.01127 10.2416 5.02958C10.0956 5.28376 10.0333 5.39213 10.0333 5.66663V7.96663H11.6663M5.96666 7.96663V5.66663C5.96666 5.39213 5.90442 5.28376 5.75842 5.02958C5.74791 5.01127 5.73696 4.9922 5.72556 4.97226C5.51847 4.60985 5.3 4.15661 5.3 3.3333C5.3 2.50158 5.58414 1.80379 6.1106 1.31857M4.33333 9.36663C4.07696 9.36663 3.83108 9.46848 3.64979 9.64976C3.46851 9.83105 3.36666 10.0769 3.36666 10.3333V11.3H12.6333V10.3333C12.6333 10.0762 12.5318 9.8287 12.3522 9.64876C12.2623 9.55912 12.1556 9.48806 12.0382 9.43965C11.9208 9.39122 11.7949 9.36641 11.6679 9.36663L4.33333 9.36663ZM8.63333 7.96663V5.66663C8.63333 5.01169 8.85881 4.62294 9.02216 4.34131C9.03482 4.31948 9.04711 4.29829 9.05889 4.27767C9.18513 4.05675 9.3 3.84332 9.3 3.3333C9.3 2.98852 9.16303 2.65786 8.91924 2.41406C8.67544 2.17026 8.34478 2.0333 8 2.0333C7.58328 2.0333 7.26563 2.15795 7.0594 2.34803C6.86252 2.52948 6.7 2.83169 6.7 3.3333C6.7 3.84332 6.81486 4.05675 6.9411 4.27767C6.95288 4.29829 6.96517 4.31948 6.97784 4.34131C7.14118 4.62294 7.36666 5.01169 7.36666 5.66663V7.96663H8.63333ZM2.63333 14.6666C2.63333 14.28 2.94673 13.9666 3.33333 13.9666H12.6667C13.0533 13.9666 13.3667 14.28 13.3667 14.6666C13.3667 15.0532 13.0533 15.3666 12.6667 15.3666H3.33333C2.94673 15.3666 2.63333 15.0532 2.63333 14.6666Z"
      fill="currentColor"
    />
  </svg>
);
export default StampIcon;
