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

const HistoryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99735 1.3L7.99999 1.29999C9.32512 1.29999 10.6205 1.69294 11.7223 2.42915C12.8241 3.16535 13.6829 4.21175 14.19 5.43601C14.6971 6.66028 14.8298 8.00742 14.5712 9.3071C14.3127 10.6068 13.6746 11.8006 12.7376 12.7376C11.8006 13.6746 10.6068 14.3127 9.30709 14.5713C8.00742 14.8298 6.66027 14.6971 5.43601 14.19C4.21174 13.6829 3.16535 12.8241 2.42914 11.7223C1.69294 10.6205 1.29999 9.32513 1.29999 7.99999C1.29999 7.61339 1.61339 7.29999 1.99999 7.29999C2.38659 7.29999 2.69999 7.61339 2.69999 7.99999C2.69999 9.04823 3.01083 10.0729 3.5932 10.9445C4.17557 11.8161 5.00332 12.4954 5.97177 12.8966C6.94021 13.2977 8.00587 13.4027 9.03397 13.1982C10.0621 12.9937 11.0064 12.4889 11.7477 11.7477C12.4889 11.0064 12.9936 10.0621 13.1982 9.03397C13.4027 8.00587 13.2977 6.94022 12.8966 5.97177C12.4954 5.00332 11.8161 4.17558 10.9445 3.5932C10.0733 3.01108 9.04909 2.70025 8.0013 2.69999C6.50697 2.70595 5.07265 3.28845 3.99732 4.32594L3.68994 4.63333H5.33332C5.71992 4.63333 6.03332 4.94673 6.03332 5.33333C6.03332 5.71993 5.71992 6.03333 5.33332 6.03333H1.99999C1.61339 6.03333 1.29999 5.71993 1.29999 5.33333V1.99999C1.29999 1.61339 1.61339 1.29999 1.99999 1.29999C2.38659 1.29999 2.69999 1.61339 2.69999 1.99999V3.64338L3.02005 3.32331C4.35591 2.03191 6.13935 1.30699 7.99735 1.3ZM7.99999 3.96666C8.38659 3.96666 8.69999 4.28006 8.69999 4.66666V7.56737L10.9797 8.70723C11.3255 8.88012 11.4656 9.30059 11.2928 9.64638C11.1199 9.99216 10.6994 10.1323 10.3536 9.95942L7.68694 8.62609C7.44979 8.50752 7.29999 8.26513 7.29999 7.99999V4.66666C7.29999 4.28006 7.61339 3.96666 7.99999 3.96666Z"
      fill="currentColor"
      fillOpacity="0.65"
    />
  </svg>
);

export default HistoryIcon;
