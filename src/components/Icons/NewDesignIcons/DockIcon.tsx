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

const DockIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 3.36667C2.31685 3.36667 2.0333 3.65023 2.0333 4.00001V4.63334H13.9666V4.00001C13.9666 3.65023 13.6831 3.36667 13.3333 3.36667H2.66663ZM15.3666 4.00001C15.3666 2.87703 14.4563 1.96667 13.3333 1.96667H2.66663C1.54366 1.96667 0.633301 2.87703 0.633301 4.00001V12C0.633301 13.123 1.54366 14.0333 2.66663 14.0333H13.3333C14.4563 14.0333 15.3666 13.123 15.3666 12V4.00001ZM13.9666 6.03334H2.0333V12C2.0333 12.3498 2.31685 12.6333 2.66663 12.6333H13.3333C13.6831 12.6333 13.9666 12.3498 13.9666 12V6.03334ZM3.29997 10.6667C3.29997 10.2801 3.61337 9.96667 3.99997 9.96667H12C12.3866 9.96667 12.7 10.2801 12.7 10.6667C12.7 11.0533 12.3866 11.3667 12 11.3667H3.99997C3.61337 11.3667 3.29997 11.0533 3.29997 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default DockIcon;
