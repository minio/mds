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

const PieUsageIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50503 0.838357C7.6363 0.707081 7.81435 0.633331 8 0.633331C8.9674 0.633331 9.92534 0.823876 10.8191 1.19409C11.7129 1.5643 12.525 2.10692 13.209 2.79098C13.8931 3.47504 14.4357 4.28713 14.8059 5.1809C15.1761 6.07466 15.3667 7.03259 15.3667 8C15.3667 8.3866 15.0533 8.7 14.6667 8.7H8C7.6134 8.7 7.3 8.3866 7.3 8V1.33333C7.3 1.14768 7.37375 0.969632 7.50503 0.838357ZM8.7 2.07453V7.3H13.9255C13.8613 6.75686 13.7226 6.22399 13.5125 5.71665C13.2126 4.99274 12.7731 4.33498 12.2191 3.78093C11.665 3.22687 11.0073 2.78737 10.2833 2.48752C9.77601 2.27737 9.24314 2.1387 8.7 2.07453ZM5.97491 1.60669C6.12953 1.96102 5.96764 2.37361 5.61331 2.52824C4.72002 2.91805 3.93583 3.52075 3.32929 4.28365C2.72275 5.04655 2.31233 5.94641 2.1339 6.90457C1.95548 7.86273 2.01448 8.85001 2.30576 9.78009C2.59704 10.7102 3.11173 11.5548 3.80482 12.24C4.49791 12.9252 5.34831 13.4302 6.28166 13.7108C7.21501 13.9915 8.2029 14.0392 9.15896 13.8499C10.115 13.6605 11.0101 13.2398 11.7661 12.6246C12.522 12.0094 13.1157 11.2184 13.4953 10.3207C13.6458 9.96463 14.0566 9.79804 14.4126 9.9486C14.7687 10.0992 14.9353 10.5099 14.7847 10.866C14.3161 11.9743 13.5831 12.9509 12.6498 13.7105C11.7165 14.47 10.6113 14.9894 9.43096 15.2232C8.25057 15.457 7.03089 15.398 5.87854 15.0515C4.72618 14.7051 3.67626 14.0816 2.82054 13.2356C1.96482 12.3896 1.32937 11.3468 0.969749 10.1985C0.610124 9.05018 0.537272 7.83125 0.757562 6.64827C0.977852 5.46529 1.48458 4.35429 2.23344 3.41239C2.98229 2.47049 3.95048 1.72637 5.05336 1.24509C5.40769 1.09047 5.82028 1.25236 5.97491 1.60669Z"
      fill="currentColor"
    />
  </svg>
);
export default PieUsageIcon;
