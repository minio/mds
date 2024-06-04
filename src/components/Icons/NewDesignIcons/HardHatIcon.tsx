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

const HardHatIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.36663 3.36667V6.66667C7.36663 7.05327 7.05323 7.36667 6.66663 7.36667C6.28003 7.36667 5.96663 7.05327 5.96663 6.66667V4.77509C5.35266 4.90837 4.78433 5.21541 4.33318 5.66656C3.71431 6.28543 3.36663 7.12479 3.36663 8.00001V9.30001H12.6333V8.00001C12.6333 7.12479 12.2856 6.28543 11.6668 5.66656C11.2156 5.21541 10.6473 4.90837 10.0333 4.77509V6.66667C10.0333 7.05327 9.7199 7.36667 9.3333 7.36667C8.9467 7.36667 8.6333 7.05327 8.6333 6.66667V3.36667H7.36663ZM10.0333 3.35241V3.33334C10.0333 2.97088 9.88931 2.62326 9.63301 2.36696C9.37671 2.11066 9.0291 1.96667 8.66663 1.96667H7.3333C6.97084 1.96667 6.62322 2.11066 6.36692 2.36696C6.11062 2.62326 5.96663 2.97088 5.96663 3.33334V3.35241C4.97916 3.50113 4.05795 3.96189 3.34323 4.67661C2.46181 5.55803 1.96663 6.75349 1.96663 8.00001V9.30041C1.61625 9.30895 1.28202 9.45186 1.03359 9.7003C0.777288 9.9566 0.633301 10.3042 0.633301 10.6667V12C0.633301 12.3625 0.777288 12.7101 1.03359 12.9664C1.28989 13.2227 1.63751 13.3667 1.99997 13.3667H14C14.3624 13.3667 14.71 13.2227 14.9663 12.9664C15.2226 12.7101 15.3666 12.3625 15.3666 12V10.6667C15.3666 10.3042 15.2226 9.9566 14.9663 9.7003C14.7179 9.45186 14.3837 9.30895 14.0333 9.30041V8.00001C14.0333 6.75349 13.5381 5.55803 12.6567 4.67661C11.942 3.96189 11.0208 3.50113 10.0333 3.35241ZM2.0333 10.7V11.9667H13.9666V10.7H2.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default HardHatIcon;
