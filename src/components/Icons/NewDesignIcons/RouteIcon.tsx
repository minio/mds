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

const RouteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.0333C11.2821 2.0333 10.7 2.61533 10.7 3.3333C10.7 4.05127 11.2821 4.6333 12 4.6333C12.718 4.6333 13.3 4.05127 13.3 3.3333C13.3 2.61533 12.718 2.0333 12 2.0333ZM9.39167 2.6333C9.70001 1.48148 10.751 0.633301 12 0.633301C13.4912 0.633301 14.7 1.84213 14.7 3.3333C14.7 4.82447 13.4912 6.0333 12 6.0333C10.751 6.0333 9.70001 5.18512 9.39167 4.0333H4.33338C3.9002 4.0333 3.48475 4.20538 3.17844 4.51169C2.87213 4.818 2.70005 5.23345 2.70005 5.66663C2.70005 6.09982 2.87213 6.51526 3.17844 6.82157C3.48475 7.12788 3.9002 7.29997 4.33338 7.29997H11.6667C12.4712 7.29997 13.2427 7.61955 13.8116 8.18841C14.3805 8.75727 14.7 9.52881 14.7 10.3333C14.7 11.1378 14.3805 11.9093 13.8116 12.4782C13.2427 13.0471 12.4712 13.3666 11.6667 13.3666H6.60842C6.30009 14.5185 5.24912 15.3666 4.00005 15.3666C2.50888 15.3666 1.30005 14.1578 1.30005 12.6666C1.30005 11.1755 2.50888 9.96663 4.00005 9.96663C5.24912 9.96663 6.30009 10.8148 6.60842 11.9666H11.6667C12.0999 11.9666 12.5153 11.7946 12.8217 11.4882C13.128 11.1819 13.3 10.7665 13.3 10.3333C13.3 9.90011 13.128 9.48467 12.8217 9.17836C12.5153 8.87205 12.0999 8.69997 11.6667 8.69997H4.33338C3.52889 8.69997 2.75735 8.38038 2.18849 7.81152C1.61963 7.24266 1.30005 6.47112 1.30005 5.66663C1.30005 4.86214 1.61963 4.0906 2.18849 3.52174C2.75735 2.95288 3.52889 2.6333 4.33338 2.6333H9.39167ZM4.00005 11.3666C3.28208 11.3666 2.70005 11.9487 2.70005 12.6666C2.70005 13.3846 3.28208 13.9666 4.00005 13.9666C4.71802 13.9666 5.30005 13.3846 5.30005 12.6666C5.30005 11.9487 4.71802 11.3666 4.00005 11.3666Z"
      fill="currentColor"
    />
  </svg>
);
export default RouteIcon;
