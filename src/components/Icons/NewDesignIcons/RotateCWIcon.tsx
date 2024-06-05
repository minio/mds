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

const RotateCWIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00005 2.70005C6.95181 2.70005 5.92711 3.01089 5.05553 3.59326C4.18395 4.17563 3.50463 5.00338 3.10349 5.97183C2.70235 6.94027 2.59739 8.00593 2.80189 9.03403C3.00639 10.0621 3.51117 11.0065 4.25239 11.7477C4.9936 12.4889 5.93797 12.9937 6.96607 13.1982C7.99417 13.4027 9.05983 13.2978 10.0283 12.8966C10.9967 12.4955 11.8245 11.8162 12.4068 10.9446C12.9892 10.073 13.3001 9.04829 13.3001 8.00005C13.3001 7.61345 13.6135 7.30005 14.0001 7.30005C14.3867 7.30005 14.7001 7.61345 14.7001 8.00005C14.7001 9.32518 14.3071 10.6206 13.5709 11.7224C12.8347 12.8242 11.7883 13.6829 10.564 14.19C9.33977 14.6971 7.99262 14.8298 6.69295 14.5713C5.39327 14.3128 4.19945 13.6747 3.26244 12.7377C2.32542 11.8007 1.68731 10.6068 1.42879 9.30715C1.17027 8.00748 1.30295 6.66033 1.81006 5.43607C2.31717 4.2118 3.17592 3.16541 4.27773 2.4292C5.37954 1.693 6.67492 1.30005 8.00005 1.30005C9.8661 1.30005 11.6452 2.04036 12.9785 3.32208L12.9885 3.33164L12.9884 3.33174L13.3001 3.64343V2.00005C13.3001 1.61345 13.6135 1.30005 14.0001 1.30005C14.3867 1.30005 14.7001 1.61345 14.7001 2.00005V5.33338C14.7001 5.71998 14.3867 6.03338 14.0001 6.03338H10.6667C10.2801 6.03338 9.96672 5.71998 9.96672 5.33338C9.96672 4.94678 10.2801 4.63338 10.6667 4.63338H12.3101L12.0034 4.32671C10.9239 3.2913 9.49177 2.70005 8.00005 2.70005Z"
      fill="currentColor"
    />
  </svg>
);
export default RotateCWIcon;
