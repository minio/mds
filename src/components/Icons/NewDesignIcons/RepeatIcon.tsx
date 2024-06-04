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

const RepeatIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.8383 0.838326C11.1117 0.564959 11.5549 0.564959 11.8283 0.838326L14.495 3.50499C14.6262 3.63627 14.7 3.81432 14.7 3.99997C14.7 4.18562 14.6262 4.36367 14.495 4.49494L11.8283 7.16161C11.5549 7.43498 11.1117 7.43498 10.8383 7.16161C10.565 6.88824 10.565 6.44503 10.8383 6.17166L12.31 4.69997H4.66665C4.14506 4.69997 3.64483 4.90717 3.27601 5.27599C2.90719 5.64481 2.69999 6.14504 2.69999 6.66663V7.3333C2.69999 7.7199 2.38659 8.0333 1.99999 8.0333C1.61339 8.0333 1.29999 7.7199 1.29999 7.3333V6.66663C1.29999 5.77374 1.65469 4.91741 2.28606 4.28604C2.91743 3.65467 3.77376 3.29997 4.66665 3.29997H12.31L10.8383 1.82828C10.565 1.55491 10.565 1.11169 10.8383 0.838326ZM5.16163 8.83833C5.435 9.11169 5.435 9.55491 5.16163 9.82827L3.68994 11.3H11.3333C11.8549 11.3 12.3551 11.0928 12.724 10.7239C13.0928 10.3551 13.3 9.85489 13.3 9.3333V8.66663C13.3 8.28003 13.6134 7.96663 14 7.96663C14.3866 7.96663 14.7 8.28003 14.7 8.66663V9.3333C14.7 10.2262 14.3453 11.0825 13.7139 11.7139C13.0825 12.3453 12.2262 12.7 11.3333 12.7H3.68994L5.16163 14.1717C5.435 14.445 5.435 14.8882 5.16163 15.1616C4.88826 15.435 4.44505 15.435 4.17168 15.1616L1.50501 12.4949C1.37374 12.3637 1.29999 12.1856 1.29999 12C1.29999 11.8143 1.37374 11.6363 1.50501 11.505L4.17168 8.83833C4.44505 8.56496 4.88826 8.56496 5.16163 8.83833Z"
      fill="currentColor"
    />
  </svg>
);
export default RepeatIcon;
