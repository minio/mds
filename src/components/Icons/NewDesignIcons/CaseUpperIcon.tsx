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

const CaseUpperIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66667 3.96667C4.93181 3.96667 5.17419 4.11647 5.29277 4.35362L7.28647 8.34102C7.291 8.34964 7.29536 8.35836 7.29955 8.36718L7.95943 9.68695C8.13232 10.0327 7.99217 10.4532 7.64638 10.6261C7.3006 10.799 6.88013 10.6588 6.70723 10.313L6.23404 9.36667H3.09929L2.6261 10.313C2.45321 10.6588 2.03274 10.799 1.68695 10.6261C1.34117 10.4532 1.20101 10.0327 1.3739 9.68695L2.03378 8.36718C2.03797 8.35836 2.04233 8.34964 2.04687 8.34102L4.04057 4.35362C4.15914 4.11647 4.40153 3.96667 4.66667 3.96667ZM3.79929 7.96667H5.53404L4.66667 6.23191L3.79929 7.96667ZM9.3 4.66667C9.3 4.28007 9.6134 3.96667 10 3.96667H12.6667C13.2059 3.96667 13.7231 4.18089 14.1044 4.56222C14.4858 4.94354 14.7 5.46073 14.7 6C14.7 6.41096 14.5756 6.8091 14.3476 7.14405C14.3784 7.17133 14.4085 7.19961 14.4378 7.22888C14.8191 7.61021 15.0333 8.12739 15.0333 8.66667C15.0333 9.20594 14.8191 9.72313 14.4378 10.1045C14.0565 10.4858 13.5393 10.7 13 10.7H10C9.6134 10.7 9.3 10.3866 9.3 10V4.66667ZM10.7 8.03333V9.3H13C13.168 9.3 13.3291 9.23327 13.4478 9.1145C13.5666 8.99573 13.6333 8.83464 13.6333 8.66667C13.6333 8.4987 13.5666 8.33761 13.4478 8.21883C13.3291 8.10006 13.168 8.03333 13 8.03333H10.7ZM12.6667 6.63333H10.7V5.36667H12.6667C12.8346 5.36667 12.9957 5.43339 13.1145 5.55217C13.2333 5.67094 13.3 5.83203 13.3 6C13.3 6.16797 13.2333 6.32906 13.1145 6.44783C12.9957 6.56661 12.8346 6.63333 12.6667 6.63333Z"
      fill="currentColor"
    />
  </svg>
);
export default CaseUpperIcon;
