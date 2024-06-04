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

const PentagonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.8 1.69218C7.15213 1.44699 7.57092 1.31555 8 1.31555C8.42909 1.31555 8.84788 1.44699 9.2 1.69218L9.20763 1.6975L14.1402 5.23036C14.1402 5.23033 14.1402 5.23039 14.1402 5.23036C14.8442 5.73331 15.1689 6.65222 14.8618 7.49514L12.9997 13.2811C12.9963 13.2916 12.9927 13.3021 12.9888 13.3124C12.7068 14.0643 12.0128 14.7 11.0667 14.7H5C4.05384 14.7 3.35985 14.0643 3.07791 13.3124C3.07402 13.3021 3.07039 13.2916 3.067 13.2811L1.20485 7.49514C0.898138 6.65313 1.22162 5.7354 1.92404 5.2321L6.8 1.69218ZM7.60472 2.83784L2.74022 6.3696C2.5158 6.5299 2.43998 6.80186 2.5221 7.02085C2.52598 7.03121 2.52962 7.04166 2.53301 7.05218L4.39393 12.8343C4.5137 13.1404 4.74981 13.3 5 13.3H11.0667C11.3169 13.3 11.553 13.1404 11.6727 12.8343L13.5337 7.05218C13.5371 7.04166 13.5407 7.03121 13.5446 7.02085C13.6267 6.80186 13.5509 6.52988 13.3265 6.36959L8.39683 2.8389C8.28012 2.75858 8.14175 2.71555 8 2.71555C7.85889 2.71555 7.72111 2.7582 7.60472 2.83784Z"
      fill="currentColor"
    />
  </svg>
);
export default PentagonIcon;
