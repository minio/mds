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

const ImportIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 1.29999C8.38657 1.29999 8.69997 1.61339 8.69997 1.99999V8.31004L10.1717 6.83835C10.445 6.56498 10.8882 6.56498 11.1616 6.83835C11.435 7.11171 11.435 7.55493 11.1616 7.8283L8.49494 10.495C8.36367 10.6262 8.18562 10.7 7.99997 10.7C7.81432 10.7 7.63627 10.6262 7.50499 10.495L4.83833 7.8283C4.56496 7.55493 4.56496 7.11171 4.83833 6.83835C5.11169 6.56498 5.55491 6.56498 5.82828 6.83835L7.29997 8.31004V1.99999C7.29997 1.61339 7.61337 1.29999 7.99997 1.29999ZM1.22885 3.22887C1.61017 2.84755 2.12736 2.63332 2.66663 2.63332H5.3333C5.7199 2.63332 6.0333 2.94672 6.0333 3.33332C6.0333 3.71992 5.7199 4.03332 5.3333 4.03332H2.66663C2.49866 4.03332 2.33757 4.10005 2.2188 4.21882C2.10003 4.33759 2.0333 4.49868 2.0333 4.66665V11.3333C2.0333 11.5013 2.10003 11.6624 2.2188 11.7812C2.33757 11.8999 2.49866 11.9667 2.66663 11.9667H13.3333C13.5013 11.9667 13.6624 11.8999 13.7811 11.7812C13.8999 11.6624 13.9666 11.5013 13.9666 11.3333V4.66665C13.9666 4.49868 13.8999 4.33759 13.7811 4.21882C13.6624 4.10005 13.5013 4.03332 13.3333 4.03332H10.6666C10.28 4.03332 9.96663 3.71992 9.96663 3.33332C9.96663 2.94672 10.28 2.63332 10.6666 2.63332H13.3333C13.8726 2.63332 14.3898 2.84755 14.7711 3.22887C15.1524 3.61019 15.3666 4.12738 15.3666 4.66665V11.3333C15.3666 11.8726 15.1524 12.3898 14.7711 12.7711C14.3898 13.1524 13.8726 13.3667 13.3333 13.3667H2.66663C2.12736 13.3667 1.61017 13.1524 1.22885 12.7711C0.847526 12.3898 0.633301 11.8726 0.633301 11.3333V4.66665C0.633301 4.12738 0.847526 3.61019 1.22885 3.22887Z"
      fill="currentColor"
    />
  </svg>
);
export default ImportIcon;
