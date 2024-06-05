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

const Music2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.64866 0.727864C7.86448 0.602618 8.13065 0.601729 8.34731 0.725531L13.014 3.3922C13.3496 3.584 13.4663 4.0116 13.2744 4.34726C13.0826 4.68293 12.655 4.79954 12.3194 4.60774L8.70001 2.53953V12C8.70001 13.8593 7.1927 15.3666 5.33334 15.3666C3.47398 15.3666 1.96667 13.8593 1.96667 12C1.96667 10.1406 3.47398 8.6333 5.33334 8.6333C6.06748 8.6333 6.74674 8.86828 7.30001 9.26714V1.3333C7.30001 1.08377 7.43284 0.853109 7.64866 0.727864ZM7.30001 12C7.30001 10.9138 6.4195 10.0333 5.33334 10.0333C4.24718 10.0333 3.36667 10.9138 3.36667 12C3.36667 13.0861 4.24718 13.9666 5.33334 13.9666C6.4195 13.9666 7.30001 13.0861 7.30001 12Z"
      fill="currentColor"
    />
  </svg>
);
export default Music2Icon;
