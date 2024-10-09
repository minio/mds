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

const ReplyAllIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.16167 4.1717C5.43504 4.44507 5.43504 4.88828 5.16167 5.16165L2.32331 8.00001L5.16167 10.8384C5.43504 11.1117 5.43504 11.5549 5.16167 11.8283C4.8883 12.1017 4.44509 12.1017 4.17172 11.8283L0.838387 8.49498C0.56502 8.22162 0.56502 7.7784 0.838387 7.50503L4.17172 4.1717C4.44509 3.89833 4.8883 3.89833 5.16167 4.1717ZM8.495 4.1717C8.76837 4.44507 8.76837 4.88828 8.495 5.16165L6.35664 7.30001H12C12.8929 7.30001 13.7492 7.65471 14.3806 8.28608C15.012 8.91745 15.3667 9.77378 15.3667 10.6667V12C15.3667 12.3866 15.0533 12.7 14.6667 12.7C14.2801 12.7 13.9667 12.3866 13.9667 12V10.6667C13.9667 10.1451 13.7595 9.64485 13.3907 9.27603C13.0218 8.90721 12.5216 8.70001 12 8.70001H6.35664L8.495 10.8384C8.76837 11.1117 8.76837 11.5549 8.495 11.8283C8.22164 12.1017 7.77842 12.1017 7.50505 11.8283L4.17172 8.49498C3.89835 8.22162 3.89835 7.7784 4.17172 7.50503L7.50505 4.1717C7.77842 3.89833 8.22164 3.89833 8.495 4.1717Z"
      fill="currentColor"
    />
  </svg>
);
export default ReplyAllIcon;
