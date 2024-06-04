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

const OctagonPauseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.64766 0.838326C4.77893 0.707051 4.95698 0.633301 5.14263 0.633301H10.8573C11.043 0.633301 11.221 0.707051 11.3523 0.838326L15.1616 4.64766C15.2929 4.77893 15.3666 4.95698 15.3666 5.14263V10.8573C15.3666 11.043 15.2929 11.221 15.1616 11.3523L11.3523 15.1616C11.221 15.2929 11.043 15.3666 10.8573 15.3666H5.14263C4.95698 15.3666 4.77893 15.2929 4.64766 15.1616L0.838326 11.3523C0.707051 11.221 0.633301 11.043 0.633301 10.8573V5.14263C0.633301 4.95698 0.707051 4.77893 0.838326 4.64766L4.64766 0.838326ZM5.43258 2.0333L2.0333 5.43258V10.5674L5.43258 13.9666H10.5674L13.9666 10.5674V5.43258L10.5674 2.0333H5.43258ZM6.66663 5.29997C7.05323 5.29997 7.36663 5.61337 7.36663 5.99997V9.99997C7.36663 10.3866 7.05323 10.7 6.66663 10.7C6.28003 10.7 5.96663 10.3866 5.96663 9.99997V5.99997C5.96663 5.61337 6.28003 5.29997 6.66663 5.29997ZM9.3333 5.29997C9.7199 5.29997 10.0333 5.61337 10.0333 5.99997V9.99997C10.0333 10.3866 9.7199 10.7 9.3333 10.7C8.9467 10.7 8.6333 10.3866 8.6333 9.99997V5.99997C8.6333 5.61337 8.9467 5.29997 9.3333 5.29997Z"
      fill="currentColor"
    />
  </svg>
);
export default OctagonPauseIcon;
