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

const MonitorCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6667 2.69999C2.31691 2.69999 2.03336 2.98354 2.03336 3.33332V9.99999C2.03336 10.3498 2.31691 10.6333 2.6667 10.6333H13.3334C13.6831 10.6333 13.9667 10.3498 13.9667 9.99999V3.33332C13.9667 2.98354 13.6831 2.69999 13.3334 2.69999H2.6667ZM8.70003 12.0333H13.3334C14.4563 12.0333 15.3667 11.123 15.3667 9.99999V3.33332C15.3667 2.21034 14.4563 1.29999 13.3334 1.29999H2.6667C1.54372 1.29999 0.633362 2.21034 0.633362 3.33332V9.99999C0.633362 11.123 1.54372 12.0333 2.6667 12.0333H7.30003V13.3H5.33336C4.94676 13.3 4.63336 13.6134 4.63336 14C4.63336 14.3866 4.94676 14.7 5.33336 14.7H10.6667C11.0533 14.7 11.3667 14.3866 11.3667 14C11.3667 13.6134 11.0533 13.3 10.6667 13.3H8.70003V12.0333ZM10.495 4.83835C10.7684 5.11171 10.7684 5.55493 10.495 5.8283L7.82834 8.49496C7.69706 8.62624 7.51901 8.69999 7.33336 8.69999C7.14771 8.69999 6.96966 8.62624 6.83839 8.49496L5.50505 7.16163C5.23169 6.88826 5.23169 6.44505 5.50505 6.17168C5.77842 5.89831 6.22164 5.89831 6.495 6.17168L7.33336 7.01004L9.50505 4.83835C9.77842 4.56498 10.2216 4.56498 10.495 4.83835Z"
      fill="currentColor"
    />
  </svg>
);
export default MonitorCheckIcon;
