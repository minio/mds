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

const TypeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.96655 2.66667C1.96655 2.28008 2.27995 1.96667 2.66655 1.96667H13.3332C13.7198 1.96667 14.0332 2.28008 14.0332 2.66667V4.66667C14.0332 5.05327 13.7198 5.36667 13.3332 5.36667C12.9466 5.36667 12.6332 5.05327 12.6332 4.66667V3.36667H8.69989V12.6333H9.99989C10.3865 12.6333 10.6999 12.9467 10.6999 13.3333C10.6999 13.7199 10.3865 14.0333 9.99989 14.0333H5.99989C5.61329 14.0333 5.29989 13.7199 5.29989 13.3333C5.29989 12.9467 5.61329 12.6333 5.99989 12.6333H7.29989V3.36667H3.36655V4.66667C3.36655 5.05327 3.05315 5.36667 2.66655 5.36667C2.27995 5.36667 1.96655 5.05327 1.96655 4.66667V2.66667Z"
      fill="currentColor"
    />
  </svg>
);
export default TypeIcon;
