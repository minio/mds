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

const ImageIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.69999C2.9836 2.69999 2.70005 2.98354 2.70005 3.33332V12.6667C2.70005 13.0164 2.9836 13.3 3.33338 13.3H3.7101L9.56241 7.44768L9.56248 7.4476C9.94379 7.06641 10.4609 6.85227 11 6.85227C11.5392 6.85227 12.0563 7.06641 12.4376 7.4476L12.4377 7.44768L13.3 8.31004V3.33332C13.3 2.98354 13.0165 2.69999 12.6667 2.69999H3.33338ZM13.3 10.2899L11.4478 8.4377C11.329 8.31897 11.168 8.25227 11 8.25227C10.8321 8.25227 10.6711 8.31894 10.5524 8.43763C10.5523 8.43765 10.5523 8.43768 10.5523 8.4377L5.69 13.3H12.6667C13.0165 13.3 13.3 13.0164 13.3 12.6667V10.2899ZM1.30005 3.33332C1.30005 2.21034 2.2104 1.29999 3.33338 1.29999H12.6667C13.7897 1.29999 14.7 2.21034 14.7 3.33332V12.6667C14.7 13.7896 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7896 1.30005 12.6667V3.33332ZM6.00005 5.36665C5.65027 5.36665 5.36672 5.65021 5.36672 5.99999C5.36672 6.34977 5.65027 6.63332 6.00005 6.63332C6.34983 6.63332 6.63338 6.34977 6.63338 5.99999C6.63338 5.65021 6.34983 5.36665 6.00005 5.36665ZM3.96672 5.99999C3.96672 4.87701 4.87707 3.96665 6.00005 3.96665C7.12303 3.96665 8.03338 4.87701 8.03338 5.99999C8.03338 7.12297 7.12303 8.03332 6.00005 8.03332C4.87707 8.03332 3.96672 7.12297 3.96672 5.99999Z"
      fill="currentColor"
    />
  </svg>
);
export default ImageIcon;
