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

const PenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.2276 2.10958C13.072 2.04899 12.9052 2.02121 12.7379 2.02811C12.5707 2.03501 12.4069 2.07644 12.257 2.14958C12.1071 2.22271 11.9746 2.32587 11.8677 2.4522C11.8551 2.46701 11.842 2.48129 11.8283 2.495L2.95974 11.3636L2.33097 13.669L4.63646 13.0403L13.505 4.17172C13.521 4.1557 13.5378 4.14046 13.5553 4.12607C13.6836 4.02058 13.788 3.88999 13.8621 3.74283C13.9362 3.59568 13.9785 3.43504 13.9866 3.27112C13.9946 3.1072 13.9681 2.94333 13.9088 2.78987C13.8494 2.63641 13.7584 2.49655 13.6412 2.37935C13.524 2.26213 13.3832 2.17016 13.2276 2.10958ZM12.6802 0.629297C13.0403 0.614438 13.3997 0.67423 13.7356 0.804986C14.0714 0.935746 14.3764 1.13468 14.6312 1.3894C14.8859 1.64413 15.0847 1.94906 15.2146 2.2849C15.3444 2.62075 15.4025 2.97996 15.3849 3.33957C15.3673 3.69918 15.2744 4.05102 15.1124 4.37265C14.9559 4.68334 14.7383 4.95912 14.4728 5.18382L5.49496 14.1617C5.40882 14.2478 5.30169 14.31 5.18417 14.342L1.5175 15.342C1.27515 15.4081 1.01597 15.3393 0.838342 15.1617C0.660717 14.984 0.591887 14.7249 0.657982 14.4825L1.65798 10.8158C1.69003 10.6983 1.7522 10.5912 1.83834 10.5051L10.8194 1.52401C11.0484 1.25996 11.3286 1.04482 11.643 0.891382C11.9669 0.733355 12.3201 0.644157 12.6802 0.629297Z"
      fill="currentColor"
    />
  </svg>
);
export default PenIcon;
