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

const PersonStandingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99999 3.36667C8.0184 3.36667 8.03333 3.35175 8.03333 3.33334C8.03333 3.31493 8.0184 3.30001 7.99999 3.30001C7.98159 3.30001 7.96666 3.31493 7.96666 3.33334C7.96666 3.35175 7.98159 3.36667 7.99999 3.36667ZM6.63333 3.33334C6.63333 2.57855 7.24521 1.96667 7.99999 1.96667C8.75478 1.96667 9.36666 2.57855 9.36666 3.33334C9.36666 4.08813 8.75478 4.70001 7.99999 4.70001C7.24521 4.70001 6.63333 4.08813 6.63333 3.33334ZM3.33592 5.11198C3.45817 4.74522 3.85459 4.54701 4.22135 4.66926L7.99999 5.92881L11.7786 4.66926C12.1454 4.54701 12.5418 4.74522 12.6641 5.11198C12.7863 5.47874 12.5881 5.87517 12.2214 5.99742L8.7 7.17121V9.16809L10.6261 13.0203C10.799 13.3661 10.6588 13.7865 10.313 13.9594C9.96726 14.1323 9.54679 13.9922 9.3739 13.6464L7.99999 10.8986L6.62609 13.6464C6.4532 13.9922 6.03273 14.1323 5.68695 13.9594C5.34116 13.7865 5.201 13.3661 5.3739 13.0203L7.29999 9.16809V7.17121L3.77864 5.99742C3.41187 5.87517 3.21366 5.47874 3.33592 5.11198Z"
      fill="currentColor"
    />
  </svg>
);
export default PersonStandingIcon;
