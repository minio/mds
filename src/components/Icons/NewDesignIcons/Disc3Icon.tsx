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

const Disc3Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03333C4.70467 2.03333 2.0333 4.7047 2.0333 8C2.0333 11.2953 4.70467 13.9667 7.99997 13.9667C11.2953 13.9667 13.9666 11.2953 13.9666 8C13.9666 4.7047 11.2953 2.03333 7.99997 2.03333ZM0.633301 8C0.633301 3.9315 3.93147 0.633331 7.99997 0.633331C12.0685 0.633331 15.3666 3.9315 15.3666 8C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8ZM5.71793 4.72913C5.97798 5.01519 5.9569 5.4579 5.67084 5.71796C5.08581 6.24979 4.69997 7.06065 4.69997 8C4.69997 8.3866 4.38657 8.7 3.99997 8.7C3.61337 8.7 3.29997 8.3866 3.29997 8C3.29997 6.67268 3.84745 5.48353 4.7291 4.68204C5.01516 4.42198 5.45787 4.44307 5.71793 4.72913ZM7.99997 7.36666C7.65019 7.36666 7.36663 7.65022 7.36663 8C7.36663 8.34978 7.65019 8.63333 7.99997 8.63333C8.34975 8.63333 8.6333 8.34978 8.6333 8C8.6333 7.65022 8.34975 7.36666 7.99997 7.36666ZM5.96663 8C5.96663 6.87702 6.87699 5.96666 7.99997 5.96666C9.12295 5.96666 10.0333 6.87702 10.0333 8C10.0333 9.12298 9.12295 10.0333 7.99997 10.0333C6.87699 10.0333 5.96663 9.12298 5.96663 8ZM12 7.3C12.3866 7.3 12.7 7.6134 12.7 8C12.7 9.32731 12.1525 10.5165 11.2708 11.318C10.9848 11.578 10.5421 11.5569 10.282 11.2709C10.022 10.9848 10.043 10.5421 10.3291 10.282C10.9141 9.7502 11.3 8.93935 11.3 8C11.3 7.6134 11.6134 7.3 12 7.3Z"
      fill="currentColor"
    />
  </svg>
);
export default Disc3Icon;
