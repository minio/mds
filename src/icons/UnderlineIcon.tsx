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

const UnderlineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 1.96667C4.3866 1.96667 4.7 2.28008 4.7 2.66667V6.66667C4.7 7.54189 5.04768 8.38126 5.66655 9.00013C6.28542 9.619 7.12479 9.96667 8 9.96667C8.87522 9.96667 9.71458 9.619 10.3335 9.00013C10.9523 8.38126 11.3 7.54189 11.3 6.66667V2.66667C11.3 2.28008 11.6134 1.96667 12 1.96667C12.3866 1.96667 12.7 2.28008 12.7 2.66667V6.66667C12.7 7.91319 12.2048 9.10866 11.3234 9.99008C10.442 10.8715 9.24652 11.3667 8 11.3667C6.75348 11.3667 5.55802 10.8715 4.6766 9.99008C3.79518 9.10866 3.3 7.91319 3.3 6.66667V2.66667C3.3 2.28008 3.6134 1.96667 4 1.96667ZM1.96667 13.3333C1.96667 12.9467 2.28007 12.6333 2.66667 12.6333H13.3333C13.7199 12.6333 14.0333 12.9467 14.0333 13.3333C14.0333 13.7199 13.7199 14.0333 13.3333 14.0333H2.66667C2.28007 14.0333 1.96667 13.7199 1.96667 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default UnderlineIcon;
