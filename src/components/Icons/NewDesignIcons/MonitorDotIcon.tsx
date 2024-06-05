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

const MonitorDotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6667 2.69999C2.49872 2.69999 2.33763 2.76671 2.21886 2.88549C2.10009 3.00426 2.03336 3.16535 2.03336 3.33332V9.99999C2.03336 10.168 2.10009 10.329 2.21886 10.4478C2.33763 10.5666 2.49873 10.6333 2.6667 10.6333H13.3334C13.5013 10.6333 13.6624 10.5666 13.7812 10.4478C13.9 10.329 13.9667 10.168 13.9667 9.99999V7.99999C13.9667 7.61339 14.2801 7.29999 14.6667 7.29999C15.0533 7.29999 15.3667 7.61339 15.3667 7.99999V9.99999C15.3667 10.5393 15.1525 11.0564 14.7711 11.4378C14.3898 11.8191 13.8726 12.0333 13.3334 12.0333H8.70003V13.3H10.6667C11.0533 13.3 11.3667 13.6134 11.3667 14C11.3667 14.3866 11.0533 14.7 10.6667 14.7H5.33336C4.94676 14.7 4.63336 14.3866 4.63336 14C4.63336 13.6134 4.94676 13.3 5.33336 13.3H7.30003V12.0333H2.6667C2.12742 12.0333 1.61023 11.8191 1.22891 11.4378C0.847587 11.0564 0.633362 10.5393 0.633362 9.99999V3.33332C0.633362 2.79405 0.847587 2.27686 1.22891 1.89554C1.61024 1.51421 2.12742 1.29999 2.6667 1.29999H8.66669C9.05329 1.29999 9.36669 1.61339 9.36669 1.99999C9.36669 2.38659 9.05329 2.69999 8.66669 2.69999H2.6667ZM12.6667 2.69999C11.9487 2.69999 11.3667 3.28202 11.3667 3.99999C11.3667 4.71796 11.9487 5.29999 12.6667 5.29999C13.3847 5.29999 13.9667 4.71796 13.9667 3.99999C13.9667 3.28202 13.3847 2.69999 12.6667 2.69999ZM9.96669 3.99999C9.96669 2.50882 11.1755 1.29999 12.6667 1.29999C14.1579 1.29999 15.3667 2.50882 15.3667 3.99999C15.3667 5.49116 14.1579 6.69999 12.6667 6.69999C11.1755 6.69999 9.96669 5.49116 9.96669 3.99999Z"
      fill="currentColor"
    />
  </svg>
);
export default MonitorDotIcon;
