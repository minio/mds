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

const TextSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.30005 4.00005C1.30005 3.61345 1.61345 3.30005 2.00005 3.30005H14C14.3866 3.30005 14.7 3.61345 14.7 4.00005C14.7 4.38665 14.3866 4.70005 14 4.70005H2.00005C1.61345 4.70005 1.30005 4.38665 1.30005 4.00005ZM1.30005 8.00005C1.30005 7.61345 1.61345 7.30005 2.00005 7.30005H6.66672C7.05331 7.30005 7.36672 7.61345 7.36672 8.00005C7.36672 8.38665 7.05331 8.70005 6.66672 8.70005H2.00005C1.61345 8.70005 1.30005 8.38665 1.30005 8.00005ZM11.3334 8.70005C10.6154 8.70005 10.0334 9.28208 10.0334 10C10.0334 10.718 10.6154 11.3 11.3334 11.3C11.6436 11.3 11.9285 11.1914 12.1519 11.01C12.1768 10.973 12.2057 10.9378 12.2384 10.9051C12.2712 10.8723 12.3063 10.8435 12.3434 10.8186C12.5247 10.5951 12.6334 10.3103 12.6334 10C12.6334 9.28208 12.0514 8.70005 11.3334 8.70005ZM13.6726 11.3493C13.9021 10.9523 14.0334 10.4915 14.0334 10C14.0334 8.50888 12.8246 7.30005 11.3334 7.30005C9.84221 7.30005 8.63338 8.50888 8.63338 10C8.63338 11.4912 9.84221 12.7 11.3334 12.7C11.8249 12.7 12.2857 12.5687 12.6826 12.3393L13.5051 13.1617C13.7784 13.4351 14.2217 13.4351 14.495 13.1617C14.7684 12.8883 14.7684 12.4451 14.495 12.1717L13.6726 11.3493ZM1.30005 12C1.30005 11.6134 1.61345 11.3 2.00005 11.3H6.66672C7.05331 11.3 7.36672 11.6134 7.36672 12C7.36672 12.3866 7.05331 12.7 6.66672 12.7H2.00005C1.61345 12.7 1.30005 12.3866 1.30005 12Z"
      fill="currentColor"
    />
  </svg>
);
export default TextSearchIcon;
