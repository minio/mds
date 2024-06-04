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

const BracketsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6333 2C2.6333 1.6134 2.9467 1.3 3.3333 1.3H5.3333C5.7199 1.3 6.0333 1.6134 6.0333 2C6.0333 2.3866 5.7199 2.7 5.3333 2.7H4.0333V13.3H5.3333C5.7199 13.3 6.0333 13.6134 6.0333 14C6.0333 14.3866 5.7199 14.7 5.3333 14.7H3.3333C2.9467 14.7 2.6333 14.3866 2.6333 14V2ZM9.96663 2C9.96663 1.6134 10.28 1.3 10.6666 1.3H12.6666C13.0532 1.3 13.3666 1.6134 13.3666 2V14C13.3666 14.3866 13.0532 14.7 12.6666 14.7H10.6666C10.28 14.7 9.96663 14.3866 9.96663 14C9.96663 13.6134 10.28 13.3 10.6666 13.3H11.9666V2.7H10.6666C10.28 2.7 9.96663 2.3866 9.96663 2Z"
      fill="currentColor"
    />
  </svg>
);
export default BracketsIcon;
