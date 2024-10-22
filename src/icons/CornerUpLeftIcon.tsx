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

const CornerUpLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.49486 2.17168C6.76823 2.44505 6.76823 2.88827 6.49486 3.16163L4.3565 5.29999H10.6666C11.5594 5.29999 12.4158 5.65469 13.0471 6.28607C13.6785 6.91744 14.0332 7.77376 14.0332 8.66666V13.3333C14.0332 13.7199 13.7198 14.0333 13.3332 14.0333C12.9466 14.0333 12.6332 13.7199 12.6332 13.3333V8.66666C12.6332 8.14507 12.426 7.64484 12.0572 7.27602C11.6884 6.90719 11.1881 6.69999 10.6666 6.69999H4.3565L6.49486 8.83835C6.76823 9.11172 6.76823 9.55493 6.49486 9.8283C6.22149 10.1017 5.77828 10.1017 5.50491 9.8283L2.17158 6.49497C1.89821 6.2216 1.89821 5.77839 2.17158 5.50502L5.50491 2.17168C5.77828 1.89832 6.22149 1.89832 6.49486 2.17168Z"
      fill="currentColor"
    />
  </svg>
);
export default CornerUpLeftIcon;
