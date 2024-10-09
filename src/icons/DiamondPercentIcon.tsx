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

const DiamondPercentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.48494 1.17437C8.66484 0.354271 7.33519 0.35427 6.51509 1.17437L1.1744 6.51506C0.354302 7.33516 0.3543 8.66481 1.1744 9.48491L6.51509 14.8256C7.33519 15.6457 8.66484 15.6457 9.48494 14.8256L14.8256 9.48491C15.6457 8.66481 15.6457 7.33516 14.8256 6.51506L9.48494 1.17437ZM7.50504 2.16432C7.77841 1.89095 8.22162 1.89095 8.49499 2.16432L13.8357 7.50501C14.109 7.77838 14.109 8.22159 13.8357 8.49496L8.49499 13.8356C8.22162 14.109 7.77841 14.109 7.50504 13.8356L2.16435 8.49496C1.89098 8.22159 1.89098 7.77838 2.16435 7.50501L7.50504 2.16432ZM6.13336 5.43331C5.74676 5.43331 5.43336 5.74671 5.43336 6.13331C5.43336 6.51991 5.74676 6.83331 6.13336 6.83331H6.14003C6.52663 6.83331 6.84003 6.51991 6.84003 6.13331C6.84003 5.74671 6.52663 5.43331 6.14003 5.43331H6.13336ZM10.1616 5.83835C10.435 6.11172 10.435 6.55493 10.1616 6.8283L6.82829 10.1616C6.55492 10.435 6.11171 10.435 5.83834 10.1616C5.56497 9.88827 5.56497 9.44505 5.83834 9.17168L9.17167 5.83835C9.44504 5.56498 9.88826 5.56498 10.1616 5.83835ZM9.79999 9.16665C9.41339 9.16665 9.09999 9.48005 9.09999 9.86665C9.09999 10.2533 9.41339 10.5667 9.79999 10.5667H9.80666C10.1933 10.5667 10.5067 10.2533 10.5067 9.86665C10.5067 9.48005 10.1933 9.16665 9.80666 9.16665H9.79999Z"
      fill="currentColor"
    />
  </svg>
);
export default DiamondPercentIcon;
