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

const BoldIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.30005 2.66666C3.30005 2.28006 3.61345 1.96666 4.00005 1.96666H9.33338C10.2263 1.96666 11.0826 2.32136 11.714 2.95273C12.3453 3.58411 12.7 4.44043 12.7 5.33333C12.7 6.22622 12.3453 7.08255 11.714 7.71392C11.7024 7.72553 11.6907 7.73704 11.6789 7.74846C11.9333 7.89479 12.1695 8.07496 12.3806 8.28607C13.012 8.91744 13.3667 9.77376 13.3667 10.6667C13.3667 11.5596 13.012 12.4159 12.3806 13.0473C11.7493 13.6786 10.8929 14.0333 10 14.0333H4.00005C3.61345 14.0333 3.30005 13.7199 3.30005 13.3333V2.66666ZM9.33338 7.29999C9.85497 7.29999 10.3552 7.09279 10.724 6.72397C11.0928 6.35515 11.3 5.85492 11.3 5.33333C11.3 4.81173 11.0928 4.3115 10.724 3.94268C10.3552 3.57386 9.85497 3.36666 9.33338 3.36666H4.70005V7.29999H9.33338ZM4.70005 8.69999H10C10.5216 8.69999 11.0219 8.90719 11.3907 9.27602C11.7595 9.64484 11.9667 10.1451 11.9667 10.6667C11.9667 11.1883 11.7595 11.6885 11.3907 12.0573C11.0219 12.4261 10.5216 12.6333 10 12.6333H4.70005V8.69999Z"
      fill="currentColor"
    />
  </svg>
);
export default BoldIcon;
