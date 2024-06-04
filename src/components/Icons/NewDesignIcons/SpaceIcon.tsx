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

const SpaceIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.33336 10.6333C1.71996 10.6333 2.03336 10.9467 2.03336 11.3333V11.9599C2.03436 11.961 2.03546 11.9621 2.03667 11.9633C2.03788 11.9645 2.03904 11.9656 2.04015 11.9666H13.9599C13.961 11.9656 13.9622 11.9645 13.9634 11.9633C13.9646 11.9621 13.9657 11.961 13.9667 11.9599V11.3333C13.9667 10.9467 14.2801 10.6333 14.6667 10.6333C15.0533 10.6333 15.3667 10.9467 15.3667 11.3333V12C15.3667 12.3943 15.1766 12.73 14.9533 12.9533C14.7301 13.1765 14.3944 13.3666 14 13.3666H2.00003C1.6057 13.3666 1.26996 13.1765 1.04672 12.9533C0.823478 12.73 0.633362 12.3943 0.633362 12V11.3333C0.633362 10.9467 0.946762 10.6333 1.33336 10.6333Z"
      fill="currentColor"
    />
  </svg>
);
export default SpaceIcon;
