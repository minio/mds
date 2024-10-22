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

const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C3.16535 2.70005 3.00426 2.76677 2.88549 2.88555C2.76671 3.00432 2.69999 3.16541 2.69999 3.33338C2.69999 3.50135 2.76671 3.66244 2.88549 3.78122C3.00426 3.89999 3.16535 3.96672 3.33332 3.96672H11.9667V2.70005H3.33332ZM13.3667 3.96672V2.00005C13.3667 1.61345 13.0533 1.30005 12.6667 1.30005H3.33332C2.79405 1.30005 2.27686 1.51427 1.89554 1.8956C1.51421 2.27692 1.29999 2.79411 1.29999 3.33338V12.6667C1.29999 13.206 1.51421 13.7232 1.89554 14.1045C2.27686 14.4858 2.79405 14.7 3.33332 14.7H14C14.3866 14.7 14.7 14.3866 14.7 14V11.3659C15.0711 11.3485 15.3667 11.0421 15.3667 10.6667V8.00005C15.3667 7.62462 15.0711 7.31823 14.7 7.30083V4.66672C14.7 4.28012 14.3866 3.96672 14 3.96672H13.3667ZM3.33332 5.36672C3.11615 5.36672 2.90256 5.33197 2.69999 5.26557V12.6667C2.69999 12.8347 2.76671 12.9958 2.88549 13.1145C3.00426 13.2333 3.16535 13.3 3.33332 13.3H13.3V11.3667H12C11.4607 11.3667 10.9435 11.1525 10.5622 10.7712C10.1809 10.3898 9.96665 9.87266 9.96665 9.33338C9.96665 8.79411 10.1809 8.27692 10.5622 7.8956C10.9435 7.51428 11.4607 7.30005 12 7.30005H13.3V5.36672H3.33332ZM13.9667 8.70005H12C11.832 8.70005 11.6709 8.76677 11.5522 8.88555C11.4334 9.00432 11.3667 9.16541 11.3667 9.33338C11.3667 9.50135 11.4334 9.66244 11.5522 9.78122C11.6709 9.89999 11.832 9.96672 12 9.96672H13.9667V8.70005Z"
      fill="currentColor"
    />
  </svg>
);
export default WalletIcon;
