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

const SquareStackIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 2.0333C2.3199 2.0333 2.0333 2.3199 2.0333 2.66663V5.3333C2.0333 5.68003 2.3199 5.96663 2.66663 5.96663C3.05323 5.96663 3.36663 6.28003 3.36663 6.66663C3.36663 7.05323 3.05323 7.36663 2.66663 7.36663C1.5467 7.36663 0.633301 6.45323 0.633301 5.3333V2.66663C0.633301 1.5467 1.5467 0.633301 2.66663 0.633301H5.3333C6.45323 0.633301 7.36663 1.5467 7.36663 2.66663C7.36663 3.05323 7.05323 3.36663 6.66663 3.36663C6.28003 3.36663 5.96663 3.05323 5.96663 2.66663C5.96663 2.3199 5.68003 2.0333 5.3333 2.0333H2.66663ZM6.66663 6.0333C6.3199 6.0333 6.0333 6.3199 6.0333 6.66663V9.3333C6.0333 9.68003 6.3199 9.96663 6.66663 9.96663C7.05323 9.96663 7.36663 10.28 7.36663 10.6666C7.36663 11.0532 7.05323 11.3666 6.66663 11.3666C5.5467 11.3666 4.6333 10.4532 4.6333 9.3333V6.66663C4.6333 5.5467 5.5467 4.6333 6.66663 4.6333H9.3333C10.4532 4.6333 11.3666 5.5467 11.3666 6.66663C11.3666 7.05323 11.0532 7.36663 10.6666 7.36663C10.28 7.36663 9.96663 7.05323 9.96663 6.66663C9.96663 6.3199 9.68003 6.0333 9.3333 6.0333H6.66663ZM10.6666 10.0333C10.3169 10.0333 10.0333 10.3169 10.0333 10.6666V13.3333C10.0333 13.6831 10.3169 13.9666 10.6666 13.9666H13.3333C13.6831 13.9666 13.9666 13.6831 13.9666 13.3333V10.6666C13.9666 10.3169 13.6831 10.0333 13.3333 10.0333H10.6666ZM8.6333 10.6666C8.6333 9.54365 9.54365 8.6333 10.6666 8.6333H13.3333C14.4563 8.6333 15.3666 9.54365 15.3666 10.6666V13.3333C15.3666 14.4563 14.4563 15.3666 13.3333 15.3666H10.6666C9.54365 15.3666 8.6333 14.4563 8.6333 13.3333V10.6666Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareStackIcon;
