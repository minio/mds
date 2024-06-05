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

const TowerControlIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.63335 1.3333C6.63335 0.946701 6.94675 0.633301 7.33335 0.633301H8.66668C9.05328 0.633301 9.36668 0.946701 9.36668 1.3333C9.36668 1.70873 9.07114 2.01512 8.70001 2.03252V3.29997H9.98798C9.9954 3.29985 10.0028 3.29985 10.0103 3.29997H13.3333C13.5532 3.29997 13.7602 3.40322 13.8925 3.57878C14.0247 3.75435 14.0668 3.98185 14.0062 4.19312L12.8328 8.28049C12.8285 8.31016 12.8222 8.33971 12.814 8.36896C12.7337 8.65539 12.5621 8.90778 12.3253 9.08784C12.0886 9.2679 11.7995 9.36578 11.502 9.36663L11.5 9.36663H11.3667V14.6666C11.3667 15.0532 11.0533 15.3666 10.6667 15.3666C10.2801 15.3666 9.96668 15.0532 9.96668 14.6666V9.36663H9.34539C9.33797 9.36675 9.33052 9.36675 9.32305 9.36663H6.67698C6.66951 9.36675 6.66206 9.36675 6.65464 9.36663H6.03335V14.6666C6.03335 15.0532 5.71995 15.3666 5.33335 15.3666C4.94675 15.3666 4.63335 15.0532 4.63335 14.6666V9.36663H4.49099C4.19587 9.36283 3.90991 9.26353 3.67588 9.0837C3.44254 8.90439 3.27332 8.65457 3.19336 8.3714L1.99386 4.19312C1.9332 3.98185 1.97531 3.75435 2.10757 3.57878C2.23983 3.40322 2.44687 3.29997 2.66668 3.29997H5.98973C5.99719 3.29985 6.00463 3.29985 6.01205 3.29997H7.30001V2.03252C6.92889 2.01512 6.63335 1.70873 6.63335 1.3333ZM6.80712 4.69997L7.27379 7.96663H8.72624L9.19291 4.69997H6.80712ZM10.6071 4.69997L10.1405 7.96663H11.4663L12.4041 4.69997H10.6071ZM5.85957 7.96663L5.39291 4.69997H3.59591L4.53371 7.96663H5.85957Z"
      fill="currentColor"
    />
  </svg>
);
export default TowerControlIcon;
