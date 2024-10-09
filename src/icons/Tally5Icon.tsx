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

const Tally5Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66668 1.96667C3.05328 1.96667 3.36668 2.28008 3.36668 2.66667V9.96368L5.30001 8.80367V2.66667C5.30001 2.28008 5.61341 1.96667 6.00001 1.96667C6.38661 1.96667 6.70001 2.28008 6.70001 2.66667V7.96368L8.63335 6.80367V2.66667C8.63335 2.28008 8.94675 1.96667 9.33335 1.96667C9.71994 1.96667 10.0333 2.28008 10.0333 2.66667V5.96367L11.9667 4.80368V2.66667C11.9667 2.28008 12.2801 1.96667 12.6667 1.96667C13.0533 1.96667 13.3667 2.28008 13.3667 2.66667V3.96367L14.3065 3.39976C14.638 3.20086 15.068 3.30835 15.2669 3.63986C15.4658 3.97137 15.3583 4.40135 15.0268 4.60025L13.3667 5.59634V13.3333C13.3667 13.7199 13.0533 14.0333 12.6667 14.0333C12.2801 14.0333 11.9667 13.7199 11.9667 13.3333V6.43634L10.0333 7.59634V13.3333C10.0333 13.7199 9.71994 14.0333 9.33335 14.0333C8.94675 14.0333 8.63335 13.7199 8.63335 13.3333V8.43634L6.70001 9.59634V13.3333C6.70001 13.7199 6.38661 14.0333 6.00001 14.0333C5.61341 14.0333 5.30001 13.7199 5.30001 13.3333V10.4363L3.36668 11.5963V13.3333C3.36668 13.7199 3.05328 14.0333 2.66668 14.0333C2.28008 14.0333 1.96668 13.7199 1.96668 13.3333V12.4363L1.69349 12.6003C1.36199 12.7992 0.932004 12.6917 0.733101 12.3602C0.534197 12.0286 0.641692 11.5987 0.973198 11.3998L1.96668 10.8037V2.66667C1.96668 2.28008 2.28008 1.96667 2.66668 1.96667Z"
      fill="currentColor"
    />
  </svg>
);
export default Tally5Icon;
