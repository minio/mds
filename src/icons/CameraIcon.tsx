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

const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.79555 2.21854C5.92854 2.05894 6.12555 1.96667 6.3333 1.96667H9.66663C9.87438 1.96667 10.0714 2.05894 10.2044 2.21854L11.6612 3.96667H13.3333C13.8726 3.96667 14.3898 4.18089 14.7711 4.56222C15.1524 4.94354 15.3666 5.46073 15.3666 6V12C15.3666 12.5393 15.1524 13.0565 14.7711 13.4378C14.3898 13.8191 13.8726 14.0333 13.3333 14.0333H2.66663C2.12736 14.0333 1.61017 13.8191 1.22885 13.4378C0.847526 13.0565 0.633301 12.5393 0.633301 12V6C0.633301 5.46073 0.847526 4.94354 1.22885 4.56222C1.61017 4.18089 2.12736 3.96667 2.66663 3.96667H4.33877L5.79555 2.21854ZM6.66116 3.36667L5.20439 5.1148C5.07139 5.27439 4.87438 5.36667 4.66663 5.36667H2.66663C2.49866 5.36667 2.33757 5.43339 2.2188 5.55217C2.10003 5.67094 2.0333 5.83203 2.0333 6V12C2.0333 12.168 2.10003 12.3291 2.2188 12.4478C2.33757 12.5666 2.49866 12.6333 2.66663 12.6333H13.3333C13.5013 12.6333 13.6624 12.5666 13.7811 12.4478C13.8999 12.3291 13.9666 12.168 13.9666 12V6C13.9666 5.83203 13.8999 5.67094 13.7811 5.55217C13.6624 5.43339 13.5013 5.36667 13.3333 5.36667H11.3333C11.1256 5.36667 10.9285 5.27439 10.7955 5.1148L9.33877 3.36667H6.66116ZM7.99997 7.36667C7.282 7.36667 6.69997 7.9487 6.69997 8.66667C6.69997 9.38464 7.282 9.96667 7.99997 9.96667C8.71794 9.96667 9.29997 9.38464 9.29997 8.66667C9.29997 7.9487 8.71794 7.36667 7.99997 7.36667ZM5.29997 8.66667C5.29997 7.1755 6.5088 5.96667 7.99997 5.96667C9.49114 5.96667 10.7 7.1755 10.7 8.66667C10.7 10.1578 9.49114 11.3667 7.99997 11.3667C6.5088 11.3667 5.29997 10.1578 5.29997 8.66667Z"
      fill="currentColor"
    />
  </svg>
);
export default CameraIcon;
