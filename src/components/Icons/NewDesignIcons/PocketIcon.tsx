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

const PocketIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66663 2.70005C2.49866 2.70005 2.33757 2.76677 2.2188 2.88555C2.10003 3.00432 2.0333 3.16541 2.0333 3.33338V7.33338C2.0333 8.91584 2.66193 10.4335 3.7809 11.5525C4.33495 12.1065 4.99271 12.546 5.71662 12.8459C6.44053 13.1457 7.21641 13.3 7.99997 13.3C9.58243 13.3 11.1001 12.6714 12.219 11.5525C13.338 10.4335 13.9666 8.91584 13.9666 7.33338V3.33338C13.9666 3.16541 13.8999 3.00432 13.7811 2.88555C13.6624 2.76677 13.5013 2.70005 13.3333 2.70005H2.66663ZM1.22885 1.8956C1.61017 1.51427 2.12736 1.30005 2.66663 1.30005H13.3333C13.8726 1.30005 14.3898 1.51427 14.7711 1.8956C15.1524 2.27692 15.3666 2.79411 15.3666 3.33338V7.33338C15.3666 9.28714 14.5905 11.1609 13.209 12.5424C11.8275 13.9239 9.95373 14.7 7.99997 14.7C7.03256 14.7 6.07463 14.5095 5.18087 14.1393C4.2871 13.7691 3.47501 13.2265 2.79095 12.5424C1.40943 11.1609 0.633301 9.28714 0.633301 7.33338V3.33338C0.633301 2.79411 0.847526 2.27692 1.22885 1.8956ZM4.83833 6.17174C5.11169 5.89837 5.55491 5.89837 5.82828 6.17174L7.99997 8.34343L10.1717 6.17174C10.445 5.89837 10.8882 5.89837 11.1616 6.17174C11.435 6.44511 11.435 6.88832 11.1616 7.16169L8.49494 9.82836C8.36367 9.95963 8.18562 10.0334 7.99997 10.0334C7.81432 10.0334 7.63627 9.95963 7.50499 9.82836L4.83833 7.16169C4.56496 6.88832 4.56496 6.44511 4.83833 6.17174Z"
      fill="currentColor"
    />
  </svg>
);
export default PocketIcon;
