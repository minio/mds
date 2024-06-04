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

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.50505 2.83836C5.63633 2.70708 5.81438 2.63333 6.00003 2.63333H13.3334C13.8726 2.63333 14.3898 2.84756 14.7711 3.22888C15.1525 3.6102 15.3667 4.12739 15.3667 4.66666V11.3333C15.3667 11.8726 15.1525 12.3898 14.7711 12.7711C14.3898 13.1524 13.8726 13.3667 13.3334 13.3667H6.00003C5.81438 13.3667 5.63633 13.2929 5.50505 13.1616L0.838387 8.49497C0.56502 8.22161 0.56502 7.77839 0.838387 7.50502L5.50505 2.83836ZM6.28998 4.03333L2.32331 8L6.28998 11.9667H13.3334C13.5013 11.9667 13.6624 11.8999 13.7812 11.7812C13.9 11.6624 13.9667 11.5013 13.9667 11.3333V4.66666C13.9667 4.49869 13.9 4.3376 13.7812 4.21883C13.6624 4.10006 13.5013 4.03333 13.3334 4.03333H6.28998ZM7.50505 5.50502C7.77842 5.23166 8.22164 5.23166 8.495 5.50502L10 7.01005L11.5051 5.50502C11.7784 5.23166 12.2216 5.23166 12.495 5.50502C12.7684 5.77839 12.7684 6.22161 12.495 6.49497L10.99 8L12.495 9.50502C12.7684 9.77839 12.7684 10.2216 12.495 10.495C12.2216 10.7683 11.7784 10.7683 11.5051 10.495L10 8.98995L8.495 10.495C8.22164 10.7683 7.77842 10.7683 7.50505 10.495C7.23169 10.2216 7.23169 9.77839 7.50505 9.50502L9.01008 8L7.50505 6.49497C7.23169 6.22161 7.23169 5.77839 7.50505 5.50502Z"
      fill="currentColor"
    />
  </svg>
);
export default DeleteIcon;
