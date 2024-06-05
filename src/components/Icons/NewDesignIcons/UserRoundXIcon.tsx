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

const UserRoundXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.66663 2.70005C5.21228 2.70005 4.0333 3.87903 4.0333 5.33338C4.0333 6.78773 5.21228 7.96672 6.66663 7.96672C6.66865 7.96672 6.67066 7.96671 6.67267 7.96671C8.12424 7.96345 9.29997 6.78572 9.29997 5.33338C9.29997 3.87903 8.12098 2.70005 6.66663 2.70005ZM9.1583 8.50525C10.0971 7.76677 10.7 6.62048 10.7 5.33338C10.7 3.10583 8.89418 1.30005 6.66663 1.30005C4.43909 1.30005 2.6333 3.10583 2.6333 5.33338C2.6333 6.62048 3.23619 7.76677 4.17497 8.50525C3.9795 8.59389 3.78836 8.69314 3.60245 8.80275C2.69817 9.33589 1.94863 10.0957 1.42791 11.0072C0.907191 11.9187 0.6333 12.9503 0.633301 14C0.633301 14.3866 0.946702 14.7 1.3333 14.7C1.7199 14.7 2.0333 14.3866 2.0333 14C2.0333 13.1939 2.24364 12.4017 2.64353 11.7017C3.04342 11.0017 3.61903 10.4182 4.31348 10.0087C5.00792 9.59932 5.79718 9.37817 6.60326 9.36714C6.62266 9.36688 6.64205 9.36673 6.66144 9.36671C6.66317 9.36671 6.6649 9.36672 6.66663 9.36672C6.66837 9.36672 6.67011 9.36671 6.67184 9.36671M10.8383 10.8384C11.1117 10.565 11.5549 10.565 11.8283 10.8384L13 12.0101L14.1717 10.8384C14.445 10.565 14.8882 10.565 15.1616 10.8384C15.435 11.1118 15.435 11.555 15.1616 11.8284L13.9899 13L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1617C14.8882 15.4351 14.445 15.4351 14.1717 15.1617L13 13.99L11.8283 15.1617C11.5549 15.4351 11.1117 15.4351 10.8383 15.1617C10.565 14.8883 10.565 14.4451 10.8383 14.1717L12.01 13L10.8383 11.8284C10.565 11.555 10.565 11.1118 10.8383 10.8384Z"
      fill="currentColor"
    />
  </svg>
);
export default UserRoundXIcon;
