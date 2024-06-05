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

const EllipsisVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 3.36667C8.01838 3.36667 8.0333 3.35175 8.0333 3.33334C8.0333 3.31493 8.01838 3.30001 7.99997 3.30001C7.98156 3.30001 7.96663 3.31493 7.96663 3.33334C7.96663 3.35175 7.98156 3.36667 7.99997 3.36667ZM6.6333 3.33334C6.6333 2.57855 7.24518 1.96667 7.99997 1.96667C8.75476 1.96667 9.36663 2.57855 9.36663 3.33334C9.36663 4.08813 8.75476 4.70001 7.99997 4.70001C7.24518 4.70001 6.6333 4.08813 6.6333 3.33334ZM7.99997 8.03334C8.01838 8.03334 8.0333 8.01842 8.0333 8.00001C8.0333 7.9816 8.01838 7.96667 7.99997 7.96667C7.98156 7.96667 7.96663 7.9816 7.96663 8.00001C7.96663 8.01842 7.98156 8.03334 7.99997 8.03334ZM6.6333 8.00001C6.6333 7.24522 7.24518 6.63334 7.99997 6.63334C8.75476 6.63334 9.36663 7.24522 9.36663 8.00001C9.36663 8.7548 8.75476 9.36667 7.99997 9.36667C7.24518 9.36667 6.6333 8.7548 6.6333 8.00001ZM7.99997 12.7C8.01838 12.7 8.0333 12.6851 8.0333 12.6667C8.0333 12.6483 8.01838 12.6333 7.99997 12.6333C7.98156 12.6333 7.96663 12.6483 7.96663 12.6667C7.96663 12.6851 7.98156 12.7 7.99997 12.7ZM6.6333 12.6667C6.6333 11.9119 7.24518 11.3 7.99997 11.3C8.75476 11.3 9.36663 11.9119 9.36663 12.6667C9.36663 13.4215 8.75476 14.0333 7.99997 14.0333C7.24518 14.0333 6.6333 13.4215 6.6333 12.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default EllipsisVerticalIcon;
