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

const RectangleHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 4.70005C2.31685 4.70005 2.0333 4.9836 2.0333 5.33338V10.6667C2.0333 11.0165 2.31685 11.3 2.66663 11.3H13.3333C13.6831 11.3 13.9666 11.0165 13.9666 10.6667V5.33338C13.9666 4.9836 13.6831 4.70005 13.3333 4.70005H2.66663ZM0.633301 5.33338C0.633301 4.2104 1.54366 3.30005 2.66663 3.30005H13.3333C14.4563 3.30005 15.3666 4.2104 15.3666 5.33338V10.6667C15.3666 11.7897 14.4563 12.7 13.3333 12.7H2.66663C1.54366 12.7 0.633301 11.7897 0.633301 10.6667V5.33338Z"
      fill="currentColor"
    />
  </svg>
);
export default RectangleHorizontalIcon;
