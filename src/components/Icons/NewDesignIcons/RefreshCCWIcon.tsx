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

const RefreshCCWIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99737 1.30006L8 1.30005C9.77695 1.30005 11.4811 2.00594 12.7376 3.26244C13.9941 4.51893 14.7 6.2231 14.7 8.00005C14.7 8.38665 14.3866 8.70005 14 8.70005C13.6134 8.70005 13.3 8.38665 13.3 8.00005C13.3 6.59441 12.7416 5.24633 11.7477 4.25239C10.754 3.25875 9.40649 2.7004 8.00132 2.70005C6.50698 2.70601 5.07267 3.28851 3.99733 4.32601L3.68995 4.63339H5.33334C5.71994 4.63339 6.03334 4.94679 6.03334 5.33339C6.03334 5.71999 5.71994 6.03339 5.33334 6.03339H2C1.6134 6.03339 1.3 5.71999 1.3 5.33339V2.00005C1.3 1.61345 1.6134 1.30005 2 1.30005C2.3866 1.30005 2.7 1.61345 2.7 2.00005V3.64344L3.02007 3.32337C4.35592 2.03197 6.13937 1.30705 7.99737 1.30006ZM3.26239 12.7377C2.00589 11.4812 1.3 9.777 1.3 8.00005C1.3 7.61345 1.6134 7.30005 2 7.30005C2.3866 7.30005 2.7 7.61345 2.7 8.00005C2.7 9.4057 3.25839 10.7538 4.25234 11.7477C5.24596 12.7413 6.59349 13.2997 7.99865 13.3001C9.493 13.2941 10.9273 12.7116 12.0027 11.6741L12.3101 11.3667H10.6667C10.2801 11.3667 9.96667 11.0533 9.96667 10.6667C9.96667 10.2801 10.2801 9.96672 10.6667 9.96672H14C14.3866 9.96672 14.7 10.2801 14.7 10.6667V14.0001C14.7 14.3867 14.3866 14.7001 14 14.7001C13.6134 14.7001 13.3 14.3867 13.3 14.0001V12.3567L12.9799 12.6767C11.6441 13.9681 9.86064 14.6931 8.00264 14.7L8 14.7001C6.22305 14.7001 4.51888 13.9942 3.26239 12.7377Z"
      fill="currentColor"
    />
  </svg>
);
export default RefreshCCWIcon;
