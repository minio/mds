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

const CloudyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.4632 1.30618C8.44731 1.26021 9.41806 1.54826 10.2178 2.12357C10.8709 2.59335 11.3786 3.23214 11.6895 3.96666H12.6667C13.3827 3.96666 14.0695 4.25113 14.5758 4.75748C15.0822 5.26382 15.3667 5.95058 15.3667 6.66666C15.3667 7.05326 15.0533 7.36666 14.6667 7.36666C14.2801 7.36666 13.9667 7.05326 13.9667 6.66666C13.9667 6.32188 13.8297 5.99122 13.5859 5.74742C13.3421 5.50363 13.0114 5.36666 12.6667 5.36666H11.1953C10.8824 5.36666 10.6075 5.15901 10.522 4.85803C10.339 4.21411 9.94368 3.65097 9.40026 3.26006C8.85684 2.86915 8.19723 2.67342 7.52854 2.70466C6.85985 2.7359 6.22137 2.99228 5.71676 3.43215C5.51548 3.60762 5.34022 3.80816 5.19449 4.02764C5.77028 3.9401 6.35917 3.94645 6.93795 4.04905C7.9179 4.22277 8.83025 4.66557 9.57304 5.32796C10.1835 5.87232 10.6596 6.54736 10.9677 7.3H11.6667C12.1526 7.3 12.6337 7.3957 13.0826 7.58164C13.5315 7.76758 13.9394 8.04013 14.283 8.3837C14.6265 8.72728 14.8991 9.13516 15.085 9.58407C15.271 10.033 15.3667 10.5141 15.3667 11C15.3667 11.4859 15.271 11.967 15.085 12.4159C14.8991 12.8648 14.6265 13.2727 14.283 13.6163C13.9394 13.9599 13.5315 14.2324 13.0826 14.4184C12.6337 14.6043 12.1526 14.7 11.6667 14.7H5.99999C5.00476 14.6997 4.02901 14.4227 3.18214 13.9C2.33527 13.3772 1.65045 12.6292 1.20421 11.7396C0.757977 10.85 0.567899 9.85386 0.655221 8.86246C0.742543 7.87106 1.10383 6.92347 1.6987 6.12558C2.16136 5.50501 2.75116 4.99401 3.42575 4.62501C3.64011 3.75443 4.1179 2.96867 4.79681 2.37684C5.53944 1.72947 6.4791 1.35216 7.4632 1.30618ZM6.69358 5.42756C5.96926 5.29916 5.2235 5.3747 4.53965 5.64574C3.85579 5.91678 3.26077 6.37264 2.82109 6.96239C2.3814 7.55213 2.11436 8.25252 2.04982 8.98529C1.98528 9.71807 2.12577 10.4544 2.4556 11.1119C2.78543 11.7694 3.2916 12.3223 3.91755 12.7087C4.54344 13.095 5.26445 13.2998 5.99999 13.3C5.99993 13.3 6.00005 13.3 5.99999 13.3H11.6667C11.9687 13.3 12.2678 13.2405 12.5468 13.1249C12.8259 13.0093 13.0794 12.8399 13.293 12.6263C13.5066 12.4128 13.676 12.1592 13.7916 11.8802C13.9072 11.6011 13.9667 11.302 13.9667 11C13.9667 10.698 13.9072 10.3989 13.7916 10.1198C13.676 9.84078 13.5066 9.58723 13.293 9.37365C13.0794 9.16008 12.8259 8.99066 12.5468 8.87507C12.2678 8.75949 11.9687 8.7 11.6667 8.7H10.4733C10.1638 8.7 9.89095 8.49666 9.80251 8.2C9.59233 7.49505 9.19027 6.86243 8.64125 6.37284C8.09224 5.88324 7.41789 5.55596 6.69358 5.42756Z"
      fill="currentColor"
    />
  </svg>
);
export default CloudyIcon;