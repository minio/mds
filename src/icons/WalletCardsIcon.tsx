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

const WalletCardsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C2.98354 2.70005 2.69999 2.9836 2.69999 3.33338V4.06786C2.90256 4.00146 3.11615 3.96672 3.33332 3.96672H12.6667C12.8838 3.96672 13.0974 4.00146 13.3 4.06786V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H3.33332ZM14.7 3.33338C14.7 2.2104 13.7896 1.30005 12.6667 1.30005H3.33332C2.21034 1.30005 1.29999 2.2104 1.29999 3.33338V12.6667C1.29999 13.7897 2.21034 14.7 3.33332 14.7H12.6667C13.7896 14.7 14.7 13.7897 14.7 12.6667V3.33338ZM13.3 6.00005C13.3 5.83208 13.2333 5.67099 13.1145 5.55221C12.9957 5.43344 12.8346 5.36672 12.6667 5.36672H3.33332C3.16535 5.36672 3.00426 5.43344 2.88549 5.55221C2.76671 5.67099 2.69999 5.83208 2.69999 6.00005V6.63338H3.99999C4.66978 6.63338 5.39522 6.87518 5.88993 7.4298L6.57659 7.99161C6.59459 8.00634 6.61185 8.02196 6.6283 8.03841C7.4216 8.83171 8.64505 8.83171 9.43835 8.03841C9.45479 8.02196 9.47205 8.00634 9.49006 7.99161L10.1986 7.41186C10.6433 6.98068 11.3346 6.63338 12.0667 6.63338H13.3V6.00005ZM13.3 8.03338H12.0667C11.747 8.03338 11.3849 8.20507 11.1616 8.42836C11.1452 8.4448 11.1279 8.46042 11.1099 8.47515L10.4021 9.05424C9.0697 10.3598 6.99694 10.3598 5.66449 9.05424L4.95672 8.47515C4.92232 8.44701 4.89069 8.41565 4.86223 8.38151C4.69056 8.1755 4.37494 8.03338 3.99999 8.03338H2.69999V12.6667C2.69999 13.0165 2.98354 13.3 3.33332 13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V8.03338Z"
      fill="currentColor"
    />
  </svg>
);
export default WalletCardsIcon;
