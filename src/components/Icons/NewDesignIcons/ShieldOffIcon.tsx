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

const ShieldOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.94901 2.05143C7.51715 2.42573 7.05011 2.75741 6.55441 3.04184C6.21909 3.23424 5.79128 3.11839 5.59888 2.78307C5.40647 2.44775 5.52233 2.01994 5.85765 1.82754C6.27608 1.58745 6.67025 1.30738 7.03466 0.991259L7.03865 0.987798L7.03866 0.987813C7.30665 0.758854 7.64755 0.633057 8.00003 0.633057C8.3525 0.633057 8.69341 0.758854 8.9614 0.987813L8.96746 0.992999L8.96743 0.993033C10.0568 1.94542 11.5594 2.63336 12.6667 2.63336C13.0292 2.63336 13.3768 2.77734 13.6331 3.03364C13.8894 3.28994 14.0334 3.63756 14.0334 4.00002V8.6656M0.838387 0.838382C1.11175 0.565015 1.55497 0.565015 1.82834 0.838382L3.82824 2.83829C3.82831 2.83835 3.82837 2.83841 3.82843 2.83847L12.6495 11.6595C12.6536 11.6636 12.6577 11.6676 12.6617 11.6718L15.1617 14.1717C15.435 14.4451 15.435 14.8883 15.1617 15.1617C14.8883 15.435 14.4451 15.435 14.1717 15.1617L12.1794 13.1693C11.1581 14.153 9.82931 14.8155 8.45731 15.2943L8.45136 15.2964L8.45135 15.2963C8.15674 15.3962 7.83699 15.3925 7.5449 15.2861C6.10663 14.7887 4.71639 14.0872 3.68001 13.0257C2.62297 11.9431 1.9667 10.5182 1.9667 8.66669V4.00002C1.9667 3.71468 2.05593 3.43853 2.21895 3.2089L0.838387 1.82833C0.56502 1.55496 0.56502 1.11175 0.838387 0.838382ZM3.3667 4.35664V8.66669C3.3667 10.1485 3.87708 11.2236 4.68171 12.0477C5.5054 12.8913 6.66914 13.5025 8.00851 13.965L8.01283 13.9666C9.27825 13.5234 10.3797 12.9512 11.1892 12.1791L3.3667 4.35664Z"
      fill="currentColor"
    />
  </svg>
);
export default ShieldOffIcon;
