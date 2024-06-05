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

const RewindIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.64091 2.70449C7.88107 2.82195 8.03336 3.06595 8.03336 3.33331V7.70183C8.07968 7.60345 8.14887 7.51593 8.23694 7.44743L14.2369 2.78076C14.448 2.61662 14.7341 2.58702 14.9742 2.70449C15.2144 2.82195 15.3667 3.06595 15.3667 3.33331V12.6666C15.3667 12.934 15.2144 13.178 14.9742 13.2955C14.7341 13.4129 14.448 13.3833 14.2369 13.2192L8.23694 8.55252C8.14887 8.48402 8.07968 8.3965 8.03336 8.29812V12.6666C8.03336 12.934 7.88107 13.178 7.64091 13.2955C7.40074 13.4129 7.11464 13.3833 6.9036 13.2192L0.903603 8.55252C0.733093 8.4199 0.633362 8.21599 0.633362 7.99997C0.633362 7.78396 0.733093 7.58005 0.903603 7.44743L6.9036 2.78076C7.11464 2.61662 7.40074 2.58702 7.64091 2.70449ZM2.47354 7.99997L6.63336 11.2354V4.76455L2.47354 7.99997ZM9.80687 7.99997L13.9667 11.2354V4.76455L9.80687 7.99997Z"
      fill="currentColor"
    />
  </svg>
);
export default RewindIcon;
