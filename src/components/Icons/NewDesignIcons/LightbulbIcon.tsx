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

const LightbulbIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.67665 2.00996C5.55807 1.12854 6.75353 0.633362 8.00005 0.633362C9.24657 0.633362 10.442 1.12854 11.3235 2.00996C12.2049 2.89138 12.7 4.08684 12.7 5.33336C12.7 6.36695 12.3051 7.42561 11.483 8.17372C11.0042 8.65449 10.7805 9.00049 10.6865 9.47064C10.6106 9.84973 10.2419 10.0956 9.86277 10.0198C9.48368 9.94395 9.23782 9.57517 9.31364 9.19608C9.4855 8.33682 9.92547 7.75133 10.5051 7.17172C10.5138 7.16304 10.5227 7.1546 10.5318 7.14639C11.0331 6.69523 11.3 6.02698 11.3 5.33336C11.3 4.45815 10.9524 3.61878 10.3335 2.99991C9.71463 2.38104 8.87526 2.03336 8.00005 2.03336C7.12483 2.03336 6.28547 2.38104 5.6666 2.99991C5.04773 3.61878 4.70005 4.45815 4.70005 5.33336C4.70005 5.863 4.79043 6.46712 5.49502 7.17172C6.00105 7.67775 6.51342 8.33089 6.68646 9.19608C6.76227 9.57517 6.51642 9.94395 6.13733 10.0198C5.75824 10.0956 5.38946 9.84973 5.31364 9.47064C5.22001 9.0025 4.93238 8.58897 4.50507 8.16167C3.47634 7.13293 3.30005 6.13705 3.30005 5.33336C3.30005 4.08684 3.79523 2.89138 4.67665 2.00996ZM5.30005 12C5.30005 11.6134 5.61345 11.3 6.00005 11.3H10C10.3866 11.3 10.7 11.6134 10.7 12C10.7 12.3866 10.3866 12.7 10 12.7H6.00005C5.61345 12.7 5.30005 12.3866 5.30005 12ZM5.96672 14.6667C5.96672 14.2801 6.28012 13.9667 6.66672 13.9667H9.33338C9.71998 13.9667 10.0334 14.2801 10.0334 14.6667C10.0334 15.0533 9.71998 15.3667 9.33338 15.3667H6.66672C6.28012 15.3667 5.96672 15.0533 5.96672 14.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default LightbulbIcon;
