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

const BusFrontIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 2.7C3.65022 2.7 3.36667 2.98355 3.36667 3.33333V3.98484C3.36687 3.9946 3.36687 4.00435 3.36667 4.01408V6.63333H12.6333V4.01408C12.6331 4.00435 12.6331 3.9946 12.6333 3.98484V3.33333C12.6333 2.98355 12.3498 2.7 12 2.7H4ZM14.0333 3.56738V3.33333C14.0333 2.21035 13.123 1.3 12 1.3H4C2.87702 1.3 1.96667 2.21035 1.96667 3.33333V3.56738L1.02028 4.04057C0.674498 4.21346 0.534341 4.63393 0.707233 4.97972C0.880125 5.3255 1.3006 5.46566 1.64638 5.29277L1.96667 5.13262V11.3333C1.96667 12.2103 2.52189 12.9577 3.3 13.243V14C3.3 14.3866 3.6134 14.7 4 14.7C4.3866 14.7 4.7 14.3866 4.7 14V13.3667H11.3V14C11.3 14.3866 11.6134 14.7 12 14.7C12.3866 14.7 12.7 14.3866 12.7 14V13.243C13.4781 12.9577 14.0333 12.2103 14.0333 11.3333V5.13262L14.3536 5.29277C14.6994 5.46566 15.1199 5.3255 15.2928 4.97972C15.4657 4.63393 15.3255 4.21346 14.9797 4.04057L14.0333 3.56738ZM12.6333 8.03333H3.36667V11.3333C3.36667 11.6831 3.65022 11.9667 4 11.9667H12C12.3498 11.9667 12.6333 11.6831 12.6333 11.3333V8.03333ZM5.96667 4C5.96667 3.6134 6.28007 3.3 6.66667 3.3H9.33333C9.71993 3.3 10.0333 3.6134 10.0333 4C10.0333 4.3866 9.71993 4.7 9.33333 4.7H6.66667C6.28007 4.7 5.96667 4.3866 5.96667 4ZM4.63333 10C4.63333 9.6134 4.94673 9.3 5.33333 9.3H5.34C5.7266 9.3 6.04 9.6134 6.04 10C6.04 10.3866 5.7266 10.7 5.34 10.7H5.33333C4.94673 10.7 4.63333 10.3866 4.63333 10ZM9.96667 10C9.96667 9.6134 10.2801 9.3 10.6667 9.3H10.6733C11.0599 9.3 11.3733 9.6134 11.3733 10C11.3733 10.3866 11.0599 10.7 10.6733 10.7H10.6667C10.2801 10.7 9.96667 10.3866 9.96667 10Z"
      fill="currentColor"
    />
  </svg>
);
export default BusFrontIcon;
