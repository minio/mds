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

const KeyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.495 0.838387C14.7683 1.11175 14.7683 1.55497 14.495 1.82834L13.6566 2.6667L15.1616 4.17172C15.435 4.44509 15.435 4.8883 15.1616 5.16167L12.8283 7.495C12.697 7.62628 12.519 7.70003 12.3333 7.70003C12.1477 7.70003 11.9696 7.62628 11.8384 7.495L10.3333 5.98998L8.54297 7.78034C9.06126 8.49834 9.36667 9.38019 9.36667 10.3334C9.36667 12.745 7.41164 14.7 5 14.7C2.58836 14.7 0.633333 12.745 0.633333 10.3334C0.633333 7.92172 2.58836 5.9667 5 5.9667C5.95318 5.9667 6.83502 6.2721 7.55302 6.79039L13.505 0.838387C13.7784 0.56502 14.2216 0.56502 14.495 0.838387ZM12.6667 3.65664L11.3233 5.00003L12.3333 6.01008L13.6767 4.6667L12.6667 3.65664ZM5 7.36669C3.36155 7.36669 2.03333 8.69492 2.03333 10.3334C2.03333 11.9718 3.36155 13.3 5 13.3C6.63844 13.3 7.96667 11.9718 7.96667 10.3334C7.96667 8.69492 6.63844 7.36669 5 7.36669Z"
      fill="currentColor"
    />
  </svg>
);
export default KeyIcon;
