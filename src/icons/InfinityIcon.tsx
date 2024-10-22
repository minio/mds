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

const InfinityIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.61937 5.61944C2.25075 4.98806 3.10707 4.63336 3.99997 4.63336C5.44386 4.63336 6.77379 5.46375 7.99997 6.88247C9.22615 5.46375 10.5561 4.63336 12 4.63336C12.8929 4.63336 13.7492 4.98806 14.3806 5.61944C15.0119 6.25081 15.3666 7.10713 15.3666 8.00003C15.3666 8.89292 15.0119 9.74925 14.3806 10.3806C13.7492 11.012 12.8929 11.3667 12 11.3667C10.5561 11.3667 9.22615 10.5363 7.99997 9.11759C6.77379 10.5363 5.44386 11.3667 3.99997 11.3667C3.10707 11.3667 2.25075 11.012 1.61937 10.3806C0.988002 9.74925 0.633301 8.89292 0.633301 8.00003C0.633301 7.10713 0.988002 6.25081 1.61937 5.61944ZM7.11114 8.00003C5.95518 6.59071 4.91412 6.03336 3.99997 6.03336C3.47837 6.03336 2.97815 6.24056 2.60932 6.60939C2.2405 6.97821 2.0333 7.47844 2.0333 8.00003C2.0333 8.52162 2.2405 9.02185 2.60932 9.39067C2.97815 9.75949 3.47837 9.9667 3.99997 9.9667C4.91412 9.9667 5.95518 9.40934 7.11114 8.00003ZM8.88879 8.00003C10.0448 9.40934 11.0858 9.9667 12 9.9667C12.5216 9.9667 13.0218 9.75949 13.3906 9.39067C13.7594 9.02185 13.9666 8.52162 13.9666 8.00003C13.9666 7.47844 13.7594 6.97821 13.3906 6.60939C13.0218 6.24056 12.5216 6.03336 12 6.03336C11.0858 6.03336 10.0448 6.59071 8.88879 8.00003Z"
      fill="currentColor"
    />
  </svg>
);
export default InfinityIcon;
