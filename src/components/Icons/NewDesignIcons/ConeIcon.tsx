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

const ConeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.27417 0.845921C7.4917 0.709571 7.74325 0.637253 7.99999 0.637253C8.25672 0.637253 8.50827 0.70957 8.72581 0.845921C8.94183 0.981318 9.11563 1.17442 9.22763 1.40335L14.5242 11.9833C14.6323 12.1844 14.7 12.4123 14.7 12.6667C14.7 13.2492 14.3452 13.6928 13.9618 13.9949C13.5705 14.3033 13.0476 14.5504 12.464 14.745C11.2894 15.1365 9.71114 15.3667 7.99999 15.3667C6.28883 15.3667 4.71062 15.1365 3.53599 14.745C2.95233 14.5504 2.42951 14.3033 2.03822 13.9949C1.65482 13.6928 1.29999 13.2492 1.29999 12.6667C1.29999 12.4123 1.36763 12.1844 1.47576 11.9833L6.77235 1.40335C6.88435 1.17441 7.05815 0.981316 7.27417 0.845921ZM2.70764 12.65L2.71217 12.6409C2.73183 12.6039 2.78142 12.5352 2.90478 12.438C3.12072 12.2678 3.47658 12.0839 3.97871 11.9165C4.97565 11.5842 6.39743 11.3667 7.99999 11.3667C9.60254 11.3667 11.0243 11.5842 12.0213 11.9165C12.5234 12.0839 12.8793 12.2678 13.0952 12.438C13.2186 12.5352 13.2681 12.6039 13.2878 12.6409L13.2923 12.65C13.2958 12.6573 13.2978 12.6628 13.2989 12.6667C13.2923 12.6883 13.2581 12.767 13.0952 12.8954C12.8793 13.0655 12.5234 13.2494 12.0213 13.4168C11.0243 13.7491 9.60254 13.9667 7.99999 13.9667C6.39743 13.9667 4.97565 13.7491 3.97871 13.4168C3.47658 13.2494 3.12072 13.0655 2.90478 12.8954C2.74192 12.767 2.70764 12.6883 2.70104 12.6667C2.7022 12.6628 2.70422 12.6573 2.70764 12.65ZM12.2218 10.5117C11.0767 10.1669 9.59617 9.96666 7.99999 9.96666C6.4038 9.96666 4.9233 10.1669 3.77814 10.5117L7.99999 2.07851L12.2218 10.5117Z"
      fill="currentColor"
    />
  </svg>
);
export default ConeIcon;
