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

const DiscAlbumIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.69999C2.9836 2.69999 2.70005 2.98354 2.70005 3.33332V12.6667C2.70005 13.0164 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0164 13.3 12.6667V3.33332C13.3 2.98354 13.0165 2.69999 12.6667 2.69999H3.33338ZM1.30005 3.33332C1.30005 2.21034 2.2104 1.29999 3.33338 1.29999H12.6667C13.7897 1.29999 14.7 2.21034 14.7 3.33332V12.6667C14.7 13.7896 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7896 1.30005 12.6667V3.33332ZM8.00005 5.36665C6.5457 5.36665 5.36672 6.54564 5.36672 7.99999C5.36672 9.45434 6.5457 10.6333 8.00005 10.6333C9.4544 10.6333 10.6334 9.45434 10.6334 7.99999C10.6334 6.54564 9.4544 5.36665 8.00005 5.36665ZM3.96672 7.99999C3.96672 5.77244 5.7725 3.96665 8.00005 3.96665C10.2276 3.96665 12.0334 5.77244 12.0334 7.99999C12.0334 10.2275 10.2276 12.0333 8.00005 12.0333C5.7725 12.0333 3.96672 10.2275 3.96672 7.99999ZM7.30005 7.99999C7.30005 7.61339 7.61345 7.29999 8.00005 7.29999H8.00672C8.39331 7.29999 8.70672 7.61339 8.70672 7.99999C8.70672 8.38659 8.39331 8.69999 8.00672 8.69999H8.00005C7.61345 8.69999 7.30005 8.38659 7.30005 7.99999Z"
      fill="currentColor"
    />
  </svg>
);
export default DiscAlbumIcon;
