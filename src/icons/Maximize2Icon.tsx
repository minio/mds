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

const Maximize2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.99999 2.69999C9.61339 2.69999 9.29999 2.38659 9.29999 1.99999C9.29999 1.61339 9.61339 1.29999 9.99999 1.29999H14C14.3866 1.29999 14.7 1.61339 14.7 1.99999V5.99999C14.7 6.38659 14.3866 6.69999 14 6.69999C13.6134 6.69999 13.3 6.38659 13.3 5.99999V3.68994L9.8283 7.16163C9.55493 7.435 9.11171 7.435 8.83835 7.16163C8.56498 6.88826 8.56498 6.44505 8.83835 6.17168L12.31 2.69999H9.99999ZM7.16163 8.83835C7.435 9.11171 7.435 9.55493 7.16163 9.8283L3.68994 13.3H5.99999C6.38659 13.3 6.69999 13.6134 6.69999 14C6.69999 14.3866 6.38659 14.7 5.99999 14.7H1.99999C1.61339 14.7 1.29999 14.3866 1.29999 14V9.99999C1.29999 9.61339 1.61339 9.29999 1.99999 9.29999C2.38659 9.29999 2.69999 9.61339 2.69999 9.99999V12.31L6.17168 8.83835C6.44505 8.56498 6.88826 8.56498 7.16163 8.83835Z"
      fill="currentColor"
    />
  </svg>
);
export default Maximize2Icon;
