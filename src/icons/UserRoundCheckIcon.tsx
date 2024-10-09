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

const UserRoundCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.66663 2.70005C5.21228 2.70005 4.0333 3.87903 4.0333 5.33338C4.0333 6.77666 5.1944 7.94874 6.63346 7.96651C6.65558 7.96639 6.6777 7.96639 6.69982 7.96651C8.13888 7.94874 9.29997 6.77665 9.29997 5.33338C9.29997 3.87903 8.12098 2.70005 6.66663 2.70005ZM9.15853 8.50507C10.0972 7.76658 10.7 6.62038 10.7 5.33338C10.7 3.10583 8.89418 1.30005 6.66663 1.30005C4.43909 1.30005 2.6333 3.10583 2.6333 5.33338C2.6333 6.62038 3.23609 7.76658 4.17474 8.50507C3.12058 8.98314 2.22612 9.7544 1.59814 10.7269C0.968252 11.7024 0.633237 12.8389 0.633301 14.0001C0.633322 14.3867 0.94674 14.7001 1.33334 14.7C1.71994 14.7 2.03332 14.3866 2.0333 14C2.03325 13.1083 2.29053 12.2355 2.77425 11.4864C3.25798 10.7372 3.94761 10.1436 4.76036 9.77673C5.35082 9.5102 5.98805 9.37156 6.63055 9.36656C6.64257 9.36666 6.65459 9.36672 6.66663 9.36672C6.67861 9.36672 6.69058 9.36666 6.70253 9.36656C6.92056 9.36825 7.13901 9.38533 7.35628 9.41804C8.23808 9.55076 9.06284 9.93513 9.73158 10.525C10.0215 10.7807 10.4639 10.753 10.7196 10.4631C10.9753 10.1732 10.9476 9.73082 10.6577 9.47509C10.2065 9.07713 9.70083 8.75101 9.15853 8.50507ZM15.1616 10.8384C15.435 11.1118 15.435 11.555 15.1616 11.8284L12.4949 14.495C12.3637 14.6263 12.1856 14.7 12 14.7C11.8143 14.7 11.6363 14.6263 11.505 14.495L10.1717 13.1617C9.89829 12.8883 9.89829 12.4451 10.1717 12.1717C10.445 11.8984 10.8882 11.8984 11.1616 12.1717L12 13.0101L14.1717 10.8384C14.445 10.565 14.8882 10.565 15.1616 10.8384Z"
      fill="currentColor"
    />
  </svg>
);
export default UserRoundCheckIcon;
