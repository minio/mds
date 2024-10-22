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

const LayoutPanelTopIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.70005 2.69999V5.96665H13.3V2.69999H2.70005ZM1.30005 2.66665C1.30005 1.91187 1.91193 1.29999 2.66672 1.29999H13.3334C14.0882 1.29999 14.7 1.91187 14.7 2.66665V5.99999C14.7 6.75478 14.0882 7.36665 13.3334 7.36665H2.66672C1.91193 7.36665 1.30005 6.75478 1.30005 5.99999V2.66665ZM2.70005 10.0333V13.3H5.96672V10.0333H2.70005ZM1.30005 9.99999C1.30005 9.2452 1.91193 8.63332 2.66672 8.63332H6.00005C6.75484 8.63332 7.36672 9.2452 7.36672 9.99999V13.3333C7.36672 14.0881 6.75484 14.7 6.00005 14.7H2.66672C1.91193 14.7 1.30005 14.0881 1.30005 13.3333V9.99999ZM10.0334 10.0333V13.3H13.3V10.0333H10.0334ZM8.63338 9.99999C8.63338 9.2452 9.24526 8.63332 10 8.63332H13.3334C14.0882 8.63332 14.7 9.2452 14.7 9.99999V13.3333C14.7 14.0881 14.0882 14.7 13.3334 14.7H10C9.24526 14.7 8.63338 14.0881 8.63338 13.3333V9.99999Z"
      fill="currentColor"
    />
  </svg>
);
export default LayoutPanelTopIcon;
