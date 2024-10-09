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

const FilterXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.698328 1.70537C0.813029 1.45816 1.06078 1.29999 1.33331 1.29999H8.67531C9.06191 1.29999 9.37531 1.61339 9.37531 1.99999C9.37531 2.38659 9.06191 2.69999 8.67531 2.69999H2.84202L7.20114 7.85465C7.30801 7.98101 7.36664 8.14116 7.36664 8.30665V12.234L8.63331 12.8674V8.30665C8.63331 8.14012 8.69268 7.97904 8.80076 7.85235L9.40076 7.14902C9.65167 6.8549 10.0935 6.81987 10.3876 7.07077C10.6817 7.32168 10.7168 7.76351 10.4659 8.05763L10.0333 8.56467V14C10.0333 14.2426 9.90769 14.4679 9.70132 14.5954C9.49495 14.723 9.23725 14.7346 9.02026 14.6261L6.35359 13.2928C6.11644 13.1742 5.96664 12.9318 5.96664 12.6667V8.56296L0.798811 2.452C0.622833 2.2439 0.583627 1.95259 0.698328 1.70537ZM10.8383 1.50501C11.1117 1.23165 11.5549 1.23165 11.8283 1.50501L13 2.67671L14.1717 1.50501C14.445 1.23165 14.8883 1.23165 15.1616 1.50501C15.435 1.77838 15.435 2.2216 15.1616 2.49496L13.9899 3.66665L15.1616 4.83835C15.435 5.11171 15.435 5.55493 15.1616 5.8283C14.8883 6.10166 14.445 6.10166 14.1717 5.8283L13 4.6566L11.8283 5.8283C11.5549 6.10166 11.1117 6.10166 10.8383 5.8283C10.565 5.55493 10.565 5.11171 10.8383 4.83835L12.01 3.66665L10.8383 2.49496C10.565 2.2216 10.565 1.77838 10.8383 1.50501Z"
      fill="currentColor"
    />
  </svg>
);
export default FilterXIcon;
