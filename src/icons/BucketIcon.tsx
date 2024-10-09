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

const BucketIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M5.3 7.99999C5.3 7.61339 5.6134 7.29999 6 7.29999H10C10.3866 7.29999 10.7 7.61339 10.7 7.99999C10.7 8.38659 10.3866 8.69999 10 8.69999H6C5.6134 8.69999 5.3 8.38659 5.3 7.99999Z"
      fill="currentColor"
    />
    <path
      d="M7 10.3C6.6134 10.3 6.3 10.6134 6.3 11C6.3 11.3866 6.6134 11.7 7 11.7H9C9.3866 11.7 9.7 11.3866 9.7 11C9.7 10.6134 9.3866 10.3 9 10.3H7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 1.29999C1.6134 1.29999 1.3 1.61339 1.3 1.99999V4.99999C1.3 5.38659 1.6134 5.69999 2 5.69999H2.37347L3.30428 14.0773C3.34367 14.4318 3.64332 14.7 4 14.7H12C12.3567 14.7 12.6563 14.4318 12.6957 14.0773L13.6265 5.69999H14C14.3866 5.69999 14.7 5.38659 14.7 4.99999V1.99999C14.7 1.61339 14.3866 1.29999 14 1.29999H2ZM12.2179 5.69999H3.78209L4.62653 13.3H11.3735L12.2179 5.69999ZM13.3 4.29999V2.69999H2.7V4.29999H13.3Z"
      fill="currentColor"
    />
  </svg>
);
export default BucketIcon;
