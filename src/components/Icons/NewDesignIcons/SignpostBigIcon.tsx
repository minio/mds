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

const SignpostBigIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.0333C7.832 2.0333 7.67091 2.10003 7.55213 2.2188C7.43336 2.33757 7.36663 2.49866 7.36663 2.66663V13.9666H8.6333V2.66663C8.6333 2.49866 8.56657 2.33757 8.4478 2.2188C8.32903 2.10003 8.16794 2.0333 7.99997 2.0333ZM10.033 2.6333C10.0244 2.10609 9.81121 1.60231 9.43775 1.22885C9.05643 0.847526 8.53924 0.633301 7.99997 0.633301C7.46069 0.633301 6.94351 0.847526 6.56218 1.22885C6.18872 1.60231 5.97554 2.10609 5.96691 2.6333H2.66663C2.48098 2.6333 2.30293 2.70705 2.17166 2.83833L0.838326 4.17166C0.564959 4.44503 0.564959 4.88824 0.838326 5.16161L2.17166 6.49494C2.30293 6.62622 2.48098 6.69997 2.66663 6.69997H5.96663V13.9666H5.3333C4.9467 13.9666 4.6333 14.28 4.6333 14.6666C4.6333 15.0532 4.9467 15.3666 5.3333 15.3666H10.6666C11.0532 15.3666 11.3666 15.0532 11.3666 14.6666C11.3666 14.28 11.0532 13.9666 10.6666 13.9666H10.0333V6.69997H13.3333C13.519 6.69997 13.697 6.62622 13.8283 6.49494L15.1616 5.16161C15.435 4.88824 15.435 4.44503 15.1616 4.17166L13.8283 2.83833C13.697 2.70705 13.519 2.6333 13.3333 2.6333H10.033ZM10.0333 4.0333V5.29997H13.0434L13.6767 4.66663L13.0434 4.0333H10.0333ZM5.96663 5.29997V4.0333H2.95658L2.32325 4.66663L2.95658 5.29997H5.96663Z"
      fill="currentColor"
    />
  </svg>
);
export default SignpostBigIcon;
