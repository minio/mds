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

const PilcrowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.71701 3.05038C4.41089 2.3565 5.352 1.96667 6.3333 1.96667H12.6666C13.0532 1.96667 13.3666 2.28008 13.3666 2.66667C13.3666 3.05327 13.0532 3.36667 12.6666 3.36667H12.0333V13.3333C12.0333 13.7199 11.7199 14.0333 11.3333 14.0333C10.9467 14.0333 10.6333 13.7199 10.6333 13.3333V3.36667H9.36663V13.3333C9.36663 13.7199 9.05323 14.0333 8.66663 14.0333C8.28003 14.0333 7.96663 13.7199 7.96663 13.3333V9.36667H6.3333C5.352 9.36667 4.41089 8.97685 3.71701 8.28297C3.02312 7.58909 2.6333 6.64798 2.6333 5.66667C2.6333 4.68537 3.02312 3.74426 3.71701 3.05038ZM7.96663 7.96667V3.36667H6.3333C5.7233 3.36667 5.13829 3.609 4.70695 4.04033C4.27562 4.47166 4.0333 5.05668 4.0333 5.66667C4.0333 6.27667 4.27562 6.86169 4.70695 7.29302C5.13829 7.72435 5.7233 7.96667 6.3333 7.96667H7.96663Z"
      fill="currentColor"
    />
  </svg>
);
export default PilcrowIcon;
