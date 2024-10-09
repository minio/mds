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

const PizzaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.4816 0.658254C10.8482 0.557754 11.2279 0.768136 11.3372 1.1322L15.3372 14.4655C15.4111 14.7122 15.3437 14.9796 15.1616 15.1616C14.9796 15.3437 14.7122 15.4111 14.4655 15.3372L1.1322 11.3372C0.768136 11.2279 0.557754 10.8482 0.658254 10.4816C1.3023 8.13247 2.54671 5.99145 4.26908 4.26908C5.99145 2.54671 8.13247 1.3023 10.4816 0.658254ZM10.1979 2.20685C8.33997 2.82602 6.64823 3.86983 5.25903 5.25903C3.86983 6.64823 2.82602 8.33997 2.20685 10.1979L3.3569 10.5429C3.9586 8.89698 4.9129 7.39916 6.15603 6.15603C7.39916 4.9129 8.89698 3.9586 10.5429 3.3569L10.1979 2.20685ZM10.946 4.7005C9.52166 5.23377 8.22523 6.06673 7.14598 7.14598C6.06673 8.22523 5.23377 9.52166 4.7005 10.946L13.6226 13.6226L10.946 4.7005ZM9.30001 7.33334C9.30001 6.94674 9.61341 6.63334 10 6.63334H10.0067C10.3933 6.63334 10.7067 6.94674 10.7067 7.33334C10.7067 7.71994 10.3933 8.03334 10.0067 8.03334H10C9.61341 8.03334 9.30001 7.71994 9.30001 7.33334ZM6.63334 10C6.63334 9.61341 6.94674 9.30001 7.33334 9.30001H7.34001C7.72661 9.30001 8.04001 9.61341 8.04001 10C8.04001 10.3866 7.72661 10.7 7.34001 10.7H7.33334C6.94674 10.7 6.63334 10.3866 6.63334 10ZM9.96667 10.6667C9.96667 10.2801 10.2801 9.96667 10.6667 9.96667H10.6733C11.0599 9.96667 11.3733 10.2801 11.3733 10.6667C11.3733 11.0533 11.0599 11.3667 10.6733 11.3667H10.6667C10.2801 11.3667 9.96667 11.0533 9.96667 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default PizzaIcon;
