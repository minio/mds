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

const WalletMinimalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C3.16535 2.70005 3.00426 2.76677 2.88549 2.88555C2.76671 3.00432 2.69999 3.16541 2.69999 3.33338V12.6667C2.69999 12.8347 2.76671 12.9958 2.88549 13.1145C3.00426 13.2333 3.16535 13.3 3.33332 13.3H12.6667C12.8346 13.3 12.9957 13.2333 13.1145 13.1145C13.2333 12.9958 13.3 12.8347 13.3 12.6667V6.00005C13.3 5.83208 13.2333 5.67099 13.1145 5.55221C12.9957 5.43344 12.8346 5.36672 12.6667 5.36672H4.66665C4.28006 5.36672 3.96665 5.05331 3.96665 4.66672C3.96665 4.28012 4.28006 3.96672 4.66665 3.96672H12.6667C13.2059 3.96672 13.7231 4.18094 14.1044 4.56227C14.4858 4.94359 14.7 5.46077 14.7 6.00005V12.6667C14.7 13.206 14.4858 13.7232 14.1044 14.1045C13.7231 14.4858 13.2059 14.7 12.6667 14.7H3.33332C2.79405 14.7 2.27686 14.4858 1.89554 14.1045C1.51421 13.7232 1.29999 13.206 1.29999 12.6667V3.33338C1.29999 2.79411 1.51421 2.27692 1.89554 1.8956C2.27686 1.51427 2.79405 1.30005 3.33332 1.30005H12.6667C13.0533 1.30005 13.3667 1.61345 13.3667 2.00005C13.3667 2.38665 13.0533 2.70005 12.6667 2.70005H3.33332ZM10.6333 9.33338C10.6333 8.94678 10.9467 8.63338 11.3333 8.63338H11.34C11.7266 8.63338 12.04 8.94678 12.04 9.33338C12.04 9.71998 11.7266 10.0334 11.34 10.0334H11.3333C10.9467 10.0334 10.6333 9.71998 10.6333 9.33338Z"
      fill="currentColor"
    />
  </svg>
);
export default WalletMinimalIcon;
