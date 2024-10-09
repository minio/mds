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

const EggIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.13171 3.18644C5.09129 1.83489 6.46073 0.650647 7.99209 0.633392H8.00786C9.53922 0.650647 10.9087 1.83489 11.8682 3.18644C12.8529 4.57328 13.5656 6.35099 13.6976 7.94215C13.8283 9.50839 13.6118 11.3255 12.7531 12.7836C11.8679 14.2868 10.3305 15.348 8.00559 15.3667L7.99436 15.3667L7.99436 15.3667C5.66949 15.348 4.1321 14.2868 3.2468 12.7836C2.38812 11.3255 2.17162 9.50839 2.30237 7.94215M4.13171 3.18644C3.14715 4.57316 2.43448 6.35069 2.30241 7.94175L4.13171 3.18644ZM5.27325 3.99692C4.40955 5.21342 3.8056 6.75571 3.69758 8.05788L3.69755 8.05828C3.5817 9.44528 3.78857 10.9447 4.45315 12.0731C5.09053 13.1554 6.17491 13.9504 7.99998 13.9667C9.82504 13.9504 10.9094 13.1554 11.5468 12.0731C12.2114 10.9447 12.4182 9.44528 12.3024 8.05828L12.3024 8.05788C12.1944 6.75571 11.5904 5.21342 10.7267 3.99692C9.84075 2.74908 8.83375 2.04714 7.99998 2.03341C7.1662 2.04714 6.1592 2.74908 5.27325 3.99692Z"
      fill="currentColor"
    />
  </svg>
);
export default EggIcon;
