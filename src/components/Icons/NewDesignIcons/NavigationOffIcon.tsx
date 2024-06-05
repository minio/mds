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

const NavigationOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.1617 0.838346C15.3709 1.04755 15.426 1.36568 15.2993 1.63304L12.226 8.1197C12.0604 8.46907 11.643 8.61811 11.2936 8.45258C10.9443 8.28705 10.7952 7.86964 10.9608 7.52027L13.1947 2.80535L8.47974 5.03924C8.13037 5.20477 7.71297 5.05574 7.54744 4.70637C7.38191 4.357 7.53094 3.93959 7.88031 3.77406L14.367 0.700731C14.6343 0.574057 14.9525 0.629147 15.1617 0.838346ZM0.838387 0.838346C1.11175 0.564979 1.55497 0.564979 1.82834 0.838346L6.10351 5.11352C6.11134 5.12099 6.11902 5.12867 6.12653 5.13654L10.8635 9.87349C10.8713 9.881 10.879 9.88867 10.8865 9.8965L15.1617 14.1717C15.435 14.445 15.435 14.8883 15.1617 15.1616C14.8883 15.435 14.4451 15.435 14.1717 15.1616L10.5877 11.5776L9.29941 14.2994C9.1729 14.5667 8.8921 14.7257 8.59783 14.6966C8.30356 14.6675 8.05931 14.4566 7.98759 14.1698L6.75613 9.24389L1.83025 8.01242C1.54338 7.9407 1.33252 7.69645 1.30342 7.40219C1.27433 7.10792 1.43329 6.82711 1.70057 6.70061L4.42245 5.41235L0.838387 1.8283C0.56502 1.55493 0.56502 1.11171 0.838387 0.838346ZM5.47375 6.46366L4.06832 7.12885L6.82915 7.81906L5.47375 6.46366ZM8.18096 9.17087L8.87117 11.9317L9.53635 10.5263L8.18096 9.17087Z"
      fill="currentColor"
    />
  </svg>
);
export default NavigationOffIcon;
