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

const ThermometerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.0333C7.832 2.0333 7.67091 2.10003 7.55213 2.2188C7.43336 2.33757 7.36664 2.49866 7.36664 2.66663V9.6933C7.36664 9.94339 7.23322 10.1745 7.01664 10.2995C6.64171 10.516 6.34868 10.8501 6.18301 11.2501C6.01733 11.6501 5.98826 12.0935 6.10031 12.5117C6.21237 12.9299 6.45927 13.2994 6.80274 13.563C7.1462 13.8265 7.56704 13.9694 7.99997 13.9694C8.4329 13.9694 8.85373 13.8265 9.1972 13.563C9.54067 13.2994 9.78757 12.9299 9.89962 12.5117C10.0117 12.0935 9.98261 11.6501 9.81693 11.2501C9.65126 10.8501 9.35823 10.516 8.9833 10.2995C8.76672 10.1745 8.6333 9.94339 8.6333 9.6933V2.66663C8.6333 2.49866 8.56658 2.33757 8.4478 2.2188C8.32903 2.10003 8.16794 2.0333 7.99997 2.0333ZM6.56219 1.22885C6.94351 0.847526 7.4607 0.633301 7.99997 0.633301C8.53924 0.633301 9.05643 0.847526 9.43775 1.22885C9.81908 1.61017 10.0333 2.12736 10.0333 2.66663V9.31941C10.5078 9.67898 10.8806 10.1597 11.1104 10.7143C11.394 11.399 11.4437 12.1582 11.2519 12.8741C11.0601 13.5899 10.6374 14.2225 10.0495 14.6737C9.4615 15.1248 8.74109 15.3694 7.99997 15.3694C7.25885 15.3694 6.53844 15.1248 5.95047 14.6737C5.3625 14.2225 4.93983 13.5899 4.74802 12.8741C4.5562 12.1582 4.60596 11.399 4.88957 10.7143C5.11932 10.1597 5.49213 9.67898 5.96664 9.31942V2.66663C5.96664 2.12736 6.18086 1.61017 6.56219 1.22885Z"
      fill="currentColor"
    />
  </svg>
);
export default ThermometerIcon;
