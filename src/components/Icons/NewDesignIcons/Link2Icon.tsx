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

const Link2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66663 5.36667C3.96823 5.36667 3.29843 5.64411 2.80459 6.13796C2.31074 6.63181 2.0333 7.3016 2.0333 8.00001C2.0333 8.69841 2.31074 9.36821 2.80459 9.86206C3.29843 10.3559 3.96823 10.6333 4.66663 10.6333H5.99997C6.38657 10.6333 6.69997 10.9467 6.69997 11.3333C6.69997 11.7199 6.38657 12.0333 5.99997 12.0333H4.66663C3.59693 12.0333 2.57103 11.6084 1.81464 10.852C1.05824 10.0956 0.633301 9.06971 0.633301 8.00001C0.633301 6.9303 1.05824 5.90441 1.81464 5.14801C2.57103 4.39161 3.59693 3.96667 4.66663 3.96667H5.99997C6.38657 3.96667 6.69997 4.28008 6.69997 4.66667C6.69997 5.05327 6.38657 5.36667 5.99997 5.36667H4.66663ZM9.29997 4.66667C9.29997 4.28008 9.61337 3.96667 9.99997 3.96667H11.3333C12.403 3.96667 13.4289 4.39161 14.1853 5.14801C14.9417 5.90441 15.3666 6.9303 15.3666 8.00001C15.3666 9.06971 14.9417 10.0956 14.1853 10.852C13.4289 11.6084 12.403 12.0333 11.3333 12.0333H9.99997C9.61337 12.0333 9.29997 11.7199 9.29997 11.3333C9.29997 10.9467 9.61337 10.6333 9.99997 10.6333H11.3333C12.0317 10.6333 12.7015 10.3559 13.1953 9.86206C13.6892 9.36821 13.9666 8.69841 13.9666 8.00001C13.9666 7.3016 13.6892 6.63181 13.1953 6.13796C12.7015 5.64411 12.0317 5.36667 11.3333 5.36667H9.99997C9.61337 5.36667 9.29997 5.05327 9.29997 4.66667ZM4.6333 8.00001C4.6333 7.61341 4.9467 7.30001 5.3333 7.30001H10.6666C11.0532 7.30001 11.3666 7.61341 11.3666 8.00001C11.3666 8.38661 11.0532 8.70001 10.6666 8.70001H5.3333C4.9467 8.70001 4.6333 8.38661 4.6333 8.00001Z"
      fill="currentColor"
    />
  </svg>
);
export default Link2Icon;
