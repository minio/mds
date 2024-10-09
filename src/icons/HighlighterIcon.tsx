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

const HighlighterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.8283 2.1717C10.1017 2.44507 10.1017 2.88828 9.8283 3.16165L6.76456 6.22538C6.64977 6.34355 6.58551 6.50185 6.58551 6.66667C6.58551 6.8315 6.64976 6.98979 6.76456 7.10796L10.2254 10.5688C10.3436 10.6836 10.5018 10.7478 10.6667 10.7478C10.8315 10.7478 10.9898 10.6836 11.108 10.5688L14.1717 7.50503C14.445 7.23167 14.8883 7.23167 15.1616 7.50503C15.435 7.7784 15.435 8.22162 15.1616 8.49498L12.09 11.5666C11.7099 11.9392 11.1989 12.1478 10.6667 12.1478C10.5167 12.1478 10.3684 12.1312 10.2242 12.0991L8.49496 13.8283C8.36369 13.9596 8.18564 14.0333 7.99999 14.0333H1.99999C1.61339 14.0333 1.29999 13.7199 1.29999 13.3333V11.3333C1.29999 11.1477 1.37374 10.9696 1.50501 10.8384L5.23423 7.10915C5.20209 6.96498 5.18551 6.81667 5.18551 6.66667C5.18551 6.13444 5.39419 5.62343 5.76675 5.24334L5.77165 5.23834L8.83835 2.1717C9.11171 1.89833 9.55493 1.89833 9.8283 2.1717ZM5.99999 8.32329L2.69999 11.6233V12.6333H7.71004L9.01004 11.3333L5.99999 8.32329Z"
      fill="currentColor"
    />
  </svg>
);
export default HighlighterIcon;
