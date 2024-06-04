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

const TerminalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.1717 2.83833C2.44507 2.56496 2.88828 2.56496 3.16165 2.83833L7.16165 6.83833C7.29292 6.9696 7.36667 7.14765 7.36667 7.3333C7.36667 7.51895 7.29292 7.697 7.16165 7.82828L3.16165 11.8283C2.88828 12.1016 2.44507 12.1016 2.1717 11.8283C1.89833 11.5549 1.89833 11.1117 2.1717 10.8383L5.67673 7.3333L2.1717 3.82828C1.89833 3.55491 1.89833 3.11169 2.1717 2.83833ZM7.30001 12.6666C7.30001 12.28 7.61341 11.9666 8.00001 11.9666H13.3333C13.7199 11.9666 14.0333 12.28 14.0333 12.6666C14.0333 13.0532 13.7199 13.3666 13.3333 13.3666H8.00001C7.61341 13.3666 7.30001 13.0532 7.30001 12.6666Z"
      fill="currentColor"
    />
  </svg>
);
export default TerminalIcon;
