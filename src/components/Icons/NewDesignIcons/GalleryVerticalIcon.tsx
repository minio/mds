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

const GalleryVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.29999 1.33336C1.29999 0.946762 1.61339 0.633362 1.99999 0.633362H14C14.3866 0.633362 14.7 0.946762 14.7 1.33336C14.7 1.71996 14.3866 2.03336 14 2.03336H1.99999C1.61339 2.03336 1.29999 1.71996 1.29999 1.33336ZM3.33332 4.70003C2.98354 4.70003 2.69999 4.98358 2.69999 5.33336V10.6667C2.69999 11.0165 2.98354 11.3 3.33332 11.3H12.6667C13.0164 11.3 13.3 11.0165 13.3 10.6667V5.33336C13.3 4.98358 13.0164 4.70003 12.6667 4.70003H3.33332ZM1.29999 5.33336C1.29999 4.21038 2.21034 3.30003 3.33332 3.30003H12.6667C13.7896 3.30003 14.7 4.21038 14.7 5.33336V10.6667C14.7 11.7897 13.7896 12.7 12.6667 12.7H3.33332C2.21034 12.7 1.29999 11.7897 1.29999 10.6667V5.33336ZM1.29999 14.6667C1.29999 14.2801 1.61339 13.9667 1.99999 13.9667H14C14.3866 13.9667 14.7 14.2801 14.7 14.6667C14.7 15.0533 14.3866 15.3667 14 15.3667H1.99999C1.61339 15.3667 1.29999 15.0533 1.29999 14.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default GalleryVerticalIcon;
