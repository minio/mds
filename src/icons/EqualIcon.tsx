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

const EqualIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6333 5.99999C2.6333 5.61339 2.9467 5.29999 3.3333 5.29999H12.6666C13.0532 5.29999 13.3666 5.61339 13.3666 5.99999C13.3666 6.38659 13.0532 6.69999 12.6666 6.69999H3.3333C2.9467 6.69999 2.6333 6.38659 2.6333 5.99999ZM2.6333 9.99999C2.6333 9.61339 2.9467 9.29999 3.3333 9.29999H12.6666C13.0532 9.29999 13.3666 9.61339 13.3666 9.99999C13.3666 10.3866 13.0532 10.7 12.6666 10.7H3.3333C2.9467 10.7 2.6333 10.3866 2.6333 9.99999Z"
      fill="currentColor"
    />
  </svg>
);
export default EqualIcon;
