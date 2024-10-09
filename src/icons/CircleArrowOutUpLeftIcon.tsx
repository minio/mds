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

const CircleArrowOutUpLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.633301 1.33334C0.633301 0.946736 0.946701 0.633335 1.3333 0.633335H5.3333C5.7199 0.633335 6.0333 0.946736 6.0333 1.33334C6.0333 1.71993 5.7199 2.03334 5.3333 2.03334H3.02325L8.49494 7.50503C8.76831 7.77839 8.76831 8.22161 8.49494 8.49498C8.22157 8.76834 7.77836 8.76834 7.50499 8.49498L2.0333 3.02328V5.33333C2.0333 5.71993 1.7199 6.03333 1.3333 6.03333C0.946701 6.03333 0.633301 5.71993 0.633301 5.33333V1.33334ZM11.3149 3.0389C10.3337 2.38327 9.18006 2.03334 7.99997 2.03334C7.61337 2.03334 7.29997 1.71993 7.29997 1.33334C7.29997 0.946736 7.61337 0.633335 7.99997 0.633335C9.45696 0.633335 10.8812 1.06538 12.0927 1.87484C13.3041 2.6843 14.2483 3.83482 14.8059 5.1809C15.3634 6.52698 15.5093 8.00817 15.2251 9.43717C14.9408 10.8662 14.2392 12.1788 13.209 13.209C12.1787 14.2393 10.8661 14.9409 9.43713 15.2251C8.00814 15.5094 6.52695 15.3635 5.18087 14.8059C3.83478 14.2483 2.68427 13.3041 1.87481 12.0927C1.06535 10.8813 0.633301 9.45699 0.633301 8C0.633301 7.6134 0.946701 7.3 1.3333 7.3C1.7199 7.3 2.0333 7.6134 2.0333 8C2.0333 9.1801 2.38324 10.3337 3.03887 11.3149C3.69449 12.2961 4.62636 13.0609 5.71662 13.5125C6.80689 13.9641 8.00659 14.0822 9.16401 13.852C10.3214 13.6218 11.3846 13.0535 12.219 12.2191C13.0535 11.3846 13.6218 10.3215 13.852 9.16404C14.0822 8.00662 13.9641 6.80692 13.5124 5.71666C13.0608 4.62639 12.2961 3.69453 11.3149 3.0389Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleArrowOutUpLeftIcon;
