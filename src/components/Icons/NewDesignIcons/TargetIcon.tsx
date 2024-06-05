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

const TargetIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00003 2.0333C4.70473 2.0333 2.03336 4.70467 2.03336 7.99997C2.03336 11.2953 4.70473 13.9666 8.00003 13.9666C11.2953 13.9666 13.9667 11.2953 13.9667 7.99997C13.9667 4.70467 11.2953 2.0333 8.00003 2.0333ZM0.633362 7.99997C0.633362 3.93147 3.93153 0.633301 8.00003 0.633301C12.0685 0.633301 15.3667 3.93147 15.3667 7.99997C15.3667 12.0685 12.0685 15.3666 8.00003 15.3666C3.93153 15.3666 0.633362 12.0685 0.633362 7.99997ZM8.00003 4.69997C6.17749 4.69997 4.70003 6.17743 4.70003 7.99997C4.70003 9.82251 6.17749 11.3 8.00003 11.3C9.82257 11.3 11.3 9.82251 11.3 7.99997C11.3 6.17743 9.82257 4.69997 8.00003 4.69997ZM3.30003 7.99997C3.30003 5.40423 5.40429 3.29997 8.00003 3.29997C10.5958 3.29997 12.7 5.40423 12.7 7.99997C12.7 10.5957 10.5958 12.7 8.00003 12.7C5.40429 12.7 3.30003 10.5957 3.30003 7.99997ZM8.00003 7.36663C7.65025 7.36663 7.36669 7.65019 7.36669 7.99997C7.36669 8.34975 7.65025 8.6333 8.00003 8.6333C8.34981 8.6333 8.63336 8.34975 8.63336 7.99997C8.63336 7.65019 8.34981 7.36663 8.00003 7.36663ZM5.96669 7.99997C5.96669 6.87699 6.87705 5.96663 8.00003 5.96663C9.12301 5.96663 10.0334 6.87699 10.0334 7.99997C10.0334 9.12295 9.12301 10.0333 8.00003 10.0333C6.87705 10.0333 5.96669 9.12295 5.96669 7.99997Z"
      fill="currentColor"
    />
  </svg>
);
export default TargetIcon;
