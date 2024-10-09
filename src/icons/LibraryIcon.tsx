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

const LibraryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66667 1.96667C3.05327 1.96667 3.36667 2.28008 3.36667 2.66667V13.3333C3.36667 13.7199 3.05327 14.0333 2.66667 14.0333C2.28008 14.0333 1.96667 13.7199 1.96667 13.3333V2.66667C1.96667 2.28008 2.28008 1.96667 2.66667 1.96667ZM10.4744 3.32694C10.8461 3.22073 11.2335 3.43598 11.3397 3.8077L14.0064 13.141C14.1126 13.5128 13.8974 13.9002 13.5256 14.0064C13.1539 14.1126 12.7665 13.8974 12.6603 13.5256L9.99361 4.19231C9.8874 3.82059 10.1026 3.43315 10.4744 3.32694ZM8.00001 3.30001C8.38661 3.30001 8.70001 3.61341 8.70001 4.00001V13.3333C8.70001 13.7199 8.38661 14.0333 8.00001 14.0333C7.61341 14.0333 7.30001 13.7199 7.30001 13.3333V4.00001C7.30001 3.61341 7.61341 3.30001 8.00001 3.30001ZM5.33334 4.63334C5.71994 4.63334 6.03334 4.94674 6.03334 5.33334V13.3333C6.03334 13.7199 5.71994 14.0333 5.33334 14.0333C4.94674 14.0333 4.63334 13.7199 4.63334 13.3333V5.33334C4.63334 4.94674 4.94674 4.63334 5.33334 4.63334Z"
      fill="currentColor"
    />
  </svg>
);
export default LibraryIcon;
