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

const RotateCCWIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99742 1.30006L8.00005 1.30005C9.32518 1.30005 10.6206 1.693 11.7224 2.42921C12.8242 3.16541 13.6829 4.21181 14.19 5.43607C14.6971 6.66034 14.8298 8.00749 14.5713 9.30716C14.3128 10.6068 13.6747 11.8007 12.7377 12.7377C11.8007 13.6747 10.6068 14.3128 9.30715 14.5713C8.00748 14.8298 6.66033 14.6972 5.43607 14.19C4.2118 13.6829 3.16541 12.8242 2.4292 11.7224C1.693 10.6206 1.30005 9.32519 1.30005 8.00005C1.30005 7.61345 1.61345 7.30005 2.00005 7.30005C2.38665 7.30005 2.70005 7.61345 2.70005 8.00005C2.70005 9.0483 3.01089 10.073 3.59326 10.9446C4.17563 11.8162 5.00338 12.4955 5.97183 12.8966C6.94027 13.2978 8.00593 13.4027 9.03403 13.1982C10.0621 12.9937 11.0065 12.4889 11.7477 11.7477C12.4889 11.0065 12.9937 10.0621 13.1982 9.03403C13.4027 8.00593 13.2978 6.94028 12.8966 5.97183C12.4955 5.00338 11.8162 4.17564 10.9446 3.59327C10.0734 3.01114 9.04915 2.70031 8.00136 2.70005C6.50703 2.70601 5.07271 3.28851 3.99738 4.32601L3.69 4.63339H5.33338C5.71998 4.63339 6.03338 4.94679 6.03338 5.33339C6.03338 5.71999 5.71998 6.03339 5.33338 6.03339H2.00005C1.61345 6.03339 1.30005 5.71999 1.30005 5.33339V2.00005C1.30005 1.61345 1.61345 1.30005 2.00005 1.30005C2.38665 1.30005 2.70005 1.61345 2.70005 2.00005V3.64344L3.02012 3.32337C4.35597 2.03197 6.13941 1.30705 7.99742 1.30006Z"
      fill="currentColor"
    />
  </svg>
);
export default RotateCCWIcon;
