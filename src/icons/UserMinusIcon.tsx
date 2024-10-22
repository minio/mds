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

const UserMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.00003 2.70005C4.91387 2.70005 4.03336 3.58056 4.03336 4.66672C4.03336 5.75288 4.91387 6.63338 6.00003 6.63338C7.08619 6.63338 7.96669 5.75288 7.96669 4.66672C7.96669 3.58056 7.08619 2.70005 6.00003 2.70005ZM2.63336 4.66672C2.63336 2.80736 4.14067 1.30005 6.00003 1.30005C7.85939 1.30005 9.36669 2.80736 9.36669 4.66672C9.36669 6.52607 7.85939 8.03338 6.00003 8.03338C4.14067 8.03338 2.63336 6.52607 2.63336 4.66672ZM9.96669 7.33338C9.96669 6.94678 10.2801 6.63338 10.6667 6.63338H14.6667C15.0533 6.63338 15.3667 6.94678 15.3667 7.33338C15.3667 7.71998 15.0533 8.03338 14.6667 8.03338H10.6667C10.2801 8.03338 9.96669 7.71998 9.96669 7.33338ZM1.61944 10.2861C2.25081 9.65475 3.10713 9.30005 4.00003 9.30005H8.00003C8.89292 9.30005 9.74925 9.65475 10.3806 10.2861C11.012 10.9175 11.3667 11.7738 11.3667 12.6667V14C11.3667 14.3866 11.0533 14.7 10.6667 14.7C10.2801 14.7 9.96669 14.3866 9.96669 14V12.6667C9.96669 12.1451 9.75949 11.6449 9.39067 11.2761C9.02185 10.9073 8.52162 10.7 8.00003 10.7H4.00003C3.47844 10.7 2.97821 10.9073 2.60939 11.2761C2.24056 11.6449 2.03336 12.1451 2.03336 12.6667V14C2.03336 14.3866 1.71996 14.7 1.33336 14.7C0.946762 14.7 0.633362 14.3866 0.633362 14V12.6667C0.633362 11.7738 0.988063 10.9175 1.61944 10.2861Z"
      fill="currentColor"
    />
  </svg>
);
export default UserMinusIcon;
