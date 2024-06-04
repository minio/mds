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

const FileKeyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.56222 1.22888C2.94355 0.847557 3.46073 0.633331 4.00001 0.633331H10C10.1857 0.633331 10.3637 0.707081 10.495 0.838357L13.8283 4.17169C13.9596 4.30297 14.0333 4.48101 14.0333 4.66666V13.3333C14.0333 13.8726 13.8191 14.3898 13.4378 14.7711C13.0565 15.1524 12.5393 15.3667 12 15.3667H4.00001C3.46073 15.3667 2.94355 15.1524 2.56222 14.7711C2.1809 14.3898 1.96667 13.8726 1.96667 13.3333V2.66666C1.96667 2.12739 2.1809 1.6102 2.56222 1.22888ZM4.00001 2.03333C3.83204 2.03333 3.67095 2.10006 3.55217 2.21883C3.4334 2.3376 3.36667 2.49869 3.36667 2.66666V13.3333C3.36667 13.5013 3.4334 13.6624 3.55217 13.7812C3.67095 13.8999 3.83204 13.9667 4.00001 13.9667H12C12.168 13.9667 12.3291 13.8999 12.4478 13.7812C12.5666 13.6624 12.6333 13.5013 12.6333 13.3333V4.95661L9.71006 2.03333H4.00001ZM11.1616 6.17169C11.435 6.44506 11.435 6.88827 11.1616 7.16164L10.99 7.33333L11.1616 7.50502C11.435 7.77839 11.435 8.22161 11.1616 8.49497C10.8883 8.76834 10.4451 8.76834 10.1717 8.49497L10 8.32328L8.51191 9.81137C8.63263 10.0714 8.70001 10.3611 8.70001 10.6667C8.70001 11.7896 7.78965 12.7 6.66667 12.7C5.5437 12.7 4.63334 11.7896 4.63334 10.6667C4.63334 9.54368 5.5437 8.63333 6.66667 8.63333C6.97219 8.63333 7.26197 8.70071 7.52196 8.82143L10.1717 6.17169C10.4451 5.89832 10.8883 5.89832 11.1616 6.17169ZM6.66667 10.0333C6.31689 10.0333 6.03334 10.3169 6.03334 10.6667C6.03334 11.0164 6.31689 11.3 6.66667 11.3C7.01646 11.3 7.30001 11.0164 7.30001 10.6667C7.30001 10.3169 7.01646 10.0333 6.66667 10.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default FileKeyIcon;
