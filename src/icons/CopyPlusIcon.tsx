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

const CopyPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 2.03333C2.3199 2.03333 2.0333 2.31993 2.0333 2.66666V9.33333C2.0333 9.68007 2.3199 9.96666 2.66663 9.96666C3.05323 9.96666 3.36663 10.2801 3.36663 10.6667C3.36663 11.0533 3.05323 11.3667 2.66663 11.3667C1.5467 11.3667 0.633301 10.4533 0.633301 9.33333V2.66666C0.633301 1.54673 1.5467 0.633331 2.66663 0.633331H9.3333C10.4532 0.633331 11.3666 1.54673 11.3666 2.66666C11.3666 3.05326 11.0532 3.36666 10.6666 3.36666C10.28 3.36666 9.96663 3.05326 9.96663 2.66666C9.96663 2.31993 9.68003 2.03333 9.3333 2.03333H2.66663ZM6.66663 6.03333C6.31685 6.03333 6.0333 6.31688 6.0333 6.66666V13.3333C6.0333 13.6831 6.31685 13.9667 6.66663 13.9667H13.3333C13.6831 13.9667 13.9666 13.6831 13.9666 13.3333V6.66666C13.9666 6.31688 13.6831 6.03333 13.3333 6.03333H6.66663ZM4.6333 6.66666C4.6333 5.54368 5.54365 4.63333 6.66663 4.63333H13.3333C14.4563 4.63333 15.3666 5.54368 15.3666 6.66666V13.3333C15.3666 14.4563 14.4563 15.3667 13.3333 15.3667H6.66663C5.54365 15.3667 4.6333 14.4563 4.6333 13.3333V6.66666ZM9.99997 7.3C10.3866 7.3 10.7 7.6134 10.7 8V9.3H12C12.3866 9.3 12.7 9.6134 12.7 10C12.7 10.3866 12.3866 10.7 12 10.7H10.7V12C10.7 12.3866 10.3866 12.7 9.99997 12.7C9.61337 12.7 9.29997 12.3866 9.29997 12V10.7H7.99997C7.61337 10.7 7.29997 10.3866 7.29997 10C7.29997 9.6134 7.61337 9.3 7.99997 9.3H9.29997V8C9.29997 7.6134 9.61337 7.3 9.99997 7.3Z"
      fill="currentColor"
    />
  </svg>
);
export default CopyPlusIcon;
