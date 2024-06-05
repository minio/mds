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

const TvIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.17166 0.838326C4.44503 0.564959 4.88824 0.564959 5.16161 0.838326L7.99997 3.67668L10.8383 0.838326C11.1117 0.564959 11.5549 0.564959 11.8283 0.838326C12.1016 1.11169 12.1016 1.55491 11.8283 1.82828L9.68992 3.96663H13.3333C14.4563 3.96663 15.3666 4.87699 15.3666 5.99997V13.3333C15.3666 14.4563 14.4563 15.3666 13.3333 15.3666H2.66663C1.54366 15.3666 0.633301 14.4563 0.633301 13.3333V5.99997C0.633301 4.87699 1.54366 3.96663 2.66663 3.96663H6.31002L4.17166 1.82828C3.89829 1.55491 3.89829 1.11169 4.17166 0.838326ZM2.66663 5.36663C2.31685 5.36663 2.0333 5.65019 2.0333 5.99997V13.3333C2.0333 13.6831 2.31685 13.9666 2.66663 13.9666H13.3333C13.6831 13.9666 13.9666 13.6831 13.9666 13.3333V5.99997C13.9666 5.65019 13.6831 5.36663 13.3333 5.36663H2.66663Z"
      fill="currentColor"
    />
  </svg>
);
export default TvIcon;
