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

const HashIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.74398 1.30427C7.12821 1.34696 7.40509 1.69306 7.36239 2.07729L7.00432 5.29999H9.5957L9.97096 1.92269C10.0136 1.53845 10.3597 1.26158 10.744 1.30427C11.1282 1.34696 11.4051 1.69306 11.3624 2.07729L11.0043 5.29999H13.3333C13.7199 5.29999 14.0333 5.61339 14.0333 5.99999C14.0333 6.38659 13.7199 6.69999 13.3333 6.69999H10.8488L10.5599 9.29999H13.3333C13.7199 9.29999 14.0333 9.61339 14.0333 9.99999C14.0333 10.3866 13.7199 10.7 13.3333 10.7H10.4043L10.0291 14.0773C9.98637 14.4615 9.64027 14.7384 9.25604 14.6957C8.8718 14.653 8.59493 14.3069 8.63762 13.9227L8.9957 10.7H6.40432L6.02906 14.0773C5.98637 14.4615 5.64027 14.7384 5.25604 14.6957C4.8718 14.653 4.59493 14.3069 4.63762 13.9227L4.9957 10.7H2.66667C2.28008 10.7 1.96667 10.3866 1.96667 9.99999C1.96667 9.61339 2.28008 9.29999 2.66667 9.29999H5.15126L5.44015 6.69999H2.66667C2.28008 6.69999 1.96667 6.38659 1.96667 5.99999C1.96667 5.61339 2.28008 5.29999 2.66667 5.29999H5.5957L5.97096 1.92269C6.01365 1.53845 6.35974 1.26158 6.74398 1.30427ZM6.84876 6.69999L6.55987 9.29999H9.15126L9.44015 6.69999H6.84876Z"
      fill="currentColor"
    />
  </svg>
);
export default HashIcon;
