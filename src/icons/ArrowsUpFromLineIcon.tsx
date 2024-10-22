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

const ArrowsUpFromLineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.1717 1.50501C4.44507 1.23165 4.88828 1.23165 5.16165 1.50501L7.16165 3.50501C7.43502 3.77838 7.43502 4.2216 7.16165 4.49496C6.88828 4.76833 6.44507 4.76833 6.1717 4.49496L5.36667 3.68994V11.3333C5.36667 11.7199 5.05327 12.0333 4.66667 12.0333C4.28008 12.0333 3.96667 11.7199 3.96667 11.3333V3.68994L3.16165 4.49496C2.88828 4.76833 2.44507 4.76833 2.1717 4.49496C1.89833 4.2216 1.89833 3.77838 2.1717 3.50501L4.1717 1.50501ZM10.8384 1.50501C11.1117 1.23165 11.5549 1.23165 11.8283 1.50501L13.8283 3.50501C14.1017 3.77838 14.1017 4.2216 13.8283 4.49496C13.5549 4.76833 13.1117 4.76833 12.8384 4.49496L12.0333 3.68994V11.3333C12.0333 11.7199 11.7199 12.0333 11.3333 12.0333C10.9467 12.0333 10.6333 11.7199 10.6333 11.3333V3.68994L9.82832 4.49496C9.55495 4.76833 9.11173 4.76833 8.83837 4.49496C8.565 4.2216 8.565 3.77838 8.83837 3.50501L10.8384 1.50501ZM1.96667 14C1.96667 13.6134 2.28008 13.3 2.66667 13.3H13.3333C13.7199 13.3 14.0333 13.6134 14.0333 14C14.0333 14.3866 13.7199 14.7 13.3333 14.7H2.66667C2.28008 14.7 1.96667 14.3866 1.96667 14Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowsUpFromLineIcon;
