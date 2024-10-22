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

const PenToolIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.83834 0.83834C1.01077 0.665908 1.26051 0.595639 1.49756 0.652858L11.1642 2.98619C11.4292 3.05015 11.6329 3.26209 11.6864 3.52937L12.4475 7.33501C12.6905 7.25516 12.9684 7.31183 13.1616 7.50501L15.1616 9.50501C15.435 9.77837 15.435 10.2216 15.1616 10.495L10.495 15.1616C10.2216 15.435 9.77837 15.435 9.50501 15.1616L7.50501 13.1616C7.31183 12.9684 7.25516 12.6905 7.33501 12.4475L3.52937 11.6864C3.26209 11.6329 3.05015 11.4292 2.98619 11.1642L0.652858 1.49756C0.595639 1.26051 0.665908 1.01077 0.83834 0.83834ZM8.43657 11.2401L11.2401 8.43657L10.4012 4.24223L3.58748 2.59753L6.47802 5.48808C6.73802 5.36736 7.0278 5.29998 7.33331 5.29998C8.45629 5.29998 9.36665 6.21034 9.36665 7.33331C9.36665 8.45629 8.45629 9.36665 7.33331 9.36665C6.21034 9.36665 5.29998 8.45629 5.29998 7.33331C5.29998 7.0278 5.36736 6.73802 5.48808 6.47802L2.59753 3.58748L4.24223 10.4012L8.43657 11.2401ZM6.87731 6.8938C6.76751 7.0077 6.69998 7.16262 6.69998 7.33331C6.69998 7.68309 6.98353 7.96665 7.33331 7.96665C7.68309 7.96665 7.96665 7.68309 7.96665 7.33331C7.96665 6.98353 7.68309 6.69998 7.33331 6.69998C7.16262 6.69998 7.0077 6.76751 6.8938 6.87731C6.8911 6.8801 6.88838 6.88287 6.88562 6.88562C6.88287 6.88838 6.8801 6.8911 6.87731 6.8938ZM8.98993 12.6666L9.99998 13.6767L13.6767 9.99998L12.6666 8.98993L12.4954 9.16114C12.4953 9.1613 12.4951 9.16146 12.495 9.16162L9.16162 12.495C9.16146 12.4951 9.1613 12.4953 9.16114 12.4954L8.98993 12.6666Z"
      fill="currentColor"
    />
  </svg>
);
export default PenToolIcon;
