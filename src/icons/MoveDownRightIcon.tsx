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

const MoveDownRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.83836 2.83833C3.11172 2.56496 3.55494 2.56496 3.82831 2.83833L11.9667 10.9767V8.66663C11.9667 8.28003 12.2801 7.96663 12.6667 7.96663C13.0533 7.96663 13.3667 8.28003 13.3667 8.66663V12.6666C13.3667 13.0532 13.0533 13.3666 12.6667 13.3666H8.66666C8.28006 13.3666 7.96666 13.0532 7.96666 12.6666C7.96666 12.28 8.28006 11.9666 8.66666 11.9666H10.9767L2.83836 3.82828C2.56499 3.55491 2.56499 3.11169 2.83836 2.83833Z"
      fill="currentColor"
    />
  </svg>
);
export default MoveDownRightIcon;
