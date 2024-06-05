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

const OctagonAlertIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.74499 0.838326C4.87627 0.707051 5.05432 0.633301 5.23997 0.633301H10.76C10.9456 0.633301 11.1237 0.707051 11.2549 0.838326L15.1616 4.74499C15.2929 4.87627 15.3666 5.05432 15.3666 5.23997V10.76C15.3666 10.9456 15.2929 11.1237 15.1616 11.2549L11.2549 15.1616C11.1237 15.2929 10.9456 15.3666 10.76 15.3666H5.23997C5.05432 15.3666 4.87627 15.2929 4.74499 15.1616L0.838326 11.2549C0.707051 11.1237 0.633301 10.9456 0.633301 10.76V5.23997C0.633301 5.05432 0.707051 4.87627 0.838326 4.74499L4.74499 0.838326ZM5.52992 2.0333L2.0333 5.52992V10.47L5.52992 13.9666H10.47L13.9666 10.47V5.52992L10.47 2.0333H5.52992ZM7.99997 4.6333C8.38657 4.6333 8.69997 4.9467 8.69997 5.3333V7.99997C8.69997 8.38657 8.38657 8.69997 7.99997 8.69997C7.61337 8.69997 7.29997 8.38657 7.29997 7.99997V5.3333C7.29997 4.9467 7.61337 4.6333 7.99997 4.6333ZM7.29997 10.6666C7.29997 10.28 7.61337 9.96663 7.99997 9.96663H8.00663C8.39323 9.96663 8.70663 10.28 8.70663 10.6666C8.70663 11.0532 8.39323 11.3666 8.00663 11.3666H7.99997C7.61337 11.3666 7.29997 11.0532 7.29997 10.6666Z"
      fill="currentColor"
    />
  </svg>
);
export default OctagonAlertIcon;
