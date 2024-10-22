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

const PaperclipIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5021 2.6121C11.1322 2.24289 10.6308 2.03572 10.1082 2.03619C9.58561 2.03665 9.08459 2.2447 8.71537 2.61456L3.0016 8.32833C2.38231 8.94762 2.0344 9.78755 2.0344 10.6634C2.0344 11.5392 2.38231 12.3791 3.0016 12.9984C3.62089 13.6177 4.46082 13.9656 5.33662 13.9656C6.21243 13.9656 7.05236 13.6177 7.67165 12.9984L13.7983 6.87172C14.0717 6.59835 14.5149 6.59835 14.7883 6.87172C15.0616 7.14509 15.0616 7.5883 14.7883 7.86167L8.6616 13.9883C7.77976 14.8702 6.58373 15.3656 5.33662 15.3656C4.08952 15.3656 2.89349 14.8702 2.01165 13.9883C1.12981 13.1065 0.634399 11.9105 0.634399 10.6634C0.634399 9.41625 1.12981 8.22022 2.01165 7.33839L7.72455 1.62549M11.5021 2.6121C11.872 2.98132 12.08 3.48234 12.0805 4.00495L11.5021 2.6121ZM10.5419 3.57201C10.8151 3.84554 10.8148 4.28875 10.5413 4.56196L4.8816 10.215C4.76269 10.3339 4.69588 10.4952 4.69588 10.6634C4.69588 10.8315 4.76269 10.9928 4.8816 11.1117C5.00051 11.2306 5.16179 11.2974 5.32996 11.2974C5.49812 11.2974 5.6594 11.2306 5.77832 11.1117L11.5045 5.39882C11.5044 5.399 11.5047 5.39865 11.5045 5.39882C11.8734 5.02901 12.0809 4.52732 12.0805 4.00495M10.5419 3.57201C10.2687 3.29848 9.82547 3.29822 9.55194 3.57143L10.5419 3.57201ZM9.55194 3.57143L3.89194 9.22476L9.55194 3.57143ZM6.76784 12.1021C6.7677 12.1022 6.76798 12.102 6.76784 12.1021C6.38642 12.4833 5.86923 12.6974 5.32996 12.6974C4.79049 12.6974 4.27311 12.4831 3.89165 12.1017C3.51019 11.7202 3.29588 11.2028 3.29588 10.6634C3.29588 10.1239 3.51048 9.60622 3.89194 9.22476"
      fill="currentColor"
    />
  </svg>
);
export default PaperclipIcon;
