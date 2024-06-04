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

const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50503 0.838326C7.77839 0.564959 8.22161 0.564959 8.49498 0.838326L11.1616 3.50499C11.435 3.77836 11.435 4.22158 11.1616 4.49494C10.8883 4.76831 10.4451 4.76831 10.1717 4.49494L8.7 3.02325V9.99997C8.7 10.3866 8.3866 10.7 8 10.7C7.6134 10.7 7.3 10.3866 7.3 9.99997V3.02325L5.82831 4.49494C5.55494 4.76831 5.11173 4.76831 4.83836 4.49494C4.56499 4.22158 4.56499 3.77836 4.83836 3.50499L7.50503 0.838326ZM2.66667 7.29997C3.05327 7.29997 3.36667 7.61337 3.36667 7.99997V13.3333C3.36667 13.5013 3.43339 13.6624 3.55217 13.7811C3.67094 13.8999 3.83203 13.9666 4 13.9666H12C12.168 13.9666 12.3291 13.8999 12.4478 13.7811C12.5666 13.6624 12.6333 13.5013 12.6333 13.3333V7.99997C12.6333 7.61337 12.9467 7.29997 13.3333 7.29997C13.7199 7.29997 14.0333 7.61337 14.0333 7.99997V13.3333C14.0333 13.8726 13.8191 14.3898 13.4378 14.7711C13.0565 15.1524 12.5393 15.3666 12 15.3666H4C3.46073 15.3666 2.94354 15.1524 2.56222 14.7711C2.18089 14.3898 1.96667 13.8726 1.96667 13.3333V7.99997C1.96667 7.61337 2.28007 7.29997 2.66667 7.29997Z"
      fill="currentColor"
    />
  </svg>
);
export default ShareIcon;
