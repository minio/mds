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

const Heading2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66667 3.29999C3.05327 3.29999 3.36667 3.61339 3.36667 3.99999V7.29999H7.30001V3.99999C7.30001 3.61339 7.61341 3.29999 8.00001 3.29999C8.38661 3.29999 8.70001 3.61339 8.70001 3.99999V12C8.70001 12.3866 8.38661 12.7 8.00001 12.7C7.61341 12.7 7.30001 12.3866 7.30001 12V8.69999H3.36667V12C3.36667 12.3866 3.05327 12.7 2.66667 12.7C2.28008 12.7 1.96667 12.3866 1.96667 12V3.99999C1.96667 3.61339 2.28008 3.29999 2.66667 3.29999ZM13.388 6.25258C14.133 6.5009 14.7 7.15774 14.7 7.99999C14.7 8.68623 14.4596 9.19178 14.0883 9.57851C13.8063 9.87229 13.4426 10.0951 13.1639 10.2658C13.1194 10.293 13.0771 10.3189 13.0377 10.3436C12.7133 10.5463 12.4811 10.7161 12.3161 10.943C12.2475 11.0373 12.1831 11.1523 12.1331 11.3H14C14.3866 11.3 14.7 11.6134 14.7 12C14.7 12.3866 14.3866 12.7 14 12.7H11.3333C10.9467 12.7 10.6333 12.3866 10.6333 12C10.6333 11.2061 10.8354 10.5986 11.1839 10.1195C11.5189 9.65887 11.9534 9.37034 12.2957 9.15639C12.3513 9.12163 12.4037 9.08917 12.4532 9.05853C12.7417 8.87986 12.9307 8.76276 13.0784 8.60897C13.2071 8.47486 13.3 8.31375 13.3 7.99999C13.3 7.84223 13.2003 7.66574 12.9453 7.58073C12.6985 7.49845 12.2681 7.50725 11.7533 7.89332C11.4441 8.12528 11.0053 8.0626 10.7733 7.75332C10.5414 7.44404 10.6041 7.00528 10.9133 6.77332C11.7319 6.15939 12.6349 6.00153 13.388 6.25258Z"
      fill="currentColor"
    />
  </svg>
);
export default Heading2Icon;
