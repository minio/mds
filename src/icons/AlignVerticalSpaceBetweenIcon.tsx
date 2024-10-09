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

const AlignVerticalSpaceBetweenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.633335 1.99999C0.633335 1.61339 0.946736 1.29999 1.33334 1.29999H14.6667C15.0533 1.29999 15.3667 1.61339 15.3667 1.99999C15.3667 2.38659 15.0533 2.69999 14.6667 2.69999H11.9328C11.998 2.8993 12.0333 3.11219 12.0333 3.33332V4.66665C12.0333 5.78963 11.123 6.69999 10 6.69999H6C4.87702 6.69999 3.96667 5.78963 3.96667 4.66665V3.33332C3.96667 3.11219 4.00197 2.8993 4.06724 2.69999H1.33334C0.946736 2.69999 0.633335 2.38659 0.633335 1.99999ZM6 2.69999C5.65022 2.69999 5.36667 2.98354 5.36667 3.33332V4.66665C5.36667 5.01643 5.65022 5.29999 6 5.29999H10C10.3498 5.29999 10.6333 5.01643 10.6333 4.66665V3.33332C10.6333 2.98354 10.3498 2.69999 10 2.69999H6ZM4.66667 10.7C4.31689 10.7 4.03333 10.9835 4.03333 11.3333V12.6667C4.03333 13.0164 4.31689 13.3 4.66667 13.3H11.3333C11.6831 13.3 11.9667 13.0164 11.9667 12.6667V11.3333C11.9667 10.9835 11.6831 10.7 11.3333 10.7H4.66667ZM13.2661 13.3C13.3314 13.1007 13.3667 12.8878 13.3667 12.6667V11.3333C13.3667 10.2103 12.4563 9.29999 11.3333 9.29999H4.66667C3.54369 9.29999 2.63334 10.2103 2.63334 11.3333V12.6667C2.63334 12.8878 2.66863 13.1007 2.73391 13.3H1.33334C0.946736 13.3 0.633335 13.6134 0.633335 14C0.633335 14.3866 0.946736 14.7 1.33334 14.7H14.6667C15.0533 14.7 15.3667 14.3866 15.3667 14C15.3667 13.6134 15.0533 13.3 14.6667 13.3H13.2661Z"
      fill="currentColor"
    />
  </svg>
);
export default AlignVerticalSpaceBetweenIcon;
