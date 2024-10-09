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

const ClustersIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.34998 1.39383C8.1334 1.26879 7.86656 1.26879 7.64998 1.39383L5.91793 2.39383C5.70135 2.51887 5.56793 2.74996 5.56793 3.00005V5.00005C5.56793 5.25013 5.70135 5.48122 5.91793 5.60627L7.29999 6.4042V8.10782L5.86611 8.93567L4.34998 8.06033C4.1334 7.93529 3.86656 7.93529 3.64998 8.06034L1.91793 9.06034C1.70135 9.18538 1.56793 9.41647 1.56793 9.66655V11.6666C1.56793 11.9166 1.70135 12.1477 1.91793 12.2728L3.64998 13.2728C3.86656 13.3978 4.1334 13.3978 4.34998 13.2728L6.08203 12.2728C6.29861 12.1477 6.43203 11.9166 6.43203 11.6666V10.2255L7.86601 9.39761L9.38203 10.2729C9.44166 10.3073 9.50424 10.332 9.56793 10.3474V11.6666C9.56793 11.9166 9.70135 12.1477 9.91793 12.2728L11.65 13.2728C11.8666 13.3978 12.1334 13.3978 12.35 13.2728L14.082 12.2728C14.2986 12.1477 14.432 11.9166 14.432 11.6666V9.66655C14.432 9.41647 14.2986 9.18538 14.082 9.06034L12.35 8.06034C12.1334 7.93529 11.8666 7.93529 11.65 8.06034L9.99988 9.01302L8.69999 8.26253V6.40419L10.082 5.60627C10.2986 5.48122 10.432 5.25013 10.432 5.00005V3.00005C10.432 2.74996 10.2986 2.51887 10.082 2.39383L8.34998 1.39383ZM6.96793 3.40419L7.99998 2.80834L9.03203 3.40419V4.5959L7.99998 5.19176L6.96793 4.5959V3.40419ZM10.9679 11.2624V10.0707L12 9.47484L13.032 10.0707V11.2624L12 11.8583L10.9679 11.2624ZM3.99998 9.47484L2.96793 10.0707V11.2624L3.99998 11.8583L5.03203 11.2624V10.0707L3.99998 9.47484Z"
      fill="currentColor"
    />
  </svg>
);
export default ClustersIcon;
