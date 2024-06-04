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

const TestTubeDiagonalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.1716 0.838326C10.445 0.564959 10.8882 0.564959 11.1616 0.838326L15.1616 4.83833C15.435 5.11169 15.435 5.55491 15.1616 5.82828C14.8882 6.10164 14.445 6.10164 14.1716 5.82828L13.9999 5.65658L5.03884 14.6177C4.553 15.0982 3.89678 15.3669 3.21349 15.3652C2.53019 15.3635 1.87533 15.0914 1.39191 14.6085C0.907437 14.1235 0.634766 13.4655 0.634766 12.78C0.634766 12.0944 0.906894 11.4369 1.39137 10.9519L10.3433 1.99997L10.1716 1.82828C9.89827 1.55491 9.89827 1.11169 10.1716 0.838326ZM11.3333 2.98992L4.35657 9.96663H7.71L13.01 4.66663L11.3333 2.98992ZM6.31 11.3666H2.95657L2.38187 11.9413C2.38177 11.9414 2.38196 11.9412 2.38187 11.9413M6.31 11.3666L4.0544 13.6223C4.05399 13.6227 4.05358 13.6231 4.05317 13.6235C3.83041 13.8431 3.52989 13.966 3.217 13.9652C2.90364 13.9644 2.60332 13.8397 2.38156 13.6183"
      fill="currentColor"
    />
  </svg>
);
export default TestTubeDiagonalIcon;
