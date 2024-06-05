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

const CloudIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.69357 4.09423C5.96926 3.96583 5.2235 4.04137 4.53965 4.31241C3.85579 4.58345 3.26077 5.03931 2.82109 5.62906C2.3814 6.2188 2.11436 6.91919 2.04982 7.65197C1.98528 8.38474 2.12577 9.12102 2.4556 9.77855C2.78543 10.4361 3.2916 10.9889 3.91755 11.3753C4.54344 11.7617 5.26445 11.9664 5.99999 11.9667C5.99993 11.9667 6.00005 11.9667 5.99999 11.9667H11.6667C12.2767 11.9667 12.8617 11.7243 13.293 11.293C13.7243 10.8617 13.9667 10.2767 13.9667 9.66667C13.9667 9.05667 13.7243 8.47166 13.293 8.04032C12.8617 7.60899 12.2767 7.36667 11.6667 7.36667H10.4733C10.1638 7.36667 9.89095 7.16333 9.80251 6.86667C9.59233 6.16172 9.19027 5.5291 8.64125 5.03951C8.09224 4.54991 7.41789 4.22263 6.69357 4.09423ZM4.02381 3.0109C4.94903 2.6442 5.95799 2.542 6.93795 2.71572C7.9179 2.88944 8.83025 3.33224 9.57304 3.99463C10.1835 4.53899 10.6596 5.21403 10.9677 5.96667H11.6667C12.648 5.96667 13.5891 6.35649 14.283 7.05037C14.9768 7.74426 15.3667 8.68537 15.3667 9.66667C15.3667 10.648 14.9768 11.5891 14.283 12.283C13.5891 12.9768 12.648 13.3667 11.6667 13.3667H5.99999C5.00476 13.3664 4.02901 13.0894 3.18214 12.5666C2.33527 12.0438 1.65045 11.2959 1.20421 10.4063C0.757977 9.51668 0.567899 8.52053 0.655221 7.52913C0.742543 6.53773 1.10383 5.59014 1.6987 4.79225C2.29357 3.99436 3.09859 3.37761 4.02381 3.0109Z"
      fill="currentColor"
    />
  </svg>
);
export default CloudIcon;
