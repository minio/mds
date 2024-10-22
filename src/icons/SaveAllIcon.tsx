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

const SaveAllIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.33333 2.0333C5.16536 2.0333 5.00427 2.10003 4.8855 2.2188C4.76673 2.33757 4.7 2.49866 4.7 2.66663V10.6666C4.7 10.8346 4.76673 10.9957 4.8855 11.1145C5.00427 11.2332 5.16536 11.3 5.33333 11.3H5.96667V7.3333C5.96667 6.9467 6.28007 6.6333 6.66667 6.6333H12C12.3866 6.6333 12.7 6.9467 12.7 7.3333V11.3H13.3368C13.4944 11.3008 13.6466 11.2428 13.7637 11.1374C13.8737 11.0384 13.9453 10.9042 13.9667 10.7584V4.28992L11.71 2.0333H7.36667V3.29997H10.6667C11.0533 3.29997 11.3667 3.61337 11.3667 3.99997C11.3667 4.38657 11.0533 4.69997 10.6667 4.69997H6.66667C6.28007 4.69997 5.96667 4.38657 5.96667 3.99997V2.0333H5.33333ZM6.66667 0.633301H5.33333C4.79406 0.633301 4.27687 0.847526 3.89555 1.22885C3.51423 1.61017 3.3 2.12736 3.3 2.66663V10.6666C3.3 11.2059 3.51423 11.7231 3.89555 12.1044C4.27687 12.4857 4.79406 12.7 5.33333 12.7H13.3317M11.3 11.3V8.0333H7.36667V11.3H11.3ZM1.33333 3.29997C1.71993 3.29997 2.03333 3.61337 2.03333 3.99997V13.3333C2.03333 13.5013 2.10006 13.6624 2.21883 13.7811C2.33761 13.8999 2.4987 13.9666 2.66667 13.9666H12C12.3866 13.9666 12.7 14.28 12.7 14.6666C12.7 15.0532 12.3866 15.3666 12 15.3666H2.66667C2.12739 15.3666 1.61021 15.1524 1.22888 14.7711C0.847559 14.3898 0.633333 13.8726 0.633333 13.3333V3.99997C0.633333 3.61337 0.946734 3.29997 1.33333 3.29997Z"
      fill="currentColor"
    />
  </svg>
);
export default SaveAllIcon;
