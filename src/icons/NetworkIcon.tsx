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

const NetworkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.69997 2.0333V4.6333H9.29997V2.0333H6.69997ZM8.69997 6.0333H9.3333C10.0881 6.0333 10.7 5.42142 10.7 4.66663V1.99997C10.7 1.24518 10.0881 0.633301 9.3333 0.633301H6.66663C5.91184 0.633301 5.29997 1.24518 5.29997 1.99997V4.66663C5.29997 5.42142 5.91184 6.0333 6.66663 6.0333H7.29997V7.29997H3.99997C3.6375 7.29997 3.28989 7.44395 3.03359 7.70025C2.77729 7.95655 2.6333 8.30417 2.6333 8.66663V9.96663H1.99997C1.24518 9.96663 0.633301 10.5785 0.633301 11.3333V14C0.633301 14.7548 1.24518 15.3666 1.99997 15.3666H4.66663C5.42142 15.3666 6.0333 14.7548 6.0333 14V11.3333C6.0333 10.5785 5.42142 9.96663 4.66663 9.96663H4.0333V8.69997H11.9666V9.96663H11.3333C10.5785 9.96663 9.96663 10.5785 9.96663 11.3333V14C9.96663 14.7548 10.5785 15.3666 11.3333 15.3666H14C14.7548 15.3666 15.3666 14.7548 15.3666 14V11.3333C15.3666 10.5785 14.7548 9.96663 14 9.96663H13.3666V8.66663C13.3666 8.30417 13.2226 7.95655 12.9663 7.70025C12.71 7.44395 12.3624 7.29997 12 7.29997H8.69997V6.0333ZM11.3666 11.3666V13.9666H13.9666V11.3666H11.3666ZM2.0333 11.3666V13.9666H4.6333V11.3666H2.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default NetworkIcon;
