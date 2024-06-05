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

const MessageCircleOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838345 0.838387C1.11171 0.56502 1.55493 0.56502 1.82829 0.838387L4.22711 3.2372C4.22802 3.23811 4.22894 3.23903 4.22985 3.23994L12.6939 11.704C12.6947 11.7048 12.6955 11.7056 12.6964 11.7064L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1617C14.8883 15.435 14.445 15.435 14.1717 15.1617L12.182 13.172C10.2542 14.782 7.56177 15.1608 5.28011 14.089L1.55468 15.3308C1.30314 15.4146 1.02583 15.3492 0.838345 15.1617C0.650862 14.9742 0.585397 14.6969 0.669241 14.4453L1.91245 10.7157C0.841836 8.37668 1.27373 5.68828 2.77756 3.76755L0.838345 1.82834C0.564978 1.55497 0.564978 1.11175 0.838345 0.838387ZM3.77658 4.76657C2.61566 6.34859 2.34893 8.51833 3.28915 10.3466C3.37532 10.5141 3.39031 10.7093 3.33073 10.8881L2.44012 13.5599L5.11196 12.6693C5.29344 12.6088 5.49177 12.6252 5.66084 12.7147C7.44443 13.659 9.61318 13.4281 11.187 12.177L3.77658 4.76657ZM5.84345 1.6699C7.02577 1.27213 8.29566 1.21234 9.51012 1.49725C10.7246 1.78217 11.8354 2.40047 12.7175 3.28254C13.5995 4.16462 14.2178 5.27542 14.5028 6.48989C14.7877 7.70436 14.7279 8.97425 14.3301 10.1566C14.2068 10.523 13.8099 10.7201 13.4434 10.5968C13.077 10.4735 12.8799 10.0766 13.0032 9.71015C13.3178 8.77488 13.3651 7.77034 13.1398 6.80965C12.9144 5.84895 12.4253 4.97025 11.7275 4.27249C11.0298 3.57473 10.1511 3.08563 9.19037 2.86025C8.22967 2.63487 7.22513 2.68217 6.28986 2.99682C5.92344 3.1201 5.52647 2.92299 5.40319 2.55657C5.27992 2.19015 5.47703 1.79318 5.84345 1.6699Z"
      fill="currentColor"
    />
  </svg>
);
export default MessageCircleOffIcon;
