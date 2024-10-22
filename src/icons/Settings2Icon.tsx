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

const Settings2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66655 3.36667C3.94858 3.36667 3.36655 3.9487 3.36655 4.66667C3.36655 5.38464 3.94858 5.96667 4.66655 5.96667C5.38452 5.96667 5.96655 5.38464 5.96655 4.66667C5.96655 3.9487 5.38452 3.36667 4.66655 3.36667ZM1.96655 4.66667C1.96655 3.17551 3.17538 1.96667 4.66655 1.96667C5.91647 1.96667 6.96802 2.816 7.27555 3.96902C7.29457 3.96747 7.3138 3.96667 7.33322 3.96667H13.3332C13.7198 3.96667 14.0332 4.28008 14.0332 4.66667C14.0332 5.05327 13.7198 5.36667 13.3332 5.36667H7.33322C7.3138 5.36667 7.29457 5.36588 7.27555 5.36433C6.96802 6.51735 5.91647 7.36667 4.66655 7.36667C3.17538 7.36667 1.96655 6.15784 1.96655 4.66667ZM11.3332 10.0333C10.6152 10.0333 10.0332 10.6154 10.0332 11.3333C10.0332 12.0513 10.6152 12.6333 11.3332 12.6333C12.0512 12.6333 12.6332 12.0513 12.6332 11.3333C12.6332 10.6154 12.0512 10.0333 11.3332 10.0333ZM8.72484 10.6333C9.03318 9.48152 10.0841 8.63334 11.3332 8.63334C12.8244 8.63334 14.0332 9.84217 14.0332 11.3333C14.0332 12.8245 12.8244 14.0333 11.3332 14.0333C10.0841 14.0333 9.03318 13.1852 8.72484 12.0333H3.33322C2.94662 12.0333 2.63322 11.7199 2.63322 11.3333C2.63322 10.9467 2.94662 10.6333 3.33322 10.6333H8.72484Z"
      fill="currentColor"
    />
  </svg>
);
export default Settings2Icon;
