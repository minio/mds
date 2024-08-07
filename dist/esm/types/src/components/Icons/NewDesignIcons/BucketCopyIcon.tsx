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

const BucketCopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M1.33333 0.633301C0.946732 0.633301 0.633331 0.946701 0.633331 1.3333V3.66663C0.633331 4.05323 0.946732 4.36663 1.33333 4.36663H1.48458L2.19317 10.7439C2.23256 11.0984 2.53221 11.3666 2.88889 11.3666H3.66666C4.05326 11.3666 4.36666 11.0532 4.36666 10.6666C4.36666 10.28 4.05326 9.96661 3.66666 9.96661H3.51542L2.80683 3.58931C2.76495 3.21236 2.43106 2.93874 2.05562 2.96881C2.04822 2.96823 2.04079 2.96776 2.03333 2.96741V2.0333H9.96666V2.66663C9.96666 3.05323 10.2801 3.36663 10.6667 3.36663C11.0533 3.36663 11.3667 3.05323 11.3667 2.66663V1.3333C11.3667 0.946701 11.0533 0.633301 10.6667 0.633301H1.33333Z"
      fill="currentColor"
    />
    <path
      d="M7.74444 10C7.74444 9.61345 8.05784 9.30005 8.44444 9.30005H11.5555C11.9421 9.30005 12.2555 9.61345 12.2555 10C12.2555 10.3866 11.9421 10.7 11.5555 10.7H8.44444C8.05784 10.7 7.74444 10.3866 7.74444 10Z"
      fill="currentColor"
    />
    <path
      d="M9.22223 11.6333C8.83563 11.6333 8.52223 11.9467 8.52223 12.3333C8.52223 12.7199 8.83563 13.0333 9.22223 13.0333H10.7778C11.1644 13.0333 11.4778 12.7199 11.4778 12.3333C11.4778 11.9467 11.1644 11.6333 10.7778 11.6333H9.22223Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.33333 4.6333C4.94673 4.6333 4.63333 4.9467 4.63333 5.3333V7.66663C4.63333 8.05323 4.94673 8.36663 5.33333 8.36663H5.48459L6.19317 14.7439C6.23256 15.0984 6.53221 15.3666 6.88889 15.3666H13.1111C13.4678 15.3666 13.7674 15.0984 13.8068 14.7439L14.5154 8.36663H14.6667C15.0533 8.36663 15.3667 8.05323 15.3667 7.66663V5.3333C15.3667 4.9467 15.0533 4.6333 14.6667 4.6333H5.33333ZM13.8889 6.96655L13.8996 6.96663H13.9667V6.0333H6.03333V6.96663H6.10045L6.11111 6.96655H13.8889ZM7.51542 13.9666L6.89321 8.36663H13.1068L12.4846 13.9666H7.51542Z"
      fill="currentColor"
    />
  </svg>
);
export default BucketCopyIcon;
