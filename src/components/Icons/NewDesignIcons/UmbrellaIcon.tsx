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

const UmbrellaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0.633301C8.3866 0.633301 8.7 0.946701 8.7 1.3333V1.35783C10.2706 1.5069 11.7596 2.15472 12.9435 3.21587C14.3021 4.43362 15.1635 6.11 15.3625 7.92363C15.3842 8.12138 15.3207 8.31903 15.1879 8.46717C15.0552 8.61532 14.8656 8.69997 14.6667 8.69997H8.7V13.3333C8.7 13.5013 8.76673 13.6624 8.8855 13.7811C9.00427 13.8999 9.16536 13.9666 9.33333 13.9666C9.5013 13.9666 9.6624 13.8999 9.78117 13.7811C9.89994 13.6624 9.96667 13.5013 9.96667 13.3333C9.96667 12.9467 10.2801 12.6333 10.6667 12.6333C11.0533 12.6333 11.3667 12.9467 11.3667 13.3333C11.3667 13.8726 11.1524 14.3898 10.7711 14.7711C10.3898 15.1524 9.87261 15.3666 9.33333 15.3666C8.79406 15.3666 8.27687 15.1524 7.89555 14.7711C7.51423 14.3898 7.3 13.8726 7.3 13.3333V8.69997H1.33333C1.13439 8.69997 0.944849 8.61532 0.812069 8.46717C0.679288 8.31903 0.615814 8.12138 0.63751 7.92363C0.836481 6.11 1.69786 4.43362 3.05651 3.21587C4.24044 2.15472 5.72937 1.5069 7.3 1.35783V1.3333C7.3 0.946701 7.6134 0.633301 8 0.633301ZM13.8336 7.29997C13.5469 6.13148 12.914 5.0695 12.0091 4.2584C10.9072 3.27083 9.47965 2.72469 8 2.72469C6.52035 2.72469 5.09277 3.27083 3.99093 4.2584C3.08598 5.0695 2.45306 6.13148 2.16636 7.29997H13.8336Z"
      fill="currentColor"
    />
  </svg>
);
export default UmbrellaIcon;
