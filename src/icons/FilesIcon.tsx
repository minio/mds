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

const FilesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.00005 2.03333C5.83208 2.03333 5.67099 2.10006 5.55221 2.21883C5.43344 2.3376 5.36672 2.49869 5.36672 2.66666V10.6667C5.36672 10.8346 5.43344 10.9957 5.55221 11.1145C5.67099 11.2333 5.83208 11.3 6.00005 11.3H12C12.168 11.3 12.3291 11.2333 12.4479 11.1145C12.5667 10.9957 12.6334 10.8346 12.6334 10.6667V5.36666H11.3334C10.7941 5.36666 10.2769 5.15244 9.8956 4.77111C9.51427 4.38979 9.30005 3.8726 9.30005 3.33333V2.03333H6.00005ZM6.00005 0.633331C5.46078 0.633331 4.94359 0.847557 4.56226 1.22888C4.18094 1.6102 3.96672 2.12739 3.96672 2.66666V10.6667C3.96672 11.2059 4.18094 11.7231 4.56226 12.1044C4.94359 12.4858 5.46077 12.7 6.00005 12.7H12C12.5393 12.7 13.0565 12.4858 13.4378 12.1044C13.8192 11.7231 14.0334 11.2059 14.0334 10.6667V4C14.0334 3.81435 13.9596 3.6363 13.8284 3.50502L11.1617 0.838357C11.0304 0.707081 10.8524 0.633331 10.6667 0.633331H6.00005ZM10.7 2.35661L12.3101 3.96666H11.3334C11.1654 3.96666 11.0043 3.89994 10.8855 3.78117C10.7668 3.66239 10.7 3.5013 10.7 3.33333V2.35661ZM2.00005 4.36666C2.38665 4.36666 2.70005 4.68007 2.70005 5.06666V13.6C2.70005 13.6972 2.73868 13.7905 2.80744 13.8593C2.87621 13.928 2.96947 13.9667 3.06672 13.9667H9.60005C9.98665 13.9667 10.3 14.2801 10.3 14.6667C10.3 15.0533 9.98665 15.3667 9.60005 15.3667H3.06672C2.59817 15.3667 2.14881 15.1805 1.81749 14.8492C1.48618 14.5179 1.30005 14.0685 1.30005 13.6V5.06666C1.30005 4.68007 1.61345 4.36666 2.00005 4.36666Z"
      fill="currentColor"
    />
  </svg>
);
export default FilesIcon;
