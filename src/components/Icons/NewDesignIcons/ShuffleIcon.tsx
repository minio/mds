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

const ShuffleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.505 0.838326C11.7784 0.564959 12.2216 0.564959 12.4949 0.838326L15.1616 3.50499C15.435 3.77836 15.435 4.22158 15.1616 4.49494L12.4949 7.16161C12.2216 7.43498 11.7784 7.43498 11.505 7.16161C11.2316 6.88824 11.2316 6.44503 11.505 6.17166L12.9767 4.69997H10.7333C10.0637 4.69997 9.44087 5.01096 9.12386 5.50911C9.11757 5.519 9.11104 5.52872 9.10426 5.53828L5.03279 11.2784C4.36865 12.1916 3.35882 12.7 2.26663 12.7H1.3333C0.946701 12.7 0.633301 12.3866 0.633301 12C0.633301 11.6134 0.946701 11.3 1.3333 11.3H2.26663C2.90657 11.3 3.49575 11.0095 3.89823 10.458L7.95287 4.74168C8.57118 3.78365 9.67539 3.29997 10.7333 3.29997H12.9767L11.505 1.82828C11.2316 1.55491 11.2316 1.11169 11.505 0.838326ZM0.633301 3.99997C0.633301 3.61337 0.946701 3.29997 1.3333 3.29997H2.59997C3.87525 3.29997 5.0362 4.05744 5.6163 5.13476C5.79958 5.47515 5.67223 5.89968 5.33184 6.08296C4.99145 6.26625 4.56692 6.13889 4.38364 5.7985C4.0304 5.1425 3.32469 4.69997 2.59997 4.69997H1.3333C0.946701 4.69997 0.633301 4.38657 0.633301 3.99997ZM11.505 8.83833C11.7784 8.56496 12.2216 8.56496 12.4949 8.83833L15.1616 11.505C15.435 11.7784 15.435 12.2216 15.1616 12.4949L12.4949 15.1616C12.2216 15.435 11.7784 15.435 11.505 15.1616C11.2316 14.8882 11.2316 14.445 11.505 14.1717L12.9767 12.7H10.7333C9.6318 12.7 8.54029 12.1148 7.94274 11.1758L7.93968 11.171L7.60637 10.6376C7.40147 10.3098 7.50113 9.87793 7.82897 9.67303C8.1568 9.46814 8.58867 9.5678 8.79357 9.89563L9.12525 10.4263C9.46141 10.9528 10.1023 11.3 10.7333 11.3H12.9767L11.505 9.82827C11.2316 9.55491 11.2316 9.11169 11.505 8.83833Z"
      fill="currentColor"
    />
  </svg>
);
export default ShuffleIcon;
