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

const BucketIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.03334 2.69999V4.63332H13.9667V2.69999H2.03334ZM14.0333 6.03292C14.7727 6.01522 15.3667 5.4103 15.3667 4.66665V2.66665C15.3667 1.91187 14.7548 1.29999 14 1.29999H2C1.24521 1.29999 0.633335 1.91187 0.633335 2.66665V4.66665C0.633335 5.4103 1.22728 6.01522 1.96667 6.03292V12.6667C1.96667 13.2059 2.18089 13.7231 2.56222 14.1044C2.94354 14.4858 3.46073 14.7 4 14.7H12C12.5393 14.7 13.0565 14.4858 13.4378 14.1044C13.8191 13.7231 14.0333 13.2059 14.0333 12.6667V6.03292ZM12.6333 6.03332H3.36667V12.6667C3.36667 12.8346 3.43339 12.9957 3.55217 13.1145C3.67094 13.2333 3.83203 13.3 4 13.3H12C12.168 13.3 12.3291 13.2333 12.4478 13.1145C12.5666 12.9957 12.6333 12.8346 12.6333 12.6667V6.03332ZM3.96667 7.99999C3.96667 7.61339 4.28007 7.29999 4.66667 7.29999H11.3333C11.7199 7.29999 12.0333 7.61339 12.0333 7.99999C12.0333 8.38659 11.7199 8.69999 11.3333 8.69999H4.66667C4.28007 8.69999 3.96667 8.38659 3.96667 7.99999ZM3.96667 10.6667C3.96667 10.2801 4.28007 9.96665 4.66667 9.96665H11.3333C11.7199 9.96665 12.0333 10.2801 12.0333 10.6667C12.0333 11.0533 11.7199 11.3667 11.3333 11.3667H4.66667C4.28007 11.3667 3.96667 11.0533 3.96667 10.6667Z"
      fill="currentColor"
      fillOpacity="0.65"
    />
  </svg>
);

export default BucketIcon;
