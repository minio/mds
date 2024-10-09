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

const Package2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.7981 1.30005C11.8048 1.30005 12.728 1.86033 13.1929 2.75309L14.6751 5.59908C14.7749 5.79078 14.7773 6.00743 14.7 6.19243V12.6667C14.7 13.206 14.4858 13.7232 14.1045 14.1045C13.7232 14.4858 13.206 14.7 12.6667 14.7H3.33338C2.79411 14.7 2.27692 14.4858 1.8956 14.1045C1.51427 13.7232 1.30005 13.206 1.30005 12.6667V6.00005C1.30005 5.77639 1.40494 5.57723 1.56821 5.44908L2.81105 2.8392C3.2588 1.89897 4.20736 1.30005 5.24876 1.30005H10.7981ZM3.18982 5.30005L4.07505 3.44112C4.29063 2.98842 4.74735 2.70005 5.24876 2.70005H7.30005V5.30005H3.18982ZM12.9408 5.30005H8.70005V2.70005H10.7981C11.2827 2.70005 11.7273 2.9698 11.9512 3.39976L12.9408 5.30005ZM2.70005 6.70005H13.3V12.6667C13.3 12.8347 13.2333 12.9958 13.1145 13.1145C12.9958 13.2333 12.8347 13.3 12.6667 13.3H3.33338C3.16541 13.3 3.00432 13.2333 2.88555 13.1145C2.76677 12.9958 2.70005 12.8347 2.70005 12.6667V6.70005Z"
      fill="currentColor"
    />
  </svg>
);
export default Package2Icon;
