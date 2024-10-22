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

const DiffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 1.29999C8.38657 1.29999 8.69997 1.61339 8.69997 1.99999V5.96665H12.6666C13.0532 5.96665 13.3666 6.28006 13.3666 6.66665C13.3666 7.05325 13.0532 7.36665 12.6666 7.36665H8.69997V11.3333C8.69997 11.7199 8.38657 12.0333 7.99997 12.0333C7.61337 12.0333 7.29997 11.7199 7.29997 11.3333V7.36665H3.3333C2.9467 7.36665 2.6333 7.05325 2.6333 6.66665C2.6333 6.28006 2.9467 5.96665 3.3333 5.96665H7.29997V1.99999C7.29997 1.61339 7.61337 1.29999 7.99997 1.29999ZM2.6333 14C2.6333 13.6134 2.9467 13.3 3.3333 13.3H12.6666C13.0532 13.3 13.3666 13.6134 13.3666 14C13.3666 14.3866 13.0532 14.7 12.6666 14.7H3.3333C2.9467 14.7 2.6333 14.3866 2.6333 14Z"
      fill="currentColor"
    />
  </svg>
);
export default DiffIcon;
