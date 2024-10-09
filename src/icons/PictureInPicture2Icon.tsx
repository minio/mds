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

const PictureInPicture2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.22891 2.56222C1.61024 2.1809 2.12742 1.96667 2.6667 1.96667H12.6667C13.206 1.96667 13.7232 2.1809 14.1045 2.56222C14.4858 2.94355 14.7 3.46073 14.7 4.00001V6.00001C14.7 6.38661 14.3866 6.70001 14 6.70001C13.6134 6.70001 13.3 6.38661 13.3 6.00001V4.00001C13.3 3.83204 13.2333 3.67095 13.1145 3.55217C12.9958 3.4334 12.8347 3.36667 12.6667 3.36667H2.6667C2.49872 3.36667 2.33763 3.4334 2.21886 3.55217C2.10009 3.67095 2.03336 3.83204 2.03336 4.00001V10.6667C2.03336 11.0134 2.31996 11.3 2.6667 11.3H5.33336C5.71996 11.3 6.03336 11.6134 6.03336 12C6.03336 12.3866 5.71996 12.7 5.33336 12.7H2.6667C1.54676 12.7 0.633362 11.7866 0.633362 10.6667V4.00001C0.633362 3.46073 0.847587 2.94355 1.22891 2.56222ZM9.33336 9.36667C8.98358 9.36667 8.70003 9.65023 8.70003 10V12C8.70003 12.3498 8.98358 12.6333 9.33336 12.6333H13.3334C13.6831 12.6333 13.9667 12.3498 13.9667 12V10C13.9667 9.65023 13.6831 9.36667 13.3334 9.36667H9.33336ZM7.30003 10C7.30003 8.87703 8.21038 7.96667 9.33336 7.96667H13.3334C14.4563 7.96667 15.3667 8.87703 15.3667 10V12C15.3667 13.123 14.4563 14.0333 13.3334 14.0333H9.33336C8.21038 14.0333 7.30003 13.123 7.30003 12V10Z"
      fill="currentColor"
    />
  </svg>
);
export default PictureInPicture2Icon;
