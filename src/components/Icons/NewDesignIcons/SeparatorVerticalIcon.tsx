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

const SeparatorVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00001 1.30005C8.38661 1.30005 8.70001 1.61345 8.70001 2.00005V14C8.70001 14.3866 8.38661 14.7 8.00001 14.7C7.61341 14.7 7.30001 14.3866 7.30001 14V2.00005C7.30001 1.61345 7.61341 1.30005 8.00001 1.30005ZM5.82832 4.83841C6.10168 5.11177 6.10168 5.55499 5.82832 5.82836L3.65662 8.00005L5.82832 10.1717C6.10168 10.4451 6.10168 10.8883 5.82832 11.1617C5.55495 11.4351 5.11173 11.4351 4.83837 11.1617L2.1717 8.49502C1.89833 8.22166 1.89833 7.77844 2.1717 7.50507L4.83837 4.83841C5.11173 4.56504 5.55495 4.56504 5.82832 4.83841ZM10.1717 4.83841C10.4451 4.56504 10.8883 4.56504 11.1616 4.83841L13.8283 7.50507C14.1017 7.77844 14.1017 8.22166 13.8283 8.49502L11.1616 11.1617C10.8883 11.4351 10.4451 11.4351 10.1717 11.1617C9.89833 10.8883 9.89833 10.4451 10.1717 10.1717L12.3434 8.00005L10.1717 5.82836C9.89833 5.55499 9.89833 5.11177 10.1717 4.83841Z"
      fill="currentColor"
    />
  </svg>
);
export default SeparatorVerticalIcon;
