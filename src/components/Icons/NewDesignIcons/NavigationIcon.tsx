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

const NavigationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.1616 0.838346C15.3708 1.04753 15.4259 1.36563 15.2992 1.63298L9.29923 14.2996C9.17266 14.5668 8.89186 14.7257 8.59763 14.6966C8.30341 14.6674 8.05922 14.4566 7.98751 14.1698L6.75604 9.24389L1.83017 8.01242C1.54334 7.94071 1.33248 7.69652 1.30335 7.4023C1.27422 7.10807 1.43308 6.82727 1.70028 6.7007L14.367 0.700704C14.6343 0.574064 14.9524 0.629163 15.1616 0.838346ZM4.06729 7.12861L7.50305 7.98755C7.75385 8.05025 7.94968 8.24608 8.01238 8.49688L8.87132 11.9326L13.1949 2.80499L4.06729 7.12861Z"
      fill="currentColor"
    />
  </svg>
);
export default NavigationIcon;
