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

const SpeakerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.00001 2.0333C3.65023 2.0333 3.36667 2.31685 3.36667 2.66663V13.3333C3.36667 13.6831 3.65023 13.9666 4.00001 13.9666H12C12.3498 13.9666 12.6333 13.6831 12.6333 13.3333V2.66663C12.6333 2.31685 12.3498 2.0333 12 2.0333H4.00001ZM1.96667 2.66663C1.96667 1.54366 2.87703 0.633301 4.00001 0.633301H12C13.123 0.633301 14.0333 1.54366 14.0333 2.66663V13.3333C14.0333 14.4563 13.123 15.3666 12 15.3666H4.00001C2.87703 15.3666 1.96667 14.4563 1.96667 13.3333V2.66663ZM7.30001 3.99997C7.30001 3.61337 7.61341 3.29997 8.00001 3.29997H8.00667C8.39327 3.29997 8.70668 3.61337 8.70668 3.99997C8.70668 4.38657 8.39327 4.69997 8.00667 4.69997H8.00001C7.61341 4.69997 7.30001 4.38657 7.30001 3.99997ZM8.00001 7.36663C6.91385 7.36663 6.03334 8.24714 6.03334 9.3333C6.03334 10.4195 6.91385 11.3 8.00001 11.3C9.08617 11.3 9.96667 10.4195 9.96667 9.3333C9.96667 8.24714 9.08617 7.36663 8.00001 7.36663ZM4.63334 9.3333C4.63334 7.47394 6.14065 5.96663 8.00001 5.96663C9.85937 5.96663 11.3667 7.47394 11.3667 9.3333C11.3667 11.1927 9.85937 12.7 8.00001 12.7C6.14065 12.7 4.63334 11.1927 4.63334 9.3333ZM7.30001 9.3333C7.30001 8.9467 7.61341 8.6333 8.00001 8.6333H8.00667C8.39327 8.6333 8.70668 8.9467 8.70668 9.3333C8.70668 9.7199 8.39327 10.0333 8.00667 10.0333H8.00001C7.61341 10.0333 7.30001 9.7199 7.30001 9.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default SpeakerIcon;
