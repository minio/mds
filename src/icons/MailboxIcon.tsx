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

const MailboxIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33333 4.03336C3.05327 4.03336 2.03334 5.05329 2.03334 6.33336V11.3334C2.03334 11.5013 2.10006 11.6624 2.21883 11.7812C2.33761 11.9 2.4987 11.9667 2.66667 11.9667H6C6.16797 11.9667 6.32906 11.9 6.44784 11.7812C6.56661 11.6624 6.63333 11.5013 6.63333 11.3334V6.33336C6.63333 5.05329 5.6134 4.03336 4.33333 4.03336ZM7.23813 4.03336C7.73665 4.66356 8.03333 5.46184 8.03333 6.33336V11.3334C8.03333 11.5505 7.99859 11.7641 7.93219 11.9667H13.3333C13.5013 11.9667 13.6624 11.9 13.7812 11.7812C13.8999 11.6624 13.9667 11.5013 13.9667 11.3334V6.00003C13.9667 4.91996 13.0801 4.03336 12 4.03336H7.23813ZM13.3333 13.3667C13.8726 13.3667 14.3898 13.1525 14.7711 12.7711C15.1524 12.3898 15.3667 11.8726 15.3667 11.3334V6.00003C15.3667 4.14676 13.8533 2.63336 12 2.63336H4.33333C2.28007 2.63336 0.633335 4.2801 0.633335 6.33336V11.3334C0.633335 11.8726 0.847561 12.3898 1.22888 12.7711C1.61021 13.1525 2.12739 13.3667 2.66667 13.3667H13.3333ZM9.3 6.00003C9.3 5.61343 9.6134 5.30003 10 5.30003H12C12.3866 5.30003 12.7 5.61343 12.7 6.00003V7.33336C12.7 7.71996 12.3866 8.03336 12 8.03336C11.6134 8.03336 11.3 7.71996 11.3 7.33336V6.70003H10C9.6134 6.70003 9.3 6.38663 9.3 6.00003ZM3.3 6.66669C3.3 6.2801 3.6134 5.9667 4 5.9667H4.66667C5.05327 5.9667 5.36667 6.2801 5.36667 6.66669C5.36667 7.05329 5.05327 7.36669 4.66667 7.36669H4C3.6134 7.36669 3.3 7.05329 3.3 6.66669Z"
      fill="currentColor"
    />
  </svg>
);
export default MailboxIcon;
