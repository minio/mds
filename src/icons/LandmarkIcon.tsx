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

const LandmarkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.62899 0.739763C7.85598 0.597895 8.144 0.597895 8.37099 0.739763L13.7043 4.0731C13.9691 4.2386 14.0923 4.5595 14.0062 4.85967C13.9201 5.15985 13.6456 5.36669 13.3333 5.36669H2.66665C2.35438 5.36669 2.07987 5.15985 1.99378 4.85967C1.90769 4.5595 2.03085 4.2386 2.29566 4.0731L7.62899 0.739763ZM5.10741 3.9667H10.8926L7.99999 2.15884L5.10741 3.9667ZM3.99999 6.63336C4.38659 6.63336 4.69999 6.94676 4.69999 7.33336V12C4.69999 12.3866 4.38659 12.7 3.99999 12.7C3.61339 12.7 3.29999 12.3866 3.29999 12V7.33336C3.29999 6.94676 3.61339 6.63336 3.99999 6.63336ZM6.66665 6.63336C7.05325 6.63336 7.36665 6.94676 7.36665 7.33336V12C7.36665 12.3866 7.05325 12.7 6.66665 12.7C6.28006 12.7 5.96665 12.3866 5.96665 12V7.33336C5.96665 6.94676 6.28006 6.63336 6.66665 6.63336ZM9.33332 6.63336C9.71992 6.63336 10.0333 6.94676 10.0333 7.33336V12C10.0333 12.3866 9.71992 12.7 9.33332 12.7C8.94672 12.7 8.63332 12.3866 8.63332 12V7.33336C8.63332 6.94676 8.94672 6.63336 9.33332 6.63336ZM12 6.63336C12.3866 6.63336 12.7 6.94676 12.7 7.33336V12C12.7 12.3866 12.3866 12.7 12 12.7C11.6134 12.7 11.3 12.3866 11.3 12V7.33336C11.3 6.94676 11.6134 6.63336 12 6.63336ZM1.29999 14.6667C1.29999 14.2801 1.61339 13.9667 1.99999 13.9667H14C14.3866 13.9667 14.7 14.2801 14.7 14.6667C14.7 15.0533 14.3866 15.3667 14 15.3667H1.99999C1.61339 15.3667 1.29999 15.0533 1.29999 14.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default LandmarkIcon;
