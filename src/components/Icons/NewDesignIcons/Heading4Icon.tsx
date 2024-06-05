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

const Heading4Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66667 3.29999C3.05327 3.29999 3.36667 3.61339 3.36667 3.99999V7.29999H7.30001V3.99999C7.30001 3.61339 7.61341 3.29999 8.00001 3.29999C8.38661 3.29999 8.70001 3.61339 8.70001 3.99999V12C8.70001 12.3866 8.38661 12.7 8.00001 12.7C7.61341 12.7 7.30001 12.3866 7.30001 12V8.69999H3.36667V12C3.36667 12.3866 3.05327 12.7 2.66667 12.7C2.28008 12.7 1.96667 12.3866 1.96667 12V3.99999C1.96667 3.61339 2.28008 3.29999 2.66667 3.29999ZM11.3333 5.96665C11.7199 5.96665 12.0333 6.28006 12.0333 6.66665V8.63332H13.3V6.66665C13.3 6.28006 13.6134 5.96665 14 5.96665C14.3866 5.96665 14.7 6.28006 14.7 6.66665V12C14.7 12.3866 14.3866 12.7 14 12.7C13.6134 12.7 13.3 12.3866 13.3 12V10.0333H11.3333C10.9467 10.0333 10.6333 9.71992 10.6333 9.33332V6.66665C10.6333 6.28006 10.9467 5.96665 11.3333 5.96665Z"
      fill="currentColor"
    />
  </svg>
);
export default Heading4Icon;
