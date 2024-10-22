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

const WifiIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 4.03354C5.71238 4.03354 3.50504 4.87667 1.79997 6.40173C1.51182 6.65947 1.06929 6.63481 0.811558 6.34665C0.553825 6.0585 0.578487 5.61597 0.866641 5.35824C2.82839 3.6036 5.36802 2.63354 7.99997 2.63354C10.6319 2.63354 13.1716 3.6036 15.1333 5.35824C15.4215 5.61597 15.4461 6.0585 15.1884 6.34665C14.9307 6.63481 14.4881 6.65947 14.2 6.40173C12.4949 4.87667 10.2876 4.03354 7.99997 4.03354ZM7.99997 7.36694C6.43818 7.36694 4.93865 7.9793 3.82331 9.07255C3.54722 9.34317 3.10403 9.33874 2.83341 9.06265C2.56279 8.78656 2.56722 8.34337 2.84331 8.07275C4.22035 6.72298 6.07173 5.96694 7.99997 5.96694C9.92822 5.96694 11.7796 6.72298 13.1566 8.07275C13.4327 8.34337 13.4372 8.78656 13.1665 9.06265C12.8959 9.33874 12.4527 9.34317 12.1766 9.07255C11.0613 7.9793 9.56177 7.36694 7.99997 7.36694ZM7.99997 10.6998C7.31069 10.6998 6.64889 10.9701 6.15664 11.4526C5.88055 11.7232 5.43736 11.7187 5.16674 11.4427C4.89612 11.1666 4.90055 10.7234 5.17664 10.4528C5.93059 9.71374 6.94424 9.29979 7.99997 9.29979C9.05571 9.29979 10.0694 9.71374 10.8233 10.4528C11.0994 10.7234 11.1038 11.1666 10.8332 11.4427C10.5626 11.7187 10.1194 11.7232 9.84331 11.4526C9.35106 10.9701 8.68926 10.6998 7.99997 10.6998ZM7.29997 13.3333C7.29997 12.9467 7.61337 12.6333 7.99997 12.6333H8.00664C8.39324 12.6333 8.70664 12.9467 8.70664 13.3333C8.70664 13.7199 8.39324 14.0333 8.00664 14.0333H7.99997C7.61337 14.0333 7.29997 13.7199 7.29997 13.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default WifiIcon;
