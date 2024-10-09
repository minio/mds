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

const ArrowBigRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.73217 2.68661C7.99374 2.57826 8.29483 2.63815 8.49502 2.83835L13.1617 7.50501C13.293 7.63629 13.3667 7.81434 13.3667 7.99999C13.3667 8.18564 13.293 8.36369 13.1617 8.49496L8.49502 13.1616C8.29483 13.3618 7.99374 13.4217 7.73217 13.3134C7.4706 13.205 7.30005 12.9498 7.30005 12.6667V10.7H4.00005C3.61345 10.7 3.30005 10.3866 3.30005 9.99999V5.99999C3.30005 5.61339 3.61345 5.29999 4.00005 5.29999H7.30005V3.33332C7.30005 3.0502 7.4706 2.79495 7.73217 2.68661ZM8.70005 5.02327V5.99999C8.70005 6.38659 8.38665 6.69999 8.00005 6.69999H4.70005V9.29999H8.00005C8.38665 9.29999 8.70005 9.61339 8.70005 9.99999V10.9767L11.6768 7.99999L8.70005 5.02327Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowBigRightIcon;
