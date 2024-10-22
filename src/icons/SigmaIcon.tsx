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

const SigmaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.37395 2.35363C3.49253 2.11648 3.73491 1.96667 4.00005 1.96667H12.0001C12.3867 1.96667 12.7001 2.28008 12.7001 2.66667V4.66667C12.7001 5.05327 12.3867 5.36667 12.0001 5.36667C11.6135 5.36667 11.3001 5.05327 11.3001 4.66667V3.36667H5.40005L8.56005 7.58001C8.74672 7.8289 8.74672 8.17112 8.56005 8.42001L5.40005 12.6333H11.3001V11.3333C11.3001 10.9467 11.6135 10.6333 12.0001 10.6333C12.3867 10.6333 12.7001 10.9467 12.7001 11.3333V13.3333C12.7001 13.7199 12.3867 14.0333 12.0001 14.0333H4.00005C3.73491 14.0333 3.49253 13.8835 3.37395 13.6464C3.25538 13.4092 3.28097 13.1255 3.44005 12.9133L7.12505 8.00001L3.44005 3.08667C3.28097 2.87456 3.25538 2.59077 3.37395 2.35363Z"
      fill="currentColor"
    />
  </svg>
);
export default SigmaIcon;
