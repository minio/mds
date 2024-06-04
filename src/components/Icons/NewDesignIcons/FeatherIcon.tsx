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

const FeatherIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.33833 2.00503C8.22016 1.12319 9.41619 0.627777 10.6633 0.627777C11.9104 0.627777 13.1064 1.12319 13.9883 2.00503C14.8701 2.88686 15.3655 4.08289 15.3655 5.33C15.3655 6.57699 14.8702 7.77291 13.9885 8.65472C13.9884 8.65481 13.9884 8.65489 13.9883 8.65498L12.2209 10.4276C12.1847 10.4745 12.1426 10.5166 12.0959 10.553L9.49568 13.1609C9.36434 13.2926 9.18598 13.3667 8.99997 13.3667H3.62325L1.82828 15.1616C1.55491 15.435 1.11169 15.435 0.838326 15.1616C0.564959 14.8883 0.564959 14.4451 0.838326 14.1717L2.6333 12.3767V7C2.6333 6.81435 2.70705 6.6363 2.83833 6.50503L7.33833 2.00503ZM5.02325 11.9667H8.70941L9.97233 10.7H6.28992L5.02325 11.9667ZM5.50481 9.50521L4.0333 10.9767V7.28995L8.32828 2.99498C8.94756 2.37569 9.7875 2.02778 10.6633 2.02778C11.5391 2.02778 12.379 2.37569 12.9983 2.99498C13.6176 3.61426 13.9655 4.4542 13.9655 5.33C13.9655 6.20581 13.6176 7.04574 12.9983 7.66503L12.9976 7.66576L11.3682 9.3H7.68992L11.1616 5.82831C11.435 5.55494 11.435 5.11173 11.1616 4.83836C10.8882 4.56499 10.445 4.56499 10.1717 4.83836L5.50518 9.50484C5.50505 9.50496 5.50493 9.50509 5.50481 9.50521Z"
      fill="currentColor"
    />
  </svg>
);
export default FeatherIcon;
