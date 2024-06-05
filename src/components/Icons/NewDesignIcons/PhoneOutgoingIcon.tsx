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

const PhoneOutgoingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.6667 2.03334C10.2801 2.03334 9.96666 1.71994 9.96666 1.33334C9.96666 0.946745 10.2801 0.633344 10.6667 0.633344H14.6667C15.0533 0.633344 15.3667 0.946745 15.3667 1.33334V5.33334C15.3667 5.71994 15.0533 6.03334 14.6667 6.03334C14.2801 6.03334 13.9667 5.71994 13.9667 5.33334V3.02329L11.1616 5.82832C10.8883 6.10169 10.4451 6.10169 10.1717 5.82832C9.89832 5.55495 9.89832 5.11174 10.1717 4.83837L12.9767 2.03334H10.6667Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.1547 4.25623C3.72714 8.77798 7.02045 12.0163 11.4762 13.6222C12.1032 13.8482 12.6945 13.692 13.1313 13.3048C13.5768 12.9098 13.8584 12.2714 13.7896 11.5559C13.7415 11.0565 13.3937 10.6369 12.9118 10.4972L11.8338 10.1846C11.4368 10.0694 11.0095 10.2059 10.7527 10.5298C10.3334 11.0587 9.55424 11.3098 8.8772 10.9229C7.43358 10.098 5.76069 8.46349 4.91203 7.02122C4.50388 6.32759 4.75877 5.52455 5.29424 5.08803C5.68163 4.77222 5.81629 4.23986 5.62566 3.77784L5.1723 2.67906C4.98435 2.22355 4.54024 1.92637 4.04748 1.92637C2.66169 1.92637 1.76484 3.13516 2.1547 4.25623ZM11.0015 14.9393C6.16023 13.1944 2.54766 9.64858 0.832371 4.71607C0.0622589 2.50153 1.90172 0.526368 4.04748 0.526367C5.10719 0.526367 6.06227 1.16548 6.46646 2.14508L6.91982 3.24386C7.34604 4.27684 7.04496 5.46707 6.17884 6.17314C6.1393 6.20538 6.12032 6.24276 6.11436 6.26896C6.10933 6.29104 6.1131 6.30181 6.11864 6.31123C6.8409 7.53869 8.33533 9.00083 9.57177 9.70734C9.57328 9.7082 9.57424 9.70861 9.57483 9.70881C9.57477 9.7088 9.57541 9.709 9.57483 9.70881C9.57555 9.7089 9.58036 9.7095 9.5879 9.70771C9.60433 9.70381 9.63147 9.69054 9.65554 9.66018C10.2656 8.89056 11.2806 8.56641 12.2238 8.83996L13.3018 9.15259C14.3346 9.45212 15.0802 10.3514 15.1831 11.4218C15.2949 12.5836 14.8399 13.6609 14.0601 14.3523C13.2714 15.0516 12.1487 15.3527 11.0015 14.9393Z"
      fill="currentColor"
    />
  </svg>
);
export default PhoneOutgoingIcon;
