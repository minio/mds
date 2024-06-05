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

const SailboatIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.59192 0.637305C6.81307 0.613565 7.03234 0.696339 7.18264 0.860299L14.516 8.8603C14.7036 9.06493 14.7525 9.36107 14.6407 9.61517C14.5289 9.86927 14.2776 10.0333 14 10.0333H7.36663V11.3H14.6666C15.0532 11.3 15.3666 11.6134 15.3666 12C15.3666 12.8929 15.0119 13.7492 14.3806 14.3806C13.7492 15.0119 12.8929 15.3666 12 15.3666H3.99997C3.10707 15.3666 2.25075 15.0119 1.61937 14.3806C0.988002 13.7492 0.633301 12.8929 0.633301 12C0.633301 11.8143 0.707051 11.6363 0.838326 11.505C0.969601 11.3737 1.14765 11.3 1.3333 11.3H5.96663V10.0333H1.99997C1.74932 10.0333 1.5178 9.89929 1.39297 9.68195C1.26813 9.4646 1.26903 9.1971 1.39532 8.9806L6.06199 0.980597C6.17406 0.788473 6.37077 0.661045 6.59192 0.637305ZM7.36663 8.63331H12.4087L7.36663 3.13287V8.63331ZM5.96663 3.92255V8.63331H3.21869L5.96663 3.92255ZM2.16209 12.7C2.25988 12.9567 2.41131 13.1926 2.60932 13.3906C2.97815 13.7594 3.47838 13.9666 3.99997 13.9666H12C12.5216 13.9666 13.0218 13.7594 13.3906 13.3906C13.5886 13.1926 13.7401 12.9567 13.8378 12.7H2.16209Z"
      fill="currentColor"
    />
  </svg>
);
export default SailboatIcon;
