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

const SkipForwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.03007 2.03577C3.27259 1.91921 3.56047 1.95198 3.77059 2.12007L10.4373 7.45341C10.6033 7.58625 10.7 7.78737 10.7 8.00001C10.7 8.21266 10.6033 8.41378 10.4373 8.54662L3.77059 13.88C3.56047 14.0481 3.27259 14.0808 3.03007 13.9643C2.78754 13.8477 2.6333 13.6024 2.6333 13.3333V2.66668C2.6333 2.3976 2.78754 2.15233 3.03007 2.03577ZM4.0333 4.12312V11.8769L8.87942 8.00001L4.0333 4.12312ZM12.6666 2.63335C13.0532 2.63335 13.3666 2.94675 13.3666 3.33335V12.6667C13.3666 13.0533 13.0532 13.3667 12.6666 13.3667C12.28 13.3667 11.9666 13.0533 11.9666 12.6667V3.33335C11.9666 2.94675 12.28 2.63335 12.6666 2.63335Z"
      fill="currentColor"
    />
  </svg>
);
export default SkipForwardIcon;
