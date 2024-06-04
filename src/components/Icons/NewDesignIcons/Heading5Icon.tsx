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

const Heading5Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66655 3.29999C3.05315 3.29999 3.36655 3.61339 3.36655 3.99999V7.29999H7.29989V3.99999C7.29989 3.61339 7.61329 3.29999 7.99989 3.29999C8.38649 3.29999 8.69989 3.61339 8.69989 3.99999V12C8.69989 12.3866 8.38649 12.7 7.99989 12.7C7.61329 12.7 7.29989 12.3866 7.29989 12V8.69999H3.36655V12C3.36655 12.3866 3.05315 12.7 2.66655 12.7C2.27995 12.7 1.96655 12.3866 1.96655 12V3.99999C1.96655 3.61339 2.27995 3.29999 2.66655 3.29999ZM10.6332 6.66665C10.6332 6.28006 10.9466 5.96665 11.3332 5.96665H13.9999C14.3865 5.96665 14.6999 6.28006 14.6999 6.66665C14.6999 7.05325 14.3865 7.36665 13.9999 7.36665H12.0332V7.96665H12.1999C13.5327 7.96665 14.6999 8.96169 14.6999 10.3333C14.6999 11.705 13.5327 12.7 12.1999 12.7C11.7586 12.7 11.3847 12.6083 11.0202 12.4261C10.6744 12.2532 10.5342 11.8327 10.7071 11.4869C10.88 11.1412 11.3005 11.001 11.6463 11.1739C11.8151 11.2583 11.9745 11.3 12.1999 11.3C12.8671 11.3 13.2999 10.8284 13.2999 10.3333C13.2999 9.83829 12.8671 9.36665 12.1999 9.36665H11.3332C10.9466 9.36665 10.6332 9.05325 10.6332 8.66665V6.66665Z"
      fill="currentColor"
    />
  </svg>
);
export default Heading5Icon;
