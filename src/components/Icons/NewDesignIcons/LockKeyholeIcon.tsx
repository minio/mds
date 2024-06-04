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

const LockKeyholeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00005 2.03336C7.30165 2.03336 6.63185 2.3108 6.138 2.80465C5.64416 3.29849 5.36672 3.96829 5.36672 4.6667V5.96669H10.6334V4.66669C10.6334 3.96829 10.3559 3.29849 9.8621 2.80465C9.36825 2.3108 8.69845 2.03336 8.00005 2.03336ZM12.0334 5.96669V4.66669C12.0334 3.59699 11.6084 2.57109 10.852 1.8147C10.0956 1.0583 9.06976 0.633362 8.00005 0.633362C6.93034 0.633362 5.90445 1.0583 5.14805 1.8147C4.39165 2.57109 3.96672 3.59699 3.96672 4.66669V5.96669H3.33338C2.2104 5.96669 1.30005 6.87705 1.30005 8.00003V13.3334C1.30005 14.4563 2.2104 15.3667 3.33338 15.3667H12.6667C13.7897 15.3667 14.7 14.4563 14.7 13.3334V8.00003C14.7 6.87705 13.7897 5.96669 12.6667 5.96669H12.0334ZM3.33338 7.36669C2.9836 7.36669 2.70005 7.65025 2.70005 8.00003V13.3334C2.70005 13.6831 2.9836 13.9667 3.33338 13.9667H12.6667C13.0165 13.9667 13.3 13.6831 13.3 13.3334V8.00003C13.3 7.65025 13.0165 7.36669 12.6667 7.36669H3.33338ZM8.00005 10.7C8.01846 10.7 8.03338 10.6851 8.03338 10.6667C8.03338 10.6483 8.01846 10.6334 8.00005 10.6334C7.98164 10.6334 7.96672 10.6483 7.96672 10.6667C7.96672 10.6851 7.98164 10.7 8.00005 10.7ZM6.63338 10.6667C6.63338 9.91191 7.24526 9.30003 8.00005 9.30003C8.75484 9.30003 9.36672 9.91191 9.36672 10.6667C9.36672 11.4215 8.75484 12.0334 8.00005 12.0334C7.24526 12.0334 6.63338 11.4215 6.63338 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default LockKeyholeIcon;
