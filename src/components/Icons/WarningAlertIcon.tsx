// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

const WarningAlertIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    {...props}
  >
    <path
      id="Vector"
      d="M7.99995 4.99999V7.66665M7.99995 10.3333H8.00662M14.4866 11L9.15329 1.66665C9.037 1.46146 8.86836 1.29078 8.66457 1.17203C8.46078 1.05329 8.22915 0.990723 7.99329 0.990723C7.75743 0.990723 7.52579 1.05329 7.322 1.17203C7.11822 1.29078 6.94958 1.46146 6.83329 1.66665L1.49995 11C1.38241 11.2036 1.32077 11.4346 1.32129 11.6697C1.32181 11.9047 1.38447 12.1355 1.50292 12.3385C1.62136 12.5416 1.79138 12.7097 1.99575 12.8259C2.20011 12.942 2.43156 13.0021 2.66662 13H13.3333C13.5672 12.9997 13.797 12.938 13.9995 12.8208C14.202 12.7037 14.3701 12.5354 14.487 12.3327C14.6038 12.1301 14.6653 11.9002 14.6653 11.6663C14.6652 11.4324 14.6036 11.2026 14.4866 11Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default WarningAlertIcon;
