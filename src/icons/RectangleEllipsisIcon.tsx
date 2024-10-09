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

const RectangleEllipsisIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 4.70005C2.31685 4.70005 2.0333 4.9836 2.0333 5.33338V10.6667C2.0333 11.0165 2.31685 11.3 2.66663 11.3H13.3333C13.6831 11.3 13.9666 11.0165 13.9666 10.6667V5.33338C13.9666 4.9836 13.6831 4.70005 13.3333 4.70005H2.66663ZM0.633301 5.33338C0.633301 4.2104 1.54366 3.30005 2.66663 3.30005H13.3333C14.4563 3.30005 15.3666 4.2104 15.3666 5.33338V10.6667C15.3666 11.7897 14.4563 12.7 13.3333 12.7H2.66663C1.54366 12.7 0.633301 11.7897 0.633301 10.6667V5.33338ZM3.96663 8.00005C3.96663 7.61345 4.28003 7.30005 4.66663 7.30005H4.6733C5.0599 7.30005 5.3733 7.61345 5.3733 8.00005C5.3733 8.38665 5.0599 8.70005 4.6733 8.70005H4.66663C4.28003 8.70005 3.96663 8.38665 3.96663 8.00005ZM7.29997 8.00005C7.29997 7.61345 7.61337 7.30005 7.99997 7.30005H8.00663C8.39323 7.30005 8.70663 7.61345 8.70663 8.00005C8.70663 8.38665 8.39323 8.70005 8.00663 8.70005H7.99997C7.61337 8.70005 7.29997 8.38665 7.29997 8.00005ZM10.6333 8.00005C10.6333 7.61345 10.9467 7.30005 11.3333 7.30005H11.34C11.7266 7.30005 12.04 7.61345 12.04 8.00005C12.04 8.38665 11.7266 8.70005 11.34 8.70005H11.3333C10.9467 8.70005 10.6333 8.38665 10.6333 8.00005Z"
      fill="currentColor"
    />
  </svg>
);
export default RectangleEllipsisIcon;
