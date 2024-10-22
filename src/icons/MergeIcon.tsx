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

const MergeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50503 0.838387C7.7784 0.56502 8.22162 0.56502 8.49498 0.838387L11.1616 3.50505C11.435 3.77842 11.435 4.22164 11.1616 4.495C10.8883 4.76837 10.4451 4.76837 10.1717 4.495L8.70001 3.02331V8.19647C8.70428 8.64343 8.6195 9.08679 8.45061 9.50066C8.28124 9.91571 8.03068 10.2928 7.71365 10.6097C7.71361 10.6097 7.71357 10.6097 7.71353 10.6098L3.16165 15.1617C2.88828 15.435 2.44507 15.435 2.1717 15.1617C1.89833 14.8883 1.89833 14.4451 2.1717 14.1717L6.7237 9.61972L6.72381 9.61961C6.90905 9.43446 7.05543 9.21418 7.15438 8.9717C7.25333 8.72922 7.30286 8.46942 7.30005 8.20754L7.29997 8.20003H7.30001V3.02331L5.82832 4.495C5.55495 4.76837 5.11173 4.76837 4.83837 4.495C4.565 4.22164 4.565 3.77842 4.83837 3.50505L7.50503 0.838387ZM9.50503 10.8384C9.7784 10.565 10.2216 10.565 10.495 10.8384L13.8283 14.1717C14.1017 14.4451 14.1017 14.8883 13.8283 15.1617C13.5549 15.435 13.1117 15.435 12.8384 15.1617L9.50503 11.8283C9.23167 11.555 9.23167 11.1118 9.50503 10.8384Z"
      fill="currentColor"
    />
  </svg>
);
export default MergeIcon;
