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

const HourglassIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.63336 1.33336C2.63336 0.946762 2.94676 0.633362 3.33336 0.633362H12.6667C13.0533 0.633362 13.3667 0.946762 13.3667 1.33336C13.3667 1.71996 13.0533 2.03336 12.6667 2.03336H12.0334V4.1147C12.0332 4.65392 11.8189 5.17118 11.4376 5.55241L8.98998 8.00003L11.4376 10.4476C11.8189 10.8289 12.0332 11.346 12.0334 11.8852V13.9667H12.6667C13.0533 13.9667 13.3667 14.2801 13.3667 14.6667C13.3667 15.0533 13.0533 15.3667 12.6667 15.3667H3.33336C2.94676 15.3667 2.63336 15.0533 2.63336 14.6667C2.63336 14.2801 2.94676 13.9667 3.33336 13.9667H3.9667V11.8854C3.96681 11.3461 4.18111 10.8289 4.56246 10.4476L7.01008 8.00003L4.56246 5.55241C4.56244 5.55239 4.56249 5.55244 4.56246 5.55241C4.18116 5.17118 3.96681 4.65404 3.9667 4.11484V2.03336H3.33336C2.94676 2.03336 2.63336 1.71996 2.63336 1.33336ZM5.3667 2.03336V4.11455C5.3667 4.1145 5.3667 4.1146 5.3667 4.11455C5.36677 4.28245 5.43352 4.4436 5.55226 4.56231L8.00003 7.01008L10.4477 4.56239C10.5665 4.44368 10.6333 4.2826 10.6334 4.1147C10.6334 4.11465 10.6334 4.11474 10.6334 4.1147V2.03336H5.3667ZM8.00003 8.98998L5.55234 11.4377C5.43359 11.5564 5.36677 11.7175 5.3667 11.8854C5.3667 11.8853 5.3667 11.8854 5.3667 11.8854V13.9667H10.6334V11.8855C10.6334 11.8855 10.6334 11.8856 10.6334 11.8855C10.6333 11.7176 10.5665 11.5565 10.4478 11.4377L8.00003 8.98998Z"
      fill="currentColor"
    />
  </svg>
);
export default HourglassIcon;
