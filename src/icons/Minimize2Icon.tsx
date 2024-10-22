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

const Minimize2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.495 1.50501C14.7683 1.77838 14.7683 2.2216 14.495 2.49496L11.0233 5.96665H13.3333C13.7199 5.96665 14.0333 6.28006 14.0333 6.66665C14.0333 7.05325 13.7199 7.36665 13.3333 7.36665H9.33332C8.94672 7.36665 8.63332 7.05325 8.63332 6.66665V2.66665C8.63332 2.28006 8.94672 1.96665 9.33332 1.96665C9.71992 1.96665 10.0333 2.28006 10.0333 2.66665V4.9767L13.505 1.50501C13.7784 1.23165 14.2216 1.23165 14.495 1.50501ZM1.96665 9.33332C1.96665 8.94672 2.28006 8.63332 2.66665 8.63332H6.66665C7.05325 8.63332 7.36665 8.94672 7.36665 9.33332V13.3333C7.36665 13.7199 7.05325 14.0333 6.66665 14.0333C6.28006 14.0333 5.96665 13.7199 5.96665 13.3333V11.0233L2.49496 14.495C2.2216 14.7683 1.77838 14.7683 1.50501 14.495C1.23165 14.2216 1.23165 13.7784 1.50501 13.505L4.9767 10.0333H2.66665C2.28006 10.0333 1.96665 9.71992 1.96665 9.33332Z"
      fill="currentColor"
    />
  </svg>
);
export default Minimize2Icon;
