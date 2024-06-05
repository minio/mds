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

const PercentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33333 3.36667C3.79945 3.36667 3.36666 3.79947 3.36666 4.33334C3.36666 4.86722 3.79945 5.30001 4.33333 5.30001C4.8672 5.30001 5.29999 4.86722 5.29999 4.33334C5.29999 3.79947 4.8672 3.36667 4.33333 3.36667ZM1.96666 4.33334C1.96666 3.02627 3.02625 1.96667 4.33333 1.96667C5.6404 1.96667 6.69999 3.02627 6.69999 4.33334C6.69999 5.64042 5.6404 6.70001 4.33333 6.70001C3.02625 6.70001 1.96666 5.64042 1.96666 4.33334ZM13.1616 2.83837C13.435 3.11173 13.435 3.55495 13.1616 3.82832L3.8283 13.1616C3.55493 13.435 3.11172 13.435 2.83835 13.1616C2.56498 12.8883 2.56498 12.4451 2.83835 12.1717L12.1717 2.83837C12.4451 2.565 12.8883 2.565 13.1616 2.83837ZM11.6667 10.7C11.1328 10.7 10.7 11.1328 10.7 11.6667C10.7 12.2006 11.1328 12.6333 11.6667 12.6333C12.2005 12.6333 12.6333 12.2006 12.6333 11.6667C12.6333 11.1328 12.2005 10.7 11.6667 10.7ZM9.29999 11.6667C9.29999 10.3596 10.3596 9.30001 11.6667 9.30001C12.9737 9.30001 14.0333 10.3596 14.0333 11.6667C14.0333 12.9737 12.9737 14.0333 11.6667 14.0333C10.3596 14.0333 9.29999 12.9737 9.29999 11.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default PercentIcon;
