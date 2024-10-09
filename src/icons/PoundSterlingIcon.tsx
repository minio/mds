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

const PoundSterlingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.6317 2.14359C12.2885 2.72734 12.7 3.58787 12.7 4.66667C12.7 5.05327 12.3866 5.36667 12 5.36667C11.6134 5.36667 11.3 5.05327 11.3 4.66667C11.3 3.9678 11.0449 3.49508 10.7016 3.19C10.3455 2.87346 9.85087 2.70017 9.33334 2.70017C8.81581 2.70017 8.32117 2.87346 7.96504 3.19C7.6218 3.49508 7.36667 3.9678 7.36667 4.66667V7.96667H10.6667C11.0533 7.96667 11.3667 8.28007 11.3667 8.66667C11.3667 9.05327 11.0533 9.36667 10.6667 9.36667H7.36667V13.3H12C12.3866 13.3 12.7 13.6134 12.7 14C12.7 14.3866 12.3866 14.7 12 14.7H4C3.6134 14.7 3.3 14.3866 3.3 14C3.3 13.6134 3.6134 13.3 4 13.3H5.96667V9.36667H4C3.6134 9.36667 3.3 9.05327 3.3 8.66667C3.3 8.28007 3.6134 7.96667 4 7.96667H5.96667V4.66667C5.96667 3.58787 6.37821 2.72734 7.03496 2.14359C7.67884 1.5713 8.51753 1.30017 9.33334 1.30017C10.1491 1.30017 10.9878 1.5713 11.6317 2.14359Z"
      fill="currentColor"
    />
  </svg>
);
export default PoundSterlingIcon;
