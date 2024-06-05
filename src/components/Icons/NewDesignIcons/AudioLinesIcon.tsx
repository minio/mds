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

const AudioLinesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.66663 1.29999C7.05323 1.29999 7.36663 1.61339 7.36663 1.99999V14C7.36663 14.3866 7.05323 14.7 6.66663 14.7C6.28003 14.7 5.96663 14.3866 5.96663 14V1.99999C5.96663 1.61339 6.28003 1.29999 6.66663 1.29999ZM12 2.63332C12.3866 2.63332 12.7 2.94672 12.7 3.33332V12C12.7 12.3866 12.3866 12.7 12 12.7C11.6134 12.7 11.3 12.3866 11.3 12V3.33332C11.3 2.94672 11.6134 2.63332 12 2.63332ZM3.99997 3.29999C4.38657 3.29999 4.69997 3.61339 4.69997 3.99999V11.3333C4.69997 11.7199 4.38657 12.0333 3.99997 12.0333C3.61337 12.0333 3.29997 11.7199 3.29997 11.3333V3.99999C3.29997 3.61339 3.61337 3.29999 3.99997 3.29999ZM9.3333 4.63332C9.7199 4.63332 10.0333 4.94672 10.0333 5.33332V9.99999C10.0333 10.3866 9.7199 10.7 9.3333 10.7C8.9467 10.7 8.6333 10.3866 8.6333 9.99999V5.33332C8.6333 4.94672 8.9467 4.63332 9.3333 4.63332ZM1.3333 5.96665C1.7199 5.96665 2.0333 6.28006 2.0333 6.66665V8.66665C2.0333 9.05325 1.7199 9.36665 1.3333 9.36665C0.946701 9.36665 0.633301 9.05325 0.633301 8.66665V6.66665C0.633301 6.28006 0.946701 5.96665 1.3333 5.96665ZM14.6666 5.96665C15.0532 5.96665 15.3666 6.28006 15.3666 6.66665V8.66665C15.3666 9.05325 15.0532 9.36665 14.6666 9.36665C14.28 9.36665 13.9666 9.05325 13.9666 8.66665V6.66665C13.9666 6.28006 14.28 5.96665 14.6666 5.96665Z"
      fill="currentColor"
    />
  </svg>
);
export default AudioLinesIcon;
