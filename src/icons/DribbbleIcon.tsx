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

const DribbbleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.03347 7.95841C2.03338 7.97226 2.03333 7.98612 2.03333 8C2.03333 9.46579 2.56188 10.8081 3.43879 11.8468C4.9456 10.0986 6.68622 8.84106 8.63708 8.16589C8.53731 7.92414 8.43477 7.68778 8.32881 7.45518C8.25324 7.28929 8.17582 7.12505 8.09628 6.96188C6.33908 7.50398 4.33572 7.79105 2.03347 7.95841ZM2.21303 6.54087C4.23311 6.383 5.94767 6.12831 7.42832 5.70031C6.87536 4.73227 6.22225 3.748 5.41311 2.62176C3.83833 3.38059 2.6479 4.8107 2.21303 6.54087ZM6.79928 2.15419C7.57522 3.25001 8.2188 4.23973 8.7739 5.23628C9.90938 4.77315 10.893 4.16788 11.7685 3.37383C10.7411 2.53585 9.42923 2.03333 8 2.03333C7.58871 2.03333 7.18715 2.07494 6.79928 2.15419ZM12.7433 4.37974C11.7529 5.28545 10.6528 5.96745 9.42023 6.48398C9.4822 6.61333 9.54304 6.74353 9.60285 6.87481C9.7402 7.17632 9.87173 7.48282 9.99865 7.79704C11.2452 7.54964 12.5679 7.52636 13.9614 7.74795C13.9089 6.48394 13.4631 5.32149 12.7433 4.37974ZM13.8561 9.1494C12.6764 8.94985 11.5555 8.94695 10.4943 9.12966C10.8638 10.2077 11.2035 11.4005 11.5518 12.7948C12.7238 11.9252 13.5659 10.636 13.8561 9.1494ZM10.2871 13.5126C9.89867 11.9249 9.53129 10.6236 9.13288 9.47616C7.39515 10.0678 5.83619 11.1961 4.46152 12.8047C5.45153 13.535 6.67535 13.9667 8 13.9667C8.81024 13.9667 9.58275 13.8052 10.2871 13.5126ZM0.633331 8C0.633331 3.9315 3.9315 0.633331 8 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8 15.3667C3.9315 15.3667 0.633331 12.0685 0.633331 8Z"
      fill="currentColor"
    />
  </svg>
);
export default DribbbleIcon;
