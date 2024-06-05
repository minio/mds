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

const UserRoundPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.66663 2.70005C5.21228 2.70005 4.0333 3.87903 4.0333 5.33338C4.0333 6.77666 5.1944 7.94874 6.63346 7.96651C6.65558 7.96639 6.6777 7.96639 6.69982 7.96651C8.13888 7.94874 9.29997 6.77665 9.29997 5.33338C9.29997 3.87903 8.12098 2.70005 6.66663 2.70005ZM9.15853 8.50507C10.0972 7.76658 10.7 6.62038 10.7 5.33338C10.7 3.10583 8.89418 1.30005 6.66663 1.30005C4.43909 1.30005 2.6333 3.10583 2.6333 5.33338C2.6333 6.62038 3.23609 7.76658 4.17474 8.50507C3.12058 8.98314 2.22612 9.7544 1.59814 10.7269C0.968252 11.7024 0.633237 12.8389 0.633301 14.0001C0.633322 14.3867 0.94674 14.7001 1.33334 14.7C1.71994 14.7 2.03332 14.3866 2.0333 14C2.03325 13.1083 2.29053 12.2355 2.77425 11.4864C3.25798 10.7372 3.94761 10.1436 4.76036 9.77673C5.35082 9.5102 5.98805 9.37156 6.63055 9.36656C6.64257 9.36666 6.65459 9.36672 6.66663 9.36672C6.67861 9.36672 6.69058 9.36666 6.70253 9.36656C6.92056 9.36825 7.13901 9.38533 7.35628 9.41804C8.23808 9.55076 9.06284 9.93513 9.73158 10.525C10.0215 10.7807 10.4639 10.753 10.7196 10.4631C10.9753 10.1732 10.9476 9.73082 10.6577 9.47509C10.2065 9.07713 9.70083 8.75101 9.15853 8.50507ZM12.6666 9.96672C13.0532 9.96672 13.3666 10.2801 13.3666 10.6667V11.9667H14.6666C15.0532 11.9667 15.3666 12.2801 15.3666 12.6667C15.3666 13.0533 15.0532 13.3667 14.6666 13.3667H13.3666V14.6667C13.3666 15.0533 13.0532 15.3667 12.6666 15.3667C12.28 15.3667 11.9666 15.0533 11.9666 14.6667V13.3667H10.6666C10.28 13.3667 9.96663 13.0533 9.96663 12.6667C9.96663 12.2801 10.28 11.9667 10.6666 11.9667H11.9666V10.6667C11.9666 10.2801 12.28 9.96672 12.6666 9.96672Z"
      fill="currentColor"
    />
  </svg>
);
export default UserRoundPlusIcon;
