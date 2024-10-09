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

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.6333C8.38657 2.6333 8.69997 2.9467 8.69997 3.3333V7.29997H12.6666C13.0532 7.29997 13.3666 7.61337 13.3666 7.99997C13.3666 8.38657 13.0532 8.69997 12.6666 8.69997H8.69997V12.6666C8.69997 13.0532 8.38657 13.3666 7.99997 13.3666C7.61337 13.3666 7.29997 13.0532 7.29997 12.6666V8.69997H3.3333C2.9467 8.69997 2.6333 8.38657 2.6333 7.99997C2.6333 7.61337 2.9467 7.29997 3.3333 7.29997H7.29997V3.3333C7.29997 2.9467 7.61337 2.6333 7.99997 2.6333Z"
      fill="currentColor"
    />
  </svg>
);
export default PlusIcon;
