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

const ListStartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.1616 2.1717C11.435 2.44507 11.435 2.88828 11.1616 3.16165L11.0233 3.30001H12.6667C13.2059 3.30001 13.7231 3.51423 14.1044 3.89556C14.4858 4.27688 14.7 4.79407 14.7 5.33334V12C14.7 12.3866 14.3866 12.7 14 12.7C13.6134 12.7 13.3 12.3866 13.3 12V5.33334C13.3 5.16537 13.2333 5.00428 13.1145 4.88551C12.9957 4.76673 12.8346 4.70001 12.6667 4.70001H11.0233L11.1616 4.83837C11.435 5.11173 11.435 5.55495 11.1616 5.82832C10.8883 6.10168 10.445 6.10168 10.1717 5.82832L8.83835 4.49498C8.70707 4.36371 8.63332 4.18566 8.63332 4.00001C8.63332 3.81436 8.70707 3.63631 8.83835 3.50503L10.1717 2.1717C10.445 1.89833 10.8883 1.89833 11.1616 2.1717ZM1.29999 4.00001C1.29999 3.61341 1.61339 3.30001 1.99999 3.30001H6.66665C7.05325 3.30001 7.36665 3.61341 7.36665 4.00001C7.36665 4.38661 7.05325 4.70001 6.66665 4.70001H1.99999C1.61339 4.70001 1.29999 4.38661 1.29999 4.00001ZM1.29999 8.00001C1.29999 7.61341 1.61339 7.30001 1.99999 7.30001H10.6667C11.0533 7.30001 11.3667 7.61341 11.3667 8.00001C11.3667 8.38661 11.0533 8.70001 10.6667 8.70001H1.99999C1.61339 8.70001 1.29999 8.38661 1.29999 8.00001ZM1.29999 12C1.29999 11.6134 1.61339 11.3 1.99999 11.3H10.6667C11.0533 11.3 11.3667 11.6134 11.3667 12C11.3667 12.3866 11.0533 12.7 10.6667 12.7H1.99999C1.61339 12.7 1.29999 12.3866 1.29999 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListStartIcon;
