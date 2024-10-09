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

const CollapseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M13.9 6.00002C13.9 6.38662 13.5866 6.70002 13.2 6.70002H9.99996C9.61336 6.70002 9.29996 6.38662 9.29996 6.00002V2.80002C9.29996 2.41342 9.61336 2.10002 9.99996 2.10002C10.3866 2.10002 10.7 2.41342 10.7 2.80002V4.31007L13.505 1.50504C13.7783 1.23168 14.2216 1.23168 14.4949 1.50504C14.7683 1.77841 14.7683 2.22163 14.4949 2.49499L11.6899 5.30002H13.2C13.5866 5.30002 13.9 5.61342 13.9 6.00002Z"
      fill="currentColor"
    />
    <path
      d="M1.50498 13.505C1.23162 13.7784 1.23162 14.2216 1.50498 14.495C1.77835 14.7684 2.22157 14.7684 2.49493 14.495L5.29996 11.69V13.2C5.29996 13.5866 5.61336 13.9 5.99996 13.9C6.38656 13.9 6.69996 13.5866 6.69996 13.2V10C6.69996 9.61342 6.38656 9.30002 5.99996 9.30002H2.79996C2.41336 9.30002 2.09996 9.61342 2.09996 10C2.09996 10.3866 2.41336 10.7 2.79996 10.7H4.31001L1.50498 13.505Z"
      fill="currentColor"
    />
    <path
      d="M13.505 14.495C13.7783 14.7684 14.2216 14.7684 14.4949 14.495C14.7683 14.2216 14.7683 13.7784 14.4949 13.505L11.6899 10.7H13.2C13.5866 10.7 13.9 10.3866 13.9 10C13.9 9.61342 13.5866 9.30002 13.2 9.30002H9.99996C9.61336 9.30002 9.29996 9.61342 9.29996 10V13.2C9.29996 13.5866 9.61336 13.9 9.99996 13.9C10.3866 13.9 10.7 13.5866 10.7 13.2V11.69L13.505 14.495Z"
      fill="currentColor"
    />
    <path
      d="M5.99996 6.70002C6.38656 6.70002 6.69996 6.38662 6.69996 6.00002V2.80002C6.69996 2.41342 6.38656 2.10002 5.99996 2.10002C5.61336 2.10002 5.29996 2.41342 5.29996 2.80002V4.31007L2.49493 1.50504C2.22157 1.23168 1.77835 1.23168 1.50498 1.50504C1.23162 1.77841 1.23162 2.22163 1.50498 2.49499L4.31001 5.30002H2.79996C2.41336 5.30002 2.09996 5.61342 2.09996 6.00002C2.09996 6.38662 2.41336 6.70002 2.79996 6.70002H5.99996Z"
      fill="currentColor"
    />
  </svg>
);
export default CollapseIcon;
