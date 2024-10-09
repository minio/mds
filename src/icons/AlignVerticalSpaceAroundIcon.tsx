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

const AlignVerticalSpaceAroundIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.633301 2.66667C0.633301 2.28008 0.946701 1.96667 1.3333 1.96667H14.6666C15.0532 1.96667 15.3666 2.28008 15.3666 2.66667C15.3666 3.05327 15.0532 3.36667 14.6666 3.36667H1.3333C0.946701 3.36667 0.633301 3.05327 0.633301 2.66667ZM5.99997 6.70001C5.65019 6.70001 5.36663 6.98356 5.36663 7.33334V8.66667C5.36663 9.01646 5.65019 9.30001 5.99997 9.30001H9.99997C10.3497 9.30001 10.6333 9.01646 10.6333 8.66667V7.33334C10.6333 6.98356 10.3497 6.70001 9.99997 6.70001H5.99997ZM3.96663 7.33334C3.96663 6.21036 4.87699 5.30001 5.99997 5.30001H9.99997C11.1229 5.30001 12.0333 6.21036 12.0333 7.33334V8.66667C12.0333 9.78965 11.1229 10.7 9.99997 10.7H5.99997C4.87699 10.7 3.96663 9.78965 3.96663 8.66667V7.33334ZM0.633301 13.3333C0.633301 12.9467 0.946701 12.6333 1.3333 12.6333H14.6666C15.0532 12.6333 15.3666 12.9467 15.3666 13.3333C15.3666 13.7199 15.0532 14.0333 14.6666 14.0333H1.3333C0.946701 14.0333 0.633301 13.7199 0.633301 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default AlignVerticalSpaceAroundIcon;
