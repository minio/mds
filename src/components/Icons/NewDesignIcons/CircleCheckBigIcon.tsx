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

const CircleCheckBigIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.4284 2.54607C9.25313 2.02239 7.94006 1.89266 6.68503 2.17622C5.43 2.45978 4.30025 3.14143 3.46428 4.11952C2.6283 5.09761 2.13089 6.31972 2.04624 7.6036C1.96158 8.88748 2.2942 10.1643 2.99451 11.2437C3.69481 12.3231 4.72527 13.1472 5.9322 13.5931C7.13913 14.039 8.45787 14.0828 9.69173 13.718C10.9256 13.3532 12.0085 12.5993 12.7789 11.5688C13.5493 10.5382 13.9659 9.28626 13.9666 7.9996V7.38667C13.9666 7.00007 14.28 6.68667 14.6666 6.68667C15.0532 6.68667 15.3666 7.00007 15.3666 7.38667V8C15.3657 9.58856 14.8513 11.1347 13.9002 12.407C12.949 13.6793 11.6121 14.6101 10.0887 15.0605C8.56531 15.511 6.93715 15.4569 5.44703 14.9063C3.95691 14.3558 2.68466 13.3384 1.82004 12.0057C0.95542 10.6731 0.544747 9.09661 0.649269 7.51148C0.753792 5.92636 1.36791 4.41749 2.40003 3.20991C3.43216 2.00233 4.82699 1.16073 6.37649 0.810641C7.926 0.46055 9.54716 0.620721 10.9982 1.26727C11.3513 1.42461 11.51 1.83844 11.3527 2.19157C11.1954 2.5447 10.7815 2.70341 10.4284 2.54607ZM15.1616 2.17169C15.435 2.44506 15.435 2.88827 15.1616 3.16164L8.49495 9.82831C8.36367 9.95958 8.18562 10.0333 7.99997 10.0333C7.81432 10.0333 7.63627 9.95958 7.505 9.82831L5.505 7.82831C5.23163 7.55494 5.23163 7.11173 5.505 6.83836C5.77836 6.56499 6.22158 6.56499 6.49495 6.83836L7.99997 8.34338L14.1717 2.17169C14.445 1.89832 14.8882 1.89832 15.1616 2.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleCheckBigIcon;
