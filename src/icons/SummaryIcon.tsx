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

const SummaryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.29993 3.33322C1.29993 2.57843 1.91181 1.96655 2.66659 1.96655H5.99993C6.75472 1.96655 7.36659 2.57843 7.36659 3.33322V6.66655C7.36659 7.42134 6.75471 8.03322 5.99993 8.03322H2.66659C1.9118 8.03322 1.29993 7.42134 1.29993 6.66655V3.33322ZM2.69993 3.36655V6.63322H5.96659V3.36655H2.69993Z"
      fill="currentColor"
    />
    <path
      d="M8.63327 3.3333C8.63327 2.9467 8.94667 2.6333 9.33327 2.6333H13.9999C14.3865 2.6333 14.6999 2.9467 14.6999 3.3333C14.6999 3.7199 14.3865 4.0333 13.9999 4.0333H9.33327C8.94667 4.0333 8.63327 3.7199 8.63327 3.3333Z"
      fill="currentColor"
    />
    <path
      d="M9.33327 5.96655C8.94667 5.96655 8.63327 6.27995 8.63327 6.66655C8.63327 7.05315 8.94667 7.36655 9.33327 7.36655H13.9999C14.3865 7.36655 14.6999 7.05315 14.6999 6.66655C14.6999 6.27995 14.3865 5.96655 13.9999 5.96655H9.33327Z"
      fill="currentColor"
    />
    <path
      d="M1.29993 10C1.29993 9.61345 1.61333 9.30005 1.99993 9.30005L13.9999 9.30005C14.3865 9.30005 14.6999 9.61345 14.6999 10C14.6999 10.3866 14.3865 10.7001 13.9999 10.7001L1.99993 10.7C1.61333 10.7 1.29993 10.3866 1.29993 10Z"
      fill="currentColor"
    />
    <path
      d="M1.99993 12.6333C1.61333 12.6333 1.29993 12.9467 1.29993 13.3333C1.29993 13.7199 1.61333 14.0333 1.99993 14.0333L13.9999 14.0333C14.3865 14.0333 14.6999 13.7199 14.6999 13.3333C14.6999 12.9467 14.3865 12.6333 13.9999 12.6333L1.99993 12.6333Z"
      fill="currentColor"
    />
  </svg>
);
export default SummaryIcon;
