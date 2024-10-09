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

const ItalicIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.96663 2.66667C5.96663 2.28008 6.28003 1.96667 6.66663 1.96667H12.6666C13.0532 1.96667 13.3666 2.28008 13.3666 2.66667C13.3666 3.05327 13.0532 3.36667 12.6666 3.36667H10.4851L7.01007 12.6333H9.3333C9.7199 12.6333 10.0333 12.9467 10.0333 13.3333C10.0333 13.7199 9.7199 14.0333 9.3333 14.0333H3.3333C2.9467 14.0333 2.6333 13.7199 2.6333 13.3333C2.6333 12.9467 2.9467 12.6333 3.3333 12.6333H5.51487L8.98987 3.36667H6.66663C6.28003 3.36667 5.96663 3.05327 5.96663 2.66667Z"
      fill="currentColor"
    />
  </svg>
);
export default ItalicIcon;
