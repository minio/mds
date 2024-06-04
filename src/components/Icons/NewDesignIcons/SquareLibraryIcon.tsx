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

const SquareLibraryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM9.86277 3.98031C10.2419 3.90449 10.6106 4.15034 10.6865 4.52943L12.0198 11.1961C12.0956 11.5752 11.8498 11.944 11.4707 12.0198C11.0916 12.0956 10.7228 11.8498 10.647 11.4707L9.31364 4.804C9.23782 4.42491 9.48368 4.05613 9.86277 3.98031ZM4.66672 3.96672C5.05331 3.96672 5.36672 4.28012 5.36672 4.66672V11.3334C5.36672 11.72 5.05331 12.0334 4.66672 12.0334C4.28012 12.0334 3.96672 11.72 3.96672 11.3334V4.66672C3.96672 4.28012 4.28012 3.96672 4.66672 3.96672ZM7.33338 3.96672C7.71998 3.96672 8.03338 4.28012 8.03338 4.66672V11.3334C8.03338 11.72 7.71998 12.0334 7.33338 12.0334C6.94678 12.0334 6.63338 11.72 6.63338 11.3334V4.66672C6.63338 4.28012 6.94678 3.96672 7.33338 3.96672Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareLibraryIcon;
