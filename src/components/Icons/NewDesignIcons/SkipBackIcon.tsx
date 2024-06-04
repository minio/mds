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

const SkipBackIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.9699 2.03577C13.2124 2.15233 13.3666 2.3976 13.3666 2.66668V13.3333C13.3666 13.6024 13.2124 13.8477 12.9699 13.9643C12.7273 14.0808 12.4395 14.0481 12.2293 13.88L5.56268 8.54662C5.39663 8.41378 5.29997 8.21266 5.29997 8.00001C5.29997 7.78737 5.39663 7.58625 5.56268 7.45341L12.2293 2.12007C12.4395 1.95198 12.7273 1.91921 12.9699 2.03577ZM7.12051 8.00001L11.9666 11.8769V4.12312L7.12051 8.00001ZM3.3333 2.63335C3.7199 2.63335 4.0333 2.94675 4.0333 3.33335V12.6667C4.0333 13.0533 3.7199 13.3667 3.3333 13.3667C2.9467 13.3667 2.6333 13.0533 2.6333 12.6667V3.33335C2.6333 2.94675 2.9467 2.63335 3.3333 2.63335Z"
      fill="currentColor"
    />
  </svg>
);
export default SkipBackIcon;
