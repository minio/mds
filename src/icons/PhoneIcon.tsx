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

const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.1547 4.25622C3.72715 8.77796 7.02045 12.0162 11.4762 13.6222C12.1032 13.8482 12.6945 13.692 13.1313 13.3048C13.5768 12.9098 13.8584 12.2714 13.7896 11.5559C13.7415 11.0565 13.3937 10.6369 12.9118 10.4972L11.8338 10.1845C11.4368 10.0694 11.0095 10.2058 10.7527 10.5298C10.3334 11.0587 9.55424 11.3097 8.8772 10.9229C7.43358 10.098 5.76069 8.46348 4.91203 7.02121C4.50389 6.32758 4.75878 5.52453 5.29424 5.08801C5.68163 4.77221 5.8163 4.23985 5.62566 3.77783L5.1723 2.67905C4.98436 2.22354 4.54024 1.92636 4.04749 1.92636C2.6617 1.92636 1.76485 3.13515 2.1547 4.25622ZM11.0015 14.9393C6.16024 13.1944 2.54767 9.64857 0.832376 4.71606C0.0622638 2.50152 1.90173 0.526357 4.04748 0.526356C5.10719 0.526356 6.06228 1.16547 6.46647 2.14507L6.91983 3.24385C7.34604 4.27683 7.04496 5.46706 6.17885 6.17313C6.1393 6.20537 6.12033 6.24275 6.11436 6.26895C6.10933 6.29103 6.1131 6.3018 6.11864 6.31122C6.84091 7.53868 8.33533 9.00082 9.57177 9.70732C9.57329 9.70819 9.57424 9.7086 9.57483 9.7088C9.57541 9.70899 9.57564 9.70898 9.5757 9.70899C9.57642 9.70908 9.58037 9.70949 9.5879 9.7077C9.60433 9.7038 9.63148 9.69053 9.65554 9.66017C10.2656 8.89055 11.2806 8.5664 12.2238 8.83994L13.3018 9.15258C14.3346 9.45211 15.0802 10.3514 15.1832 11.4218C15.2949 12.5836 14.8399 13.6609 14.0601 14.3523C13.2714 15.0516 12.1487 15.3527 11.0015 14.9393Z"
      fill="currentColor"
    />
  </svg>
);
export default PhoneIcon;
