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

const CaseLowerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.33322 3.96667C9.71982 3.96667 10.0332 4.28007 10.0332 4.66667V5.633C10.4189 5.42075 10.8619 5.3 11.3332 5.3C12.8244 5.3 14.0332 6.50883 14.0332 8C14.0332 9.49117 12.8244 10.7 11.3332 10.7C10.8297 10.7 10.3583 10.5622 9.95485 10.3221C9.83827 10.5466 9.60366 10.7 9.33322 10.7C8.94662 10.7 8.63322 10.3866 8.63322 10V4.66667C8.63322 4.28007 8.94662 3.96667 9.33322 3.96667ZM10.0332 8C10.0332 8.71797 10.6152 9.3 11.3332 9.3C12.0512 9.3 12.6332 8.71797 12.6332 8C12.6332 7.28203 12.0512 6.7 11.3332 6.7C10.6152 6.7 10.0332 7.28203 10.0332 8ZM4.66655 6.7C3.94858 6.7 3.36655 7.28203 3.36655 8C3.36655 8.71797 3.94858 9.3 4.66655 9.3C5.38452 9.3 5.96655 8.71797 5.96655 8C5.96655 7.28203 5.38452 6.7 4.66655 6.7ZM6.04492 5.67786C5.64145 5.43784 5.1701 5.3 4.66655 5.3C3.17538 5.3 1.96655 6.50883 1.96655 8C1.96655 9.49117 3.17538 10.7 4.66655 10.7C5.1701 10.7 5.64144 10.5622 6.04492 10.3221C6.1615 10.5466 6.39612 10.7 6.66655 10.7C7.05315 10.7 7.36655 10.3866 7.36655 10V6C7.36655 5.6134 7.05315 5.3 6.66655 5.3C6.39612 5.3 6.1615 5.45336 6.04492 5.67786Z"
      fill="currentColor"
    />
  </svg>
);
export default CaseLowerIcon;
