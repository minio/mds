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

const ZapIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.18973 0.650787C9.3555 0.660741 9.51836 0.729378 9.64451 0.856561C9.84177 1.05542 9.89516 1.34286 9.80522 1.58968L8.63245 6.04086L12.884 6.04085C14.2233 6.04084 14.8913 7.66263 13.9404 8.6058L7.38668 15.1065C7.24553 15.2707 7.03247 15.3638 6.81019 15.3492C6.64445 15.3392 6.48162 15.2706 6.35549 15.1434C6.15824 14.9445 6.10484 14.6571 6.19478 14.4103L7.36755 9.9591L3.11596 9.95911C1.77666 9.95911 1.10874 8.33732 2.05961 7.39415L8.61332 0.893452C8.75446 0.729258 8.96748 0.636194 9.18973 0.650787ZM8.18812 12.3396L12.9545 7.61184C12.9774 7.58912 12.9825 7.5724 12.9844 7.56137C12.987 7.54648 12.9859 7.52554 12.9765 7.50277C12.9671 7.47999 12.9532 7.46432 12.9409 7.45559C12.9317 7.44913 12.9163 7.44085 12.884 7.44085L8.24318 7.44086C7.5218 7.44086 6.99568 6.75818 7.17947 6.0606L7.81189 3.66031L3.04553 8.38811C3.02262 8.41083 3.01753 8.42755 3.01558 8.43859C3.01296 8.45347 3.01411 8.47441 3.02349 8.49719C3.03287 8.51996 3.0468 8.53564 3.05914 8.54436C3.06829 8.55082 3.08369 8.55911 3.11595 8.55911L7.75682 8.55909C8.4782 8.55909 9.00432 9.24178 8.82053 9.93935L8.18812 12.3396Z"
      fill="currentColor"
    />
  </svg>
);
export default ZapIcon;
