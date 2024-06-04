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

const SquareSigmaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM4.70247 4.36348C4.81903 4.12096 5.0643 3.96672 5.33338 3.96672H10.6667C11.0533 3.96672 11.3667 4.28012 11.3667 4.66672V5.93338C11.3667 6.31998 11.0533 6.63338 10.6667 6.63338C10.2801 6.63338 9.96672 6.31998 9.96672 5.93338V5.36672H6.78982L8.54666 7.56276C8.75118 7.81842 8.75118 8.18168 8.54666 8.43734L6.78982 10.6334H9.96672V10.0667C9.96672 9.68012 10.2801 9.36672 10.6667 9.36672C11.0533 9.36672 11.3667 9.68012 11.3667 10.0667V11.3334C11.3667 11.72 11.0533 12.0334 10.6667 12.0334H5.33338C5.0643 12.0334 4.81903 11.8791 4.70247 11.6366C4.58591 11.3941 4.61868 11.1062 4.78677 10.8961L7.10361 8.00005L4.78677 5.104C4.61868 4.89388 4.58591 4.60601 4.70247 4.36348Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareSigmaIcon;
