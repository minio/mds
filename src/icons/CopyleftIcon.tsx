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

const CopyleftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03333C4.70467 2.03333 2.0333 4.7047 2.0333 8C2.0333 11.2953 4.70467 13.9667 7.99997 13.9667C11.2953 13.9667 13.9666 11.2953 13.9666 8C13.9666 4.7047 11.2953 2.03333 7.99997 2.03333ZM0.633301 8C0.633301 3.9315 3.93147 0.633331 7.99997 0.633331C12.0685 0.633331 15.3666 3.9315 15.3666 8C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8ZM7.34244 4.69775C7.99541 4.56815 8.67214 4.63504 9.2871 4.88996C9.90206 5.14489 10.4276 5.5764 10.7974 6.12997C11.1672 6.68353 11.3645 7.33429 11.3645 8C11.3645 8.6657 11.1672 9.31646 10.7974 9.87003C10.4276 10.4236 9.90206 10.8551 9.2871 11.11C8.67214 11.365 7.99541 11.4318 7.34244 11.3022C6.68948 11.1726 6.08959 10.8524 5.6186 10.3819C5.34508 10.1087 5.34484 9.66548 5.61805 9.39196C5.89127 9.11845 6.33448 9.1182 6.608 9.39141C6.88313 9.66624 7.23356 9.85333 7.615 9.92904C7.99643 10.0047 8.39175 9.96567 8.75099 9.81675C9.11022 9.66783 9.41724 9.41576 9.63324 9.09239C9.84925 8.76902 9.96454 8.38887 9.96454 8C9.96454 7.61112 9.84925 7.23097 9.63324 6.9076C9.41724 6.58423 9.11022 6.33216 8.75099 6.18324C8.39175 6.03433 7.99643 5.99525 7.615 6.07096C7.23356 6.14667 6.88313 6.33376 6.608 6.60858C6.33448 6.8818 5.89127 6.88155 5.61805 6.60803C5.34484 6.33451 5.34508 5.8913 5.6186 5.61808C6.08959 5.14762 6.68948 4.82735 7.34244 4.69775Z"
      fill="currentColor"
    />
  </svg>
);
export default CopyleftIcon;
