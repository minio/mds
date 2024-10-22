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

const Heading6Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66655 3.29999C3.05315 3.29999 3.36655 3.61339 3.36655 3.99999V7.29999H7.29989V3.99999C7.29989 3.61339 7.61329 3.29999 7.99989 3.29999C8.38649 3.29999 8.69989 3.61339 8.69989 3.99999V12C8.69989 12.3866 8.38649 12.7 7.99989 12.7C7.61329 12.7 7.29989 12.3866 7.29989 12V8.69999H3.36655V12C3.36655 12.3866 3.05315 12.7 2.66655 12.7C2.27995 12.7 1.96655 12.3866 1.96655 12V3.99999C1.96655 3.61339 2.27995 3.29999 2.66655 3.29999ZM13.8282 6.17168C14.1016 6.44505 14.1016 6.88826 13.8282 7.16163C13.2722 7.71766 12.8698 8.18083 12.5874 8.63483C12.6136 8.63383 12.64 8.63332 12.6666 8.63332C13.7895 8.63332 14.6999 9.54368 14.6999 10.6667C14.6999 11.7896 13.7895 12.7 12.6666 12.7C11.5436 12.7 10.6332 11.7896 10.6332 10.6667C10.6332 9.7288 10.8235 8.9474 11.2156 8.21224C11.5984 7.49436 12.1575 6.85239 12.8382 6.17168C13.1116 5.89831 13.5548 5.89831 13.8282 6.17168ZM12.0332 10.6667C12.0332 11.0164 12.3168 11.3 12.6666 11.3C13.0163 11.3 13.2999 11.0164 13.2999 10.6667C13.2999 10.3169 13.0163 10.0333 12.6666 10.0333C12.3168 10.0333 12.0332 10.3169 12.0332 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default Heading6Icon;
