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

const PencilIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.2276 2.10958C13.072 2.04899 12.9052 2.02121 12.738 2.02811C12.5707 2.03501 12.4069 2.07644 12.257 2.14958C12.1071 2.22271 11.9746 2.32587 11.8677 2.4522C11.8552 2.46701 11.842 2.48129 11.8283 2.495L10.9899 3.33336L12.6667 5.01008L13.505 4.17172C13.521 4.1557 13.5378 4.14046 13.5553 4.12607C13.6836 4.02058 13.788 3.88999 13.8621 3.74283C13.9362 3.59568 13.9786 3.43504 13.9866 3.27112C13.9946 3.1072 13.9682 2.94333 13.9088 2.78987C13.8495 2.63641 13.7584 2.49655 13.6412 2.37935C13.524 2.26213 13.3832 2.17016 13.2276 2.10958ZM11.6767 6.00003L10 4.32331L2.95976 11.3636L2.33099 13.669L4.63647 13.0403L11.6767 6.00003ZM1.83836 10.5051C1.75222 10.5912 1.69005 10.6983 1.658 10.8158L0.657999 14.4825C0.591904 14.7249 0.660734 14.984 0.838359 15.1617C1.01598 15.3393 1.27517 15.4081 1.51752 15.342L5.18418 14.342C5.30171 14.31 5.40884 14.2478 5.49498 14.1617L14.4728 5.18382C14.7383 4.95912 14.9559 4.68334 15.1124 4.37265C15.2744 4.05102 15.3673 3.69918 15.3849 3.33957C15.4025 2.97996 15.3445 2.62075 15.2146 2.2849C15.0847 1.94906 14.8859 1.64413 14.6312 1.3894C14.3765 1.13468 14.0714 0.935746 13.7356 0.804986C13.3998 0.67423 13.0404 0.614438 12.6802 0.629297C12.3201 0.644157 11.9669 0.733355 11.643 0.891382C11.3286 1.04482 11.0484 1.25996 10.8194 1.52401L1.83836 10.5051Z"
      fill="currentColor"
    />
  </svg>
);
export default PencilIcon;
