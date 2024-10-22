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

const KanbanIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.00005 2.63336C4.38665 2.63336 4.70005 2.94676 4.70005 3.33336V10.6667C4.70005 11.0533 4.38665 11.3667 4.00005 11.3667C3.61345 11.3667 3.30005 11.0533 3.30005 10.6667V3.33336C3.30005 2.94676 3.61345 2.63336 4.00005 2.63336ZM8.00005 2.63336C8.38665 2.63336 8.70005 2.94676 8.70005 3.33336V7.33336C8.70005 7.71996 8.38665 8.03336 8.00005 8.03336C7.61345 8.03336 7.30005 7.71996 7.30005 7.33336V3.33336C7.30005 2.94676 7.61345 2.63336 8.00005 2.63336ZM12 2.63336C12.3866 2.63336 12.7 2.94676 12.7 3.33336V12.6667C12.7 13.0533 12.3866 13.3667 12 13.3667C11.6134 13.3667 11.3 13.0533 11.3 12.6667V3.33336C11.3 2.94676 11.6134 2.63336 12 2.63336Z"
      fill="currentColor"
    />
  </svg>
);
export default KanbanIcon;
