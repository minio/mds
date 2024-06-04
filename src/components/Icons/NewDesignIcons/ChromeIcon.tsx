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

const ChromeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.62027 5.41613C2.24408 6.19793 2.0333 7.07435 2.0333 8C2.0333 10.9145 4.12298 13.341 6.8858 13.8628L8.33515 11.3502C8.2249 11.3611 8.11308 11.3667 7.99997 11.3667C6.70341 11.3667 5.57804 10.6337 5.01556 9.55961L2.62027 5.41613ZM2.03543 3.67567C1.15345 4.89008 0.633301 6.3843 0.633301 8C0.633301 11.7737 3.47085 14.8847 7.12873 15.3157C7.15991 15.3213 7.19126 15.3248 7.22258 15.3261C7.47804 15.3529 7.7374 15.3667 7.99997 15.3667C12.0685 15.3667 15.3666 12.0685 15.3666 8C15.3666 6.96821 15.1545 5.98597 14.7715 5.0945C14.7614 5.06659 14.7495 5.0395 14.7361 5.01337C13.5903 2.43297 11.0053 0.633335 7.99997 0.633335C5.59224 0.633335 3.45431 1.78843 2.11008 3.5747C2.082 3.60627 2.05707 3.6401 2.03543 3.67567ZM3.4796 4.10531L4.93045 6.61505C5.45852 5.44649 6.63428 4.63333 7.99997 4.63333H12.9268C11.8519 3.06342 10.0462 2.03334 7.99997 2.03334C6.19308 2.03334 4.57378 2.83651 3.4796 4.10531ZM13.6349 6.03333H10.7328C11.1317 6.5866 11.3666 7.26586 11.3666 8C11.3666 8.66199 11.1756 9.27934 10.8456 9.79994L8.45183 13.9498C11.536 13.7189 13.9666 11.1433 13.9666 8C13.9666 7.31092 13.8498 6.64913 13.6349 6.03333ZM9.72912 8.9377C9.88059 8.65897 9.96663 8.33954 9.96663 8C9.96663 6.91384 9.08613 6.03333 7.99997 6.03333C6.91381 6.03333 6.0333 6.91384 6.0333 8C6.0333 8.32131 6.11035 8.62463 6.24699 8.89247L6.29932 8.983C6.30818 8.99831 6.31638 9.01382 6.32395 9.02949C6.67008 9.59178 7.29124 9.96667 7.99997 9.96667C8.69193 9.96667 9.30042 9.60931 9.65096 9.06908L9.70028 8.98357C9.70938 8.96779 9.71901 8.9525 9.72912 8.9377Z"
      fill="currentColor"
    />
  </svg>
);
export default ChromeIcon;
