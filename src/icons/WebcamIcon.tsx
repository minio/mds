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

const WebcamIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00001 2.0333C5.44109 2.0333 3.36667 4.10771 3.36667 6.66663C3.36667 9.22555 5.44109 11.3 8.00001 11.3C10.5589 11.3 12.6333 9.22555 12.6333 6.66663C12.6333 4.10771 10.5589 2.0333 8.00001 2.0333ZM1.96667 6.66663C1.96667 3.33452 4.66789 0.633301 8.00001 0.633301C11.3321 0.633301 14.0333 3.33452 14.0333 6.66663C14.0333 9.76199 11.7024 12.3129 8.70001 12.6598V13.9666H11.3333C11.7199 13.9666 12.0333 14.28 12.0333 14.6666C12.0333 15.0532 11.7199 15.3666 11.3333 15.3666H4.66667C4.28008 15.3666 3.96667 15.0532 3.96667 14.6666C3.96667 14.28 4.28008 13.9666 4.66667 13.9666H7.30001V12.6598C4.29765 12.3129 1.96667 9.76199 1.96667 6.66663ZM8.00001 5.36663C7.28204 5.36663 6.70001 5.94866 6.70001 6.66663C6.70001 7.3846 7.28204 7.96663 8.00001 7.96663C8.71798 7.96663 9.30001 7.3846 9.30001 6.66663C9.30001 5.94866 8.71798 5.36663 8.00001 5.36663ZM5.30001 6.66663C5.30001 5.17546 6.50884 3.96663 8.00001 3.96663C9.49118 3.96663 10.7 5.17546 10.7 6.66663C10.7 8.1578 9.49118 9.36663 8.00001 9.36663C6.50884 9.36663 5.30001 8.1578 5.30001 6.66663Z"
      fill="currentColor"
    />
  </svg>
);
export default WebcamIcon;
