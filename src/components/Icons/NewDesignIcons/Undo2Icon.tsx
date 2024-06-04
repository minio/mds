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

const Undo2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.49498 2.1717C6.76834 2.44507 6.76834 2.88828 6.49498 3.16165L4.35662 5.30001H9.66667C10.2401 5.30001 10.8079 5.41296 11.3377 5.6324C11.8675 5.85185 12.3489 6.17349 12.7544 6.57898C13.1599 6.98446 13.4815 7.46584 13.7009 7.99562C13.9204 8.52541 14.0333 9.09324 14.0333 9.66667C14.0333 10.2401 13.9204 10.8079 13.7009 11.3377C13.4815 11.8675 13.1599 12.3489 12.7544 12.7544C12.3489 13.1599 11.8675 13.4815 11.3377 13.7009C10.8079 13.9204 10.2401 14.0333 9.66667 14.0333H7.33333C6.94673 14.0333 6.63333 13.7199 6.63333 13.3333C6.63333 12.9467 6.94673 12.6333 7.33333 12.6333H9.66667C10.0563 12.6333 10.442 12.5566 10.802 12.4075C11.1619 12.2584 11.4889 12.0399 11.7644 11.7644C12.0399 11.4889 12.2584 11.1619 12.4075 10.802C12.5566 10.442 12.6333 10.0563 12.6333 9.66667C12.6333 9.27709 12.5566 8.89131 12.4075 8.53138C12.2584 8.17145 12.0399 7.8444 11.7644 7.56892C11.4889 7.29344 11.1619 7.07492 10.802 6.92583C10.442 6.77674 10.0563 6.70001 9.66667 6.70001H4.35662L6.49498 8.83837C6.76834 9.11173 6.76834 9.55495 6.49498 9.82832C6.22161 10.1017 5.77839 10.1017 5.50503 9.82832L2.17169 6.49498C1.89833 6.22162 1.89833 5.7784 2.17169 5.50503L5.50503 2.1717C5.77839 1.89833 6.22161 1.89833 6.49498 2.1717Z"
      fill="currentColor"
    />
  </svg>
);
export default Undo2Icon;
