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

const SquareUserRoundIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33333 2.70005C2.98355 2.70005 2.7 2.9836 2.7 3.33338V12.6667C2.7 13.0165 2.98355 13.3 3.33333 13.3H3.3524C3.50112 12.3126 3.96188 11.3914 4.6766 10.6766C5.00392 10.3493 5.37454 10.0753 5.77501 9.86007C5.07496 9.24313 4.63333 8.33983 4.63333 7.33338C4.63333 5.47402 6.14064 3.96672 8 3.96672C9.85936 3.96672 11.3667 5.47402 11.3667 7.33338C11.3667 8.33983 10.925 9.24313 10.225 9.86007C10.6255 10.0753 10.9961 10.3493 11.3234 10.6766C12.0381 11.3914 12.4989 12.3126 12.6476 13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H3.33333ZM12.6667 14.7C13.7896 14.7 14.7 13.7897 14.7 12.6667V3.33338C14.7 2.2104 13.7896 1.30005 12.6667 1.30005H3.33333C2.21035 1.30005 1.3 2.2104 1.3 3.33338V12.6667C1.3 13.7897 2.21035 14.7 3.33333 14.7H12.6667ZM11.2249 13.3C11.0916 12.6861 10.7846 12.1177 10.3335 11.6666C9.71458 11.0477 8.87521 10.7 8 10.7C7.12478 10.7 6.28542 11.0477 5.66655 11.6666C5.2154 12.1177 4.90837 12.6861 4.77508 13.3H11.2249ZM8 9.30005C9.08616 9.30005 9.96667 8.41954 9.96667 7.33338C9.96667 6.24722 9.08616 5.36672 8 5.36672C6.91384 5.36672 6.03333 6.24722 6.03333 7.33338C6.03333 8.41954 6.91384 9.30005 8 9.30005Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareUserRoundIcon;
