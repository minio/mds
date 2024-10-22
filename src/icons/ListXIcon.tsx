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

const ListXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.29999 3.99999C1.29999 3.61339 1.61339 3.29999 1.99999 3.29999H10.6667C11.0533 3.29999 11.3667 3.61339 11.3667 3.99999C11.3667 4.38659 11.0533 4.69999 10.6667 4.69999H1.99999C1.61339 4.69999 1.29999 4.38659 1.29999 3.99999ZM9.50501 6.17168C9.77838 5.89831 10.2216 5.89831 10.495 6.17168L11.3333 7.01004L12.1717 6.17168C12.445 5.89831 12.8883 5.89831 13.1616 6.17168C13.435 6.44505 13.435 6.88826 13.1616 7.16163L12.3233 7.99999L13.1616 8.83835C13.435 9.11171 13.435 9.55493 13.1616 9.8283C12.8883 10.1017 12.445 10.1017 12.1717 9.8283L11.3333 8.98994L10.495 9.8283C10.2216 10.1017 9.77838 10.1017 9.50501 9.8283C9.23165 9.55493 9.23165 9.11171 9.50501 8.83835L10.3434 7.99999L9.50501 7.16163C9.23165 6.88826 9.23165 6.44505 9.50501 6.17168ZM1.29999 7.99999C1.29999 7.61339 1.61339 7.29999 1.99999 7.29999H7.33332C7.71992 7.29999 8.03332 7.61339 8.03332 7.99999C8.03332 8.38659 7.71992 8.69999 7.33332 8.69999H1.99999C1.61339 8.69999 1.29999 8.38659 1.29999 7.99999ZM1.29999 12C1.29999 11.6134 1.61339 11.3 1.99999 11.3H10.6667C11.0533 11.3 11.3667 11.6134 11.3667 12C11.3667 12.3866 11.0533 12.7 10.6667 12.7H1.99999C1.61339 12.7 1.29999 12.3866 1.29999 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListXIcon;
