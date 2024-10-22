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

const MicIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.09081 1.42417C6.59716 0.917825 7.28391 0.633362 8 0.633362C8.71608 0.633362 9.40284 0.917825 9.90919 1.42417C10.4155 1.93052 10.7 2.61728 10.7 3.33336V8.00003C10.7 8.71611 10.4155 9.40287 9.90919 9.90922C9.40284 10.4156 8.71608 10.7 8 10.7C7.28391 10.7 6.59716 10.4156 6.09081 9.90922C5.58446 9.40287 5.3 8.71611 5.3 8.00003V3.33336C5.3 2.61728 5.58446 1.93052 6.09081 1.42417ZM8 2.03336C7.65522 2.03336 7.32456 2.17033 7.08076 2.41412C6.83696 2.65792 6.7 2.98858 6.7 3.33336V8.00003C6.7 8.34481 6.83696 8.67547 7.08076 8.91927C7.32456 9.16306 7.65522 9.30003 8 9.30003C8.34478 9.30003 8.67544 9.16306 8.91924 8.91927C9.16303 8.67547 9.3 8.34481 9.3 8.00003V3.33336C9.3 2.98858 9.16303 2.65792 8.91924 2.41412C8.67544 2.17033 8.34478 2.03336 8 2.03336ZM3.33333 5.96669C3.71993 5.96669 4.03333 6.2801 4.03333 6.66669V8.00003C4.03333 9.05205 4.45125 10.061 5.19514 10.8049C5.93903 11.5488 6.94797 11.9667 8 11.9667C9.05202 11.9667 10.061 11.5488 10.8049 10.8049C11.5487 10.061 11.9667 9.05205 11.9667 8.00003V6.66669C11.9667 6.2801 12.2801 5.96669 12.6667 5.96669C13.0533 5.96669 13.3667 6.2801 13.3667 6.66669V8.00003C13.3667 9.42336 12.8012 10.7884 11.7948 11.7948C10.9548 12.6348 9.865 13.1676 8.7 13.3209V14.6667C8.7 15.0533 8.3866 15.3667 8 15.3667C7.6134 15.3667 7.3 15.0533 7.3 14.6667V13.3209C6.135 13.1676 5.0452 12.6348 4.20519 11.7948C3.19875 10.7884 2.63333 9.42336 2.63333 8.00003V6.66669C2.63333 6.2801 2.94673 5.96669 3.33333 5.96669Z"
      fill="currentColor"
    />
  </svg>
);
export default MicIcon;
