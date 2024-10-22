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

const ShieldBanIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.94942 2.05107C6.98695 2.89057 5.67013 3.62412 4.39902 3.90808L12.2366 10.701C12.4904 10.1213 12.6333 9.45091 12.6333 8.66669V4.03322C11.0834 4.02057 9.28554 3.12911 8.05052 2.05103C8.03627 2.03942 8.01842 2.03306 7.99999 2.03306C7.98154 2.03306 7.96368 2.03943 7.94942 2.05107ZM11.4688 11.8882L3.36666 4.86598V8.66669C3.36666 10.1485 3.87705 11.2236 4.68168 12.0477C5.50537 12.8913 6.66911 13.5025 8.00848 13.965L8.01281 13.9666C9.34247 13.5014 10.4988 12.8901 11.3187 12.0489C11.3699 11.9964 11.42 11.9428 11.4688 11.8882ZM2.71092 2.78331C2.55665 2.80954 2.41018 2.88741 2.29969 3.01489C2.21955 3.10736 2.16793 3.21485 2.14408 3.32661C2.02879 3.53023 1.96666 3.76192 1.96666 4.00002V8.66669C1.96666 10.5182 2.62294 11.9431 3.67998 13.0257C4.71636 14.0872 6.1066 14.7887 7.54486 15.2861C7.83695 15.3925 8.15671 15.3962 8.45132 15.2963L8.45133 15.2964L8.45706 15.2944C9.89378 14.7936 11.2846 14.0898 12.3213 13.0261C13.377 11.9429 14.0333 10.5182 14.0333 8.66669V4.00002C14.0333 3.63756 13.8893 3.28994 13.633 3.03364C13.3767 2.77734 13.0291 2.63336 12.6667 2.63336C11.5594 2.63336 10.0567 1.94542 8.9674 0.993033L8.96743 0.992999L8.96136 0.987813C8.69337 0.758854 8.35247 0.633057 7.99999 0.633057C7.64752 0.633057 7.30661 0.758854 7.03863 0.987813L7.0386 0.987781L7.0328 0.992844C5.94946 1.93922 4.44013 2.63336 3.33333 2.63336C3.11489 2.63336 2.90184 2.68565 2.71092 2.78331Z"
      fill="currentColor"
    />
  </svg>
);
export default ShieldBanIcon;
