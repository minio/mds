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

const CurrencyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.50501 1.50501C1.77838 1.23165 2.2216 1.23165 2.49496 1.50501L4.25739 3.26744C5.2859 2.45297 6.58615 1.96665 7.99999 1.96665C9.41382 1.96665 10.7141 2.45297 11.7426 3.26744L13.505 1.50501C13.7784 1.23165 14.2216 1.23165 14.495 1.50501C14.7683 1.77838 14.7683 2.2216 14.495 2.49496L12.7325 4.25739C13.547 5.2859 14.0333 6.58615 14.0333 7.99999C14.0333 9.41382 13.547 10.7141 12.7325 11.7426L14.495 13.505C14.7683 13.7784 14.7683 14.2216 14.495 14.495C14.2216 14.7683 13.7784 14.7683 13.505 14.495L11.7426 12.7325C10.7141 13.547 9.41382 14.0333 7.99999 14.0333C6.58615 14.0333 5.2859 13.547 4.25739 12.7325L2.49496 14.495C2.2216 14.7683 1.77838 14.7683 1.50501 14.495C1.23165 14.2216 1.23165 13.7784 1.50501 13.505L3.26744 11.7426C2.45297 10.7141 1.96665 9.41382 1.96665 7.99999C1.96665 6.58615 2.45297 5.2859 3.26744 4.25739L1.50501 2.49496C1.23165 2.2216 1.23165 1.77838 1.50501 1.50501ZM7.99999 3.36665C5.44107 3.36665 3.36665 5.44107 3.36665 7.99999C3.36665 10.5589 5.44107 12.6333 7.99999 12.6333C10.5589 12.6333 12.6333 10.5589 12.6333 7.99999C12.6333 5.44107 10.5589 3.36665 7.99999 3.36665Z"
      fill="currentColor"
    />
  </svg>
);
export default CurrencyIcon;
