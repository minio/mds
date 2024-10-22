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

const PiIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66667 3.36667C3.91994 3.36667 3.36667 3.91994 3.36667 4.66667C3.36667 5.05327 3.05327 5.36667 2.66667 5.36667C2.28008 5.36667 1.96667 5.05327 1.96667 4.66667C1.96667 3.14674 3.14674 1.96667 4.66667 1.96667H13.3333C13.7199 1.96667 14.0333 2.28008 14.0333 2.66667C14.0333 3.05327 13.7199 3.36667 13.3333 3.36667H10.7V11.3333C10.7 12.0801 11.2533 12.6333 12 12.6333C12.3866 12.6333 12.7 12.9467 12.7 13.3333C12.7 13.7199 12.3866 14.0333 12 14.0333C10.4801 14.0333 9.30001 12.8533 9.30001 11.3333V3.36667H6.70001V13.3333C6.70001 13.7199 6.38661 14.0333 6.00001 14.0333C5.61341 14.0333 5.30001 13.7199 5.30001 13.3333V3.36667H4.66667Z"
      fill="currentColor"
    />
  </svg>
);
export default PiIcon;
