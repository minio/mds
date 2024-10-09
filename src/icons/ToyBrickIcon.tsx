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

const ToyBrickIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.03361 2.36696C3.28991 2.11066 3.63752 1.96667 3.99999 1.96667H5.99999C6.35906 1.96667 6.71268 2.08942 6.9783 2.35503C7.24391 2.62065 7.36665 2.97427 7.36665 3.33334V4.63334H8.63332V3.33334C8.63332 2.97088 8.77731 2.62326 9.03361 2.36696C9.28991 2.11066 9.63752 1.96667 9.99999 1.96667H12C12.3591 1.96667 12.7127 2.08942 12.9783 2.35503C13.2439 2.62065 13.3667 2.97427 13.3667 3.33334V4.63374C14.106 4.65144 14.7 5.25636 14.7 6.00001V12.6667C14.7 13.4215 14.0881 14.0333 13.3333 14.0333H2.66665C1.91187 14.0333 1.29999 13.4215 1.29999 12.6667V6.00001C1.29999 5.25636 1.89393 4.65144 2.63332 4.63374V3.33334C2.63332 2.97088 2.77731 2.62326 3.03361 2.36696ZM2.69999 6.03334V12.6333H13.3V6.03334H2.69999ZM5.96665 4.63334H4.03332V3.36667H5.96665V4.63334ZM10.0333 4.63334H11.9667V3.36667H10.0333V4.63334Z"
      fill="currentColor"
    />
  </svg>
);
export default ToyBrickIcon;
