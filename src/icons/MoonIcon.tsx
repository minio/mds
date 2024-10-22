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

const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.52074 2.91062C6.00309 3.06109 5.50862 3.29045 5.05553 3.5932C4.18395 4.17557 3.50463 5.00332 3.10349 5.97177C2.70235 6.94021 2.59739 8.00587 2.80189 9.03397C3.00639 10.0621 3.51117 11.0064 4.25239 11.7477C4.9936 12.4889 5.93797 12.9936 6.96607 13.1982C7.99417 13.4027 9.05983 13.2977 10.0283 12.8966C10.9967 12.4954 11.8245 11.8161 12.4068 10.9445C12.7096 10.4914 12.939 9.99695 13.0894 9.4793C12.4413 9.78162 11.729 9.94263 11.0001 9.94263C9.68918 9.94263 8.432 9.42189 7.50508 8.49496C6.57815 7.56804 6.05741 6.31086 6.05741 4.99999C6.05741 4.27108 6.21842 3.55878 6.52074 2.91062ZM4.27773 2.42914C5.37954 1.69294 6.67492 1.29999 8.00005 1.29999C8.28318 1.29999 8.53842 1.47054 8.64677 1.73211C8.75511 1.99368 8.69523 2.29476 8.49503 2.49496C7.83065 3.15934 7.45741 4.06042 7.45741 4.99999C7.45741 5.93955 7.83065 6.84064 8.49503 7.50501C9.1594 8.16939 10.0605 8.54263 11.0001 8.54263C11.9396 8.54263 12.8407 8.16939 13.5051 7.50501C13.7053 7.30481 14.0064 7.24493 14.2679 7.35327C14.5295 7.46162 14.7001 7.71686 14.7001 7.99999C14.7001 9.32512 14.3071 10.6205 13.5709 11.7223C12.8347 12.8241 11.7883 13.6829 10.564 14.19C9.33977 14.6971 7.99262 14.8298 6.69295 14.5712C5.39327 14.3127 4.19945 13.6746 3.26244 12.7376C2.32542 11.8006 1.68731 10.6068 1.42879 9.30709C1.17027 8.00742 1.30295 6.66027 1.81006 5.43601C2.31717 4.21174 3.17592 3.16535 4.27773 2.42914Z"
      fill="currentColor"
    />
  </svg>
);
export default MoonIcon;
