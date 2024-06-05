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

const ShoppingBagIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.44005 0.913301C3.57225 0.737037 3.77972 0.633301 4.00005 0.633301H12C12.2204 0.633301 12.4279 0.737037 12.56 0.913301L14.56 3.57997C14.6509 3.70113 14.7 3.84851 14.7 3.99997V13.3333C14.7 13.8726 14.4858 14.3898 14.1045 14.7711C13.7232 15.1524 13.206 15.3666 12.6667 15.3666H3.33338C2.79411 15.3666 2.27692 15.1524 1.8956 14.7711C1.51427 14.3898 1.30005 13.8726 1.30005 13.3333V3.99997C1.30005 3.84851 1.34917 3.70113 1.44005 3.57997L3.44005 0.913301ZM4.35005 2.0333L3.40005 3.29997H12.6L11.65 2.0333H4.35005ZM13.3 4.69997H2.70005V13.3333C2.70005 13.5013 2.76677 13.6624 2.88555 13.7811C3.00432 13.8999 3.16541 13.9666 3.33338 13.9666H12.6667C12.8347 13.9666 12.9958 13.8999 13.1145 13.7811C13.2333 13.6624 13.3 13.5013 13.3 13.3333V4.69997ZM5.33338 5.96663C5.71998 5.96663 6.03338 6.28003 6.03338 6.66663C6.03338 7.18823 6.24058 7.68846 6.60941 8.05728C6.97823 8.4261 7.47846 8.6333 8.00005 8.6333C8.52164 8.6333 9.02187 8.4261 9.39069 8.05728C9.75951 7.68846 9.96671 7.18823 9.96672 6.66663C9.96672 6.28003 10.2801 5.96663 10.6667 5.96663C11.0533 5.96663 11.3667 6.28003 11.3667 6.66663C11.3667 7.55953 11.012 8.41585 10.3806 9.04723C9.74927 9.6786 8.89294 10.0333 8.00005 10.0333C7.10715 10.0333 6.25083 9.6786 5.61946 9.04723C4.98808 8.41585 4.63338 7.55953 4.63338 6.66663C4.63338 6.28003 4.94678 5.96663 5.33338 5.96663Z"
      fill="currentColor"
    />
  </svg>
);
export default ShoppingBagIcon;
