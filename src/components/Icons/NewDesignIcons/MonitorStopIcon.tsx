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

const MonitorStopIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 2.69999C2.31685 2.69999 2.0333 2.98354 2.0333 3.33332V9.99999C2.0333 10.3498 2.31685 10.6333 2.66663 10.6333H13.3333C13.6831 10.6333 13.9666 10.3498 13.9666 9.99999V3.33332C13.9666 2.98354 13.6831 2.69999 13.3333 2.69999H2.66663ZM8.69997 12.0333H13.3333C14.4563 12.0333 15.3666 11.123 15.3666 9.99999V3.33332C15.3666 2.21034 14.4563 1.29999 13.3333 1.29999H2.66663C1.54366 1.29999 0.633301 2.21034 0.633301 3.33332V9.99999C0.633301 11.123 1.54366 12.0333 2.66663 12.0333H7.29997V13.3H5.3333C4.9467 13.3 4.6333 13.6134 4.6333 14C4.6333 14.3866 4.9467 14.7 5.3333 14.7H10.6666C11.0532 14.7 11.3666 14.3866 11.3666 14C11.3666 13.6134 11.0532 13.3 10.6666 13.3H8.69997V12.0333ZM5.29997 4.66665C5.29997 4.28006 5.61337 3.96665 5.99997 3.96665H9.99997C10.3866 3.96665 10.7 4.28006 10.7 4.66665V8.66665C10.7 9.05325 10.3866 9.36665 9.99997 9.36665H5.99997C5.61337 9.36665 5.29997 9.05325 5.29997 8.66665V4.66665ZM6.69997 5.36665V7.96665H9.29997V5.36665H6.69997Z"
      fill="currentColor"
    />
  </svg>
);
export default MonitorStopIcon;
