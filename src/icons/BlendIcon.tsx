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

const BlendIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.00003 2.03333C3.8093 2.03333 2.03336 3.80927 2.03336 6C2.03336 7.71301 3.11921 9.1724 4.64016 9.72743C4.77758 6.98044 6.98047 4.77755 9.72746 4.64013C9.17244 3.11919 7.71304 2.03333 6.00003 2.03333ZM11.226 4.77401C10.6715 2.40086 8.54216 0.633331 6.00003 0.633331C3.0361 0.633331 0.633362 3.03607 0.633362 6C0.633362 8.54213 2.40089 10.6714 4.77404 11.226C5.3286 13.5991 7.4579 15.3667 10 15.3667C12.964 15.3667 15.3667 12.9639 15.3667 10C15.3667 7.45787 13.5992 5.32857 11.226 4.77401ZM6.0335 9.96652C6.05139 7.80235 7.80238 6.05136 9.96655 6.03347C9.94866 8.19764 8.19767 9.94863 6.0335 9.96652ZM6.2726 11.3599C9.01959 11.2224 11.2225 9.01955 11.3599 6.27256C12.8808 6.82759 13.9667 8.28698 13.9667 10C13.9667 12.1907 12.1908 13.9667 10 13.9667C8.28701 13.9667 6.82762 12.8808 6.2726 11.3599Z"
      fill="currentColor"
    />
  </svg>
);
export default BlendIcon;
