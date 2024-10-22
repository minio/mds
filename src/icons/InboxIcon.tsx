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

const InboxIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.82663 1.96667L11.1733 1.96667C11.5516 1.96688 11.9227 2.0726 12.2442 2.27196C12.5654 2.47114 12.8247 2.75589 12.993 3.09424C12.9932 3.09455 12.9934 3.09486 12.9935 3.09518L15.2926 7.6866C15.3413 7.78389 15.3666 7.8912 15.3666 8.00001V12C15.3666 12.5393 15.1524 13.0565 14.7711 13.4378C14.3898 13.8191 13.8726 14.0333 13.3333 14.0333H2.66663C2.12736 14.0333 1.61017 13.8191 1.22885 13.4378C0.847526 13.0565 0.633301 12.5393 0.633301 12V8.00001C0.633301 7.8912 0.658666 7.78389 0.707384 7.6866L3.00643 3.09518C3.0066 3.09483 3.00677 3.09449 3.00694 3.09414C3.17529 2.75583 3.4346 2.47112 3.75576 2.27196C4.07725 2.0726 4.44835 1.96688 4.82663 1.96667ZM4.82683 3.36667C4.70906 3.36677 4.59366 3.3997 4.49357 3.46176C4.39343 3.52386 4.3126 3.61266 4.26017 3.71817L4.25922 3.72009L2.46666 7.30001H5.3333C5.56735 7.30001 5.78591 7.41698 5.91574 7.61172L7.04126 9.30001H8.95867L10.0842 7.61172C10.214 7.41698 10.4326 7.30001 10.6666 7.30001H13.5333L11.7407 3.72009L11.7398 3.71817C11.6873 3.61266 11.6065 3.52386 11.5064 3.46176C11.4063 3.3997 11.2909 3.36677 11.1731 3.36667H4.82683ZM13.9666 8.70001H11.0413L9.91574 10.3883C9.78591 10.583 9.56735 10.7 9.3333 10.7H6.66663C6.43259 10.7 6.21402 10.583 6.0842 10.3883L4.95867 8.70001H2.0333V12C2.0333 12.168 2.10003 12.3291 2.2188 12.4478C2.33757 12.5666 2.49866 12.6333 2.66663 12.6333H13.3333C13.5013 12.6333 13.6624 12.5666 13.7811 12.4478C13.8999 12.3291 13.9666 12.168 13.9666 12V8.70001Z"
      fill="currentColor"
    />
  </svg>
);
export default InboxIcon;
