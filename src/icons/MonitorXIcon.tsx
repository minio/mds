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

const MonitorXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 2.69999C2.31685 2.69999 2.0333 2.98354 2.0333 3.33332V9.99999C2.0333 10.3498 2.31685 10.6333 2.66663 10.6333H13.3333C13.6831 10.6333 13.9666 10.3498 13.9666 9.99999V3.33332C13.9666 2.98354 13.6831 2.69999 13.3333 2.69999H2.66663ZM8.69997 12.0333H13.3333C14.4563 12.0333 15.3666 11.123 15.3666 9.99999V3.33332C15.3666 2.21034 14.4563 1.29999 13.3333 1.29999H2.66663C1.54366 1.29999 0.633301 2.21034 0.633301 3.33332V9.99999C0.633301 11.123 1.54366 12.0333 2.66663 12.0333H7.29997V13.3H5.3333C4.9467 13.3 4.6333 13.6134 4.6333 14C4.6333 14.3866 4.9467 14.7 5.3333 14.7H10.6666C11.0532 14.7 11.3666 14.3866 11.3666 14C11.3666 13.6134 11.0532 13.3 10.6666 13.3H8.69997V12.0333ZM5.83833 4.50501C6.11169 4.23165 6.55491 4.23165 6.82828 4.50501L7.99997 5.6767L9.17166 4.50501C9.44503 4.23165 9.88824 4.23165 10.1616 4.50501C10.435 4.77838 10.435 5.2216 10.1616 5.49496L8.98992 6.66665L10.1616 7.83835C10.435 8.11171 10.435 8.55493 10.1616 8.8283C9.88824 9.10166 9.44503 9.10166 9.17166 8.8283L7.99997 7.6566L6.82828 8.8283C6.55491 9.10166 6.11169 9.10166 5.83833 8.8283C5.56496 8.55493 5.56496 8.11171 5.83833 7.83835L7.01002 6.66665L5.83833 5.49496C5.56496 5.2216 5.56496 4.77838 5.83833 4.50501Z"
      fill="currentColor"
    />
  </svg>
);
export default MonitorXIcon;
