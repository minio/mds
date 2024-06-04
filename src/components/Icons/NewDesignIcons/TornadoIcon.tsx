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

const TornadoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.29999 2.66667C1.29999 2.28008 1.61339 1.96667 1.99999 1.96667H14C14.3866 1.96667 14.7 2.28008 14.7 2.66667C14.7 3.05327 14.3866 3.36667 14 3.36667H1.99999C1.61339 3.36667 1.29999 3.05327 1.29999 2.66667ZM3.29999 5.33334C3.29999 4.94674 3.61339 4.63334 3.99999 4.63334H12C12.3866 4.63334 12.7 4.94674 12.7 5.33334C12.7 5.71994 12.3866 6.03334 12 6.03334H3.99999C3.61339 6.03334 3.29999 5.71994 3.29999 5.33334ZM5.29999 8.00001C5.29999 7.61341 5.61339 7.30001 5.99999 7.30001H12.6667C13.0533 7.30001 13.3667 7.61341 13.3667 8.00001C13.3667 8.38661 13.0533 8.70001 12.6667 8.70001H5.99999C5.61339 8.70001 5.29999 8.38661 5.29999 8.00001ZM5.96665 10.6667C5.96665 10.2801 6.28006 9.96667 6.66665 9.96667H10.6667C11.0533 9.96667 11.3667 10.2801 11.3667 10.6667C11.3667 11.0533 11.0533 11.3667 10.6667 11.3667H6.66665C6.28006 11.3667 5.96665 11.0533 5.96665 10.6667ZM5.29999 13.3333C5.29999 12.9467 5.61339 12.6333 5.99999 12.6333H7.33332C7.71992 12.6333 8.03332 12.9467 8.03332 13.3333C8.03332 13.7199 7.71992 14.0333 7.33332 14.0333H5.99999C5.61339 14.0333 5.29999 13.7199 5.29999 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default TornadoIcon;
