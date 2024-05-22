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

const HistoryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      id="Vector"
      d="M6.66663 14.6666V7.99998H10.6666V14.6666M2.66663 5.99998L8.66663 1.33331L14.6666 5.99998V13.3333C14.6666 13.6869 14.5262 14.0261 14.2761 14.2761C14.0261 14.5262 13.6869 14.6666 13.3333 14.6666H3.99996C3.64634 14.6666 3.3072 14.5262 3.05715 14.2761C2.8071 14.0261 2.66663 13.6869 2.66663 13.3333V5.99998Z"
      stroke="currentcolor"
      strokeOpacity="0.88"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HistoryIcon;
