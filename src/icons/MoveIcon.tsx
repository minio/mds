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

const MoveIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50505 0.838326C7.77842 0.564959 8.22164 0.564959 8.495 0.838326L10.495 2.83833C10.7684 3.11169 10.7684 3.55491 10.495 3.82828C10.2216 4.10164 9.77842 4.10164 9.50505 3.82828L8.70003 3.02325V7.29997H12.9767L12.1717 6.49494C11.8984 6.22157 11.8984 5.77836 12.1717 5.50499C12.4451 5.23163 12.8883 5.23163 13.1617 5.50499L15.1617 7.50499C15.435 7.77836 15.435 8.22157 15.1617 8.49494L13.1617 10.4949C12.8883 10.7683 12.4451 10.7683 12.1717 10.4949C11.8984 10.2216 11.8984 9.77836 12.1717 9.50499L12.9767 8.69997H8.70003V12.9767L9.50505 12.1717C9.77842 11.8983 10.2216 11.8983 10.495 12.1717C10.7684 12.445 10.7684 12.8882 10.495 13.1616L8.495 15.1616C8.22164 15.435 7.77842 15.435 7.50505 15.1616L5.50505 13.1616C5.23169 12.8882 5.23169 12.445 5.50505 12.1717C5.77842 11.8983 6.22164 11.8983 6.495 12.1717L7.30003 12.9767V8.69997H3.02331L3.82834 9.50499C4.1017 9.77836 4.1017 10.2216 3.82834 10.4949C3.55497 10.7683 3.11175 10.7683 2.83839 10.4949L0.838387 8.49494C0.56502 8.22157 0.56502 7.77836 0.838387 7.50499L2.83839 5.50499C3.11175 5.23163 3.55497 5.23163 3.82834 5.50499C4.1017 5.77836 4.1017 6.22157 3.82834 6.49494L3.02331 7.29997H7.30003V3.02325L6.495 3.82828C6.22164 4.10164 5.77842 4.10164 5.50505 3.82828C5.23169 3.55491 5.23169 3.11169 5.50505 2.83833L7.50505 0.838326Z"
      fill="currentColor"
    />
  </svg>
);
export default MoveIcon;
