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

const AwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00005 2.03333C6.17751 2.03333 4.70005 3.51079 4.70005 5.33333C4.70005 6.43604 5.24091 7.41242 6.07181 8.01167C6.08262 8.01893 6.0932 8.02647 6.10355 8.03428C6.6401 8.41172 7.29419 8.63333 8.00005 8.63333C8.7059 8.63333 9.36 8.41172 9.89655 8.03428C9.9069 8.02646 9.91747 8.01893 9.92828 8.01168C10.7592 7.41243 11.3 6.43604 11.3 5.33333C11.3 3.51079 9.82259 2.03333 8.00005 2.03333ZM11.0768 8.88643C12.0711 8.02465 12.7 6.75244 12.7 5.33333C12.7 2.73759 10.5958 0.633331 8.00005 0.633331C5.40431 0.633331 3.30005 2.73759 3.30005 5.33333C3.30005 6.75244 3.92899 8.02465 4.92333 8.88643L3.9763 14.5512C3.93127 14.8205 4.04695 15.0915 4.27262 15.2452C4.49828 15.3989 4.79273 15.4074 5.02686 15.2669L8.00005 13.483L10.9732 15.2669C11.2074 15.4074 11.5018 15.3989 11.7275 15.2452C11.9531 15.0915 12.0688 14.8205 12.0238 14.5512L11.0768 8.88643ZM9.79008 9.68044C9.23835 9.90788 8.63385 10.0333 8.00005 10.0333C7.36625 10.0333 6.76174 9.90788 6.21002 9.68044L5.60725 13.286L7.6399 12.0664C7.86158 11.9334 8.13852 11.9334 8.3602 12.0664L10.3929 13.286L9.79008 9.68044Z"
      fill="currentColor"
    />
  </svg>
);
export default AwardIcon;
