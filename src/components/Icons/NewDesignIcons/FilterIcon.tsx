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

const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.698328 1.70537C0.813029 1.45816 1.06078 1.29999 1.33331 1.29999H14.6666C14.9392 1.29999 15.1869 1.45816 15.3016 1.70537C15.4163 1.95259 15.3771 2.2439 15.2011 2.452L10.0333 8.56296V14C10.0333 14.2426 9.90769 14.4679 9.70132 14.5954C9.49495 14.723 9.23725 14.7346 9.02026 14.6261L6.35359 13.2928C6.11644 13.1742 5.96664 12.9318 5.96664 12.6667V8.56296L0.798811 2.452C0.622833 2.2439 0.583627 1.95259 0.698328 1.70537ZM2.84202 2.69999L7.20114 7.85465C7.30801 7.98101 7.36664 8.14116 7.36664 8.30665V12.234L8.63331 12.8674V8.30665C8.63331 8.14116 8.69195 7.98101 8.79881 7.85465L13.1579 2.69999H2.84202Z"
      fill="currentColor"
    />
  </svg>
);
export default FilterIcon;
