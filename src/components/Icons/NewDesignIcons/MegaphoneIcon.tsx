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

const MegaphoneIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.4236 3.4427C14.5977 3.57507 14.7 3.78125 14.7 3.99999V12C14.7 12.2123 14.6036 12.4132 14.438 12.546C14.2724 12.6789 14.0554 12.7294 13.8481 12.6833L8.38382 11.469C8.28714 11.7804 8.1349 12.0719 7.93425 12.3295C7.71589 12.6097 7.44446 12.8443 7.13546 13.0196C6.82646 13.195 6.48595 13.3078 6.13336 13.3516C5.78077 13.3954 5.42301 13.3693 5.0805 13.2748C4.738 13.1803 4.41746 13.0193 4.13718 12.8009C3.85691 12.5826 3.62239 12.3111 3.44701 12.0021C3.27163 11.6931 3.15884 11.3526 3.11506 11C3.08609 10.7667 3.08772 10.5311 3.11951 10.2992L1.84814 10.0167C1.52786 9.94549 1.29999 9.66142 1.29999 9.33333V7.33333C1.29999 7.01888 1.50966 6.74302 1.81264 6.65886L13.8126 3.32553C14.0234 3.26698 14.2494 3.31033 14.4236 3.4427ZM4.49589 10.605C4.49239 10.6791 4.49521 10.7536 4.50439 10.8275C4.52551 10.9977 4.57994 11.162 4.66457 11.3111C4.7492 11.4602 4.86237 11.5912 4.99761 11.6965C5.13286 11.8019 5.28753 11.8796 5.45281 11.9252C5.61808 11.9708 5.79071 11.9834 5.96085 11.9623C6.13099 11.9411 6.29531 11.8867 6.44441 11.8021C6.59352 11.7174 6.7245 11.6043 6.82986 11.469C6.90281 11.3754 6.96249 11.2725 7.00744 11.1632L4.49589 10.605ZM2.69999 7.86539V8.77181L13.3 11.1274V4.92094L2.69999 7.86539Z"
      fill="currentColor"
    />
  </svg>
);
export default MegaphoneIcon;
