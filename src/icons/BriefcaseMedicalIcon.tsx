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

const BriefcaseMedicalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.22885 1.22888C5.61017 0.847557 6.12736 0.633331 6.66663 0.633331H9.3333C9.87257 0.633331 10.3898 0.847557 10.7711 1.22888C11.1524 1.6102 11.3666 2.12739 11.3666 2.66666V3.3H13.3333C14.4563 3.3 15.3666 4.21035 15.3666 5.33333V12C15.3666 13.123 14.4563 14.0333 13.3333 14.0333H2.66663C1.54366 14.0333 0.633301 13.123 0.633301 12V5.33333C0.633301 4.21035 1.54366 3.3 2.66663 3.3H4.6333V2.66666C4.6333 2.12739 4.84753 1.6102 5.22885 1.22888ZM4.69997 4.7H11.3V12.6333H4.69997V4.7ZM3.29997 4.7H2.66663C2.31685 4.7 2.0333 4.98355 2.0333 5.33333V12C2.0333 12.3498 2.31685 12.6333 2.66663 12.6333H3.29997V4.7ZM12.7 12.6333H13.3333C13.6831 12.6333 13.9666 12.3498 13.9666 12V5.33333C13.9666 4.98355 13.6831 4.7 13.3333 4.7H12.7V12.6333ZM9.96663 3.3H6.0333V2.66666C6.0333 2.49869 6.10003 2.3376 6.2188 2.21883C6.33757 2.10006 6.49866 2.03333 6.66663 2.03333H9.3333C9.50127 2.03333 9.66236 2.10006 9.78113 2.21883C9.89991 2.3376 9.96663 2.49869 9.96663 2.66666V3.3ZM7.99997 6.63333C8.38657 6.63333 8.69997 6.94673 8.69997 7.33333V7.96666H9.3333C9.7199 7.96666 10.0333 8.28007 10.0333 8.66667C10.0333 9.05326 9.7199 9.36666 9.3333 9.36666H8.69997V10C8.69997 10.3866 8.38657 10.7 7.99997 10.7C7.61337 10.7 7.29997 10.3866 7.29997 10V9.36666H6.66663C6.28003 9.36666 5.96663 9.05326 5.96663 8.66667C5.96663 8.28007 6.28003 7.96666 6.66663 7.96666H7.29997V7.33333C7.29997 6.94673 7.61337 6.63333 7.99997 6.63333Z"
      fill="currentColor"
    />
  </svg>
);
export default BriefcaseMedicalIcon;
