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

const FoldHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 0.633362C8.3866 0.633362 8.7 0.946762 8.7 1.33336V2.6667C8.7 3.05329 8.3866 3.3667 8 3.3667C7.6134 3.3667 7.3 3.05329 7.3 2.6667V1.33336C7.3 0.946762 7.6134 0.633362 8 0.633362ZM8 4.63336C8.3866 4.63336 8.7 4.94676 8.7 5.33336V6.66669C8.7 7.05329 8.3866 7.36669 8 7.36669C7.6134 7.36669 7.3 7.05329 7.3 6.66669V5.33336C7.3 4.94676 7.6134 4.63336 8 4.63336ZM2.83836 5.50505C3.11172 5.23169 3.55494 5.23169 3.82831 5.50505L5.82831 7.50505C6.10167 7.77842 6.10167 8.22164 5.82831 8.495L3.82831 10.495C3.55494 10.7684 3.11172 10.7684 2.83836 10.495C2.56499 10.2216 2.56499 9.77842 2.83836 9.50505L3.64338 8.70003H1.33333C0.946732 8.70003 0.633331 8.38663 0.633331 8.00003C0.633331 7.61343 0.946732 7.30003 1.33333 7.30003H3.64338L2.83836 6.495C2.56499 6.22164 2.56499 5.77842 2.83836 5.50505ZM13.1616 5.50505C13.435 5.77842 13.435 6.22164 13.1616 6.495L12.3566 7.30003H14.6667C15.0533 7.30003 15.3667 7.61343 15.3667 8.00003C15.3667 8.38663 15.0533 8.70003 14.6667 8.70003H12.3566L13.1616 9.50505C13.435 9.77842 13.435 10.2216 13.1616 10.495C12.8883 10.7684 12.4451 10.7684 12.1717 10.495L10.1717 8.495C9.89832 8.22164 9.89832 7.77842 10.1717 7.50505L12.1717 5.50505C12.4451 5.23169 12.8883 5.23169 13.1616 5.50505ZM8 8.63336C8.3866 8.63336 8.7 8.94676 8.7 9.33336V10.6667C8.7 11.0533 8.3866 11.3667 8 11.3667C7.6134 11.3667 7.3 11.0533 7.3 10.6667V9.33336C7.3 8.94676 7.6134 8.63336 8 8.63336ZM8 12.6334C8.3866 12.6334 8.7 12.9468 8.7 13.3334V14.6667C8.7 15.0533 8.3866 15.3667 8 15.3667C7.6134 15.3667 7.3 15.0533 7.3 14.6667V13.3334C7.3 12.9468 7.6134 12.6334 8 12.6334Z"
      fill="currentColor"
    />
  </svg>
);
export default FoldHorizontalIcon;
