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

const MagnetIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.31451 3.32877L4.31956 5.32964L6.00584 7.01592L7.76616 5.26386C7.78764 5.24247 7.8105 5.22251 7.83457 5.20409C8.24393 4.89083 8.75313 4.73692 9.26746 4.77098C9.7818 4.80503 10.2663 5.02473 10.6307 5.38922C10.9952 5.7537 11.2149 6.23817 11.249 6.7525C11.283 7.26684 11.1291 7.77604 10.8159 8.18539C10.7968 8.21034 10.776 8.23398 10.7538 8.25614L8.99579 10.0059L10.6629 11.673L12.6572 9.67287C13.4158 8.81876 13.8208 7.70753 13.7893 6.56514C13.7577 5.41671 13.2873 4.32403 12.475 3.51166C11.6626 2.69929 10.5699 2.22895 9.42149 2.1973C8.27943 2.16583 7.16852 2.57057 6.31451 3.32877ZM11.2137 13.1034L13.6623 10.6476C13.6712 10.6387 13.6798 10.6296 13.6881 10.6203C14.6933 9.49774 15.2303 8.03281 15.1888 6.52657C15.1473 5.02032 14.5304 3.58719 13.4649 2.52171C12.3994 1.45623 10.9663 0.839346 9.46006 0.797833C7.95382 0.756319 6.48889 1.29333 5.36634 2.29851C5.3565 2.30732 5.34692 2.3164 5.33759 2.32576L0.837594 6.83909C0.564918 7.11257 0.565245 7.55522 0.838326 7.82831L3.50499 10.495C3.77791 10.7679 4.22022 10.7684 4.49378 10.4961L8.7161 6.29364C8.8503 6.20163 9.01188 6.15712 9.17497 6.16792C9.35072 6.17955 9.51626 6.25462 9.6408 6.37917C9.76534 6.50371 9.84041 6.66925 9.85205 6.84499C9.86281 7.00762 9.81858 7.16875 9.72711 7.30273L7.57955 9.4402C7.55358 9.45976 7.52865 9.48137 7.50499 9.50502C7.48214 9.52787 7.4612 9.55191 7.44217 9.57693L5.50616 11.5039C5.37437 11.635 5.30019 11.8132 5.29997 11.9992C5.29975 12.1851 5.37352 12.3635 5.50499 12.495L8.17166 15.1616C8.30306 15.293 8.48132 15.3668 8.66715 15.3667C8.85298 15.3665 9.03113 15.2925 9.16234 15.1609L11.105 13.2125C11.1246 13.1967 11.1435 13.1798 11.1616 13.1616C11.1803 13.143 11.1976 13.1236 11.2137 13.1034ZM9.67446 12.6644L8.00351 10.9935L6.99108 12.0012L8.6659 13.676L9.67446 12.6644ZM5.01356 8.00354L3.33107 6.32105L2.32252 7.3326L4.00113 9.01121L5.01356 8.00354Z"
      fill="currentColor"
    />
  </svg>
);
export default MagnetIcon;