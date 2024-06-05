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

const LampIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.68341 1.07339C4.78972 0.807627 5.04711 0.633362 5.33334 0.633362H10.6667C10.9529 0.633362 11.2103 0.807627 11.3166 1.07339L13.9833 7.74005C14.0695 7.95572 14.0432 8.20013 13.913 8.39247C13.7828 8.58481 13.5656 8.70003 13.3333 8.70003H8.70001V11.3H9.33334C9.87262 11.3 10.3898 11.5143 10.7711 11.8956C11.1525 12.2769 11.3667 12.7941 11.3667 13.3334V14.6667C11.3667 15.0533 11.0533 15.3667 10.6667 15.3667H5.33334C4.94675 15.3667 4.63334 15.0533 4.63334 14.6667V13.3334C4.63334 12.2134 5.54675 11.3 6.66668 11.3H7.30001V8.70003H2.66668C2.4344 8.70003 2.21725 8.58481 2.08703 8.39247C1.95681 8.20013 1.93048 7.95572 2.01674 7.74005L4.68341 1.07339ZM12.2994 7.30003L10.1928 2.03336H5.80727L3.7006 7.30003H12.2994ZM6.66668 12.7C6.31994 12.7 6.03334 12.9866 6.03334 13.3334V13.9667H9.96668V13.3334C9.96668 13.1654 9.89995 13.0043 9.78118 12.8855C9.66241 12.7668 9.50131 12.7 9.33334 12.7H6.66668Z"
      fill="currentColor"
    />
  </svg>
);
export default LampIcon;
