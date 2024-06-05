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

const Heading1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66667 3.29999C3.05327 3.29999 3.36667 3.61339 3.36667 3.99999V7.29999H7.30001V3.99999C7.30001 3.61339 7.61341 3.29999 8.00001 3.29999C8.38661 3.29999 8.70001 3.61339 8.70001 3.99999V12C8.70001 12.3866 8.38661 12.7 8.00001 12.7C7.61341 12.7 7.30001 12.3866 7.30001 12V8.69999H3.36667V12C3.36667 12.3866 3.05327 12.7 2.66667 12.7C2.28008 12.7 1.96667 12.3866 1.96667 12V3.99999C1.96667 3.61339 2.28008 3.29999 2.66667 3.29999ZM13.6636 6.04948C13.8913 6.1713 14.0333 6.4085 14.0333 6.66665V12C14.0333 12.3866 13.7199 12.7 13.3333 12.7C12.9467 12.7 12.6333 12.3866 12.6333 12V7.97462L11.7216 8.58242C11.4 8.79687 10.9654 8.70995 10.7509 8.38828C10.5365 8.06661 10.6234 7.632 10.9451 7.41755L12.9451 6.08422C13.1599 5.94102 13.436 5.92767 13.6636 6.04948Z"
      fill="currentColor"
    />
  </svg>
);
export default Heading1Icon;
