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

const BotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.6333 2.66667C4.6333 2.28007 4.9467 1.96667 5.3333 1.96667H7.99997C8.38657 1.96667 8.69997 2.28007 8.69997 2.66667V4.63333H12C13.1229 4.63333 14.0333 5.54369 14.0333 6.66667V8.63333H14.6666C15.0532 8.63333 15.3666 8.94673 15.3666 9.33333C15.3666 9.71993 15.0532 10.0333 14.6666 10.0333H14.0333V12C14.0333 13.123 13.1229 14.0333 12 14.0333H3.99997C2.87699 14.0333 1.96663 13.123 1.96663 12V10.0333H1.3333C0.946701 10.0333 0.633301 9.71993 0.633301 9.33333C0.633301 8.94673 0.946701 8.63333 1.3333 8.63333H1.96663V6.66667C1.96663 5.54369 2.87699 4.63333 3.99997 4.63333H7.29997V3.36667H5.3333C4.9467 3.36667 4.6333 3.05327 4.6333 2.66667ZM3.99997 6.03333C3.65019 6.03333 3.36663 6.31689 3.36663 6.66667V12C3.36663 12.3498 3.65019 12.6333 3.99997 12.6333H12C12.3497 12.6333 12.6333 12.3498 12.6333 12V6.66667C12.6333 6.31689 12.3497 6.03333 12 6.03333H3.99997ZM5.99997 7.96667C6.38657 7.96667 6.69997 8.28007 6.69997 8.66667V10C6.69997 10.3866 6.38657 10.7 5.99997 10.7C5.61337 10.7 5.29997 10.3866 5.29997 10V8.66667C5.29997 8.28007 5.61337 7.96667 5.99997 7.96667ZM9.99997 7.96667C10.3866 7.96667 10.7 8.28007 10.7 8.66667V10C10.7 10.3866 10.3866 10.7 9.99997 10.7C9.61337 10.7 9.29997 10.3866 9.29997 10V8.66667C9.29997 8.28007 9.61337 7.96667 9.99997 7.96667Z"
      fill="currentColor"
    />
  </svg>
);
export default BotIcon;
