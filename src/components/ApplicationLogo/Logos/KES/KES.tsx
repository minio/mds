// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

import React, { FC, SVGProps } from "react";
import LogoBase from "../LogoBase/LogoBase";
import { LogoBaseProps } from "../LogoBase/LogoBase.types";

const KES: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 184.538 51" inverse={inverse} onClick={onClick}>
      <g transform="translate(26.059 -11)">
        <g transform="translate(-29 11)">
          <g transform="translate(0 0)">
            <path
              d="M19.7,0h6.7L14.726-13.265,25.586-25.9H19.111l-8.566,10.49H8.1V-25.9H2.942V0H8.1V-10.656H10.49ZM47.712-4.736H33.522v-5.957H46.916v-4.736H33.522v-5.735H47.564V-25.9h-19.2V0H47.712ZM72.039-23.588a18.223,18.223,0,0,0-9.9-2.757c-5.513,0-10.323,2.812-10.323,8.214,0,4.681,3.33,6.7,7.9,7.419l1.646.259c3.607.574,5.495,1.24,5.495,3.034,0,2-2.22,3.127-5.088,3.127a13.674,13.674,0,0,1-8.251-2.794L50.838-2.923C53.613-.685,57.831.463,61.753.463c5.568,0,10.6-2.72,10.6-8.436,0-4.514-3.626-6.494-8.251-7.252l-1.462-.241c-3.108-.518-5.347-1.092-5.347-3,0-1.961,2.054-3.108,4.958-3.108a13.919,13.919,0,0,1,7.345,2.2Z"
              transform="translate(0 49.495)"
              className={"minioApplicationName"}
            />
            <g transform="translate(3.025 0)">
              <g transform="translate(0 0.194)">
                <rect
                  width="3.76"
                  height="11.103"
                  transform="translate(21.776)"
                  className={"minioSection"}
                />
                <path
                  d="M243.621,365.383l-7.631,4.661a.34.34,0,0,1-.355,0l-7.631-4.661a1.048,1.048,0,0,0-.546-.153h-.009a1.047,1.047,0,0,0-1.047,1.046V376.32h3.758v-4.78a.376.376,0,0,1,.572-.321l4.276,2.616a1.338,1.338,0,0,0,1.377.014L240.9,371.2a.376.376,0,0,1,.565.325v4.794h3.757V366.276a1.046,1.046,0,0,0-1.045-1.046h-.01A1.047,1.047,0,0,0,243.621,365.383Z"
                  transform="translate(-226.403 -365.23)"
                  className={"minioSection"}
                />
                <path
                  d="M263.158,365.23h-3.813v5.053a.376.376,0,0,1-.553.332l-9.881-5.263a1.051,1.051,0,0,0-.492-.122h-.007a1.047,1.047,0,0,0-1.047,1.046v10.045h3.783v-5.048a.376.376,0,0,1,.552-.332l9.921,5.262a1.046,1.046,0,0,0,.491.122h0a1.047,1.047,0,0,0,1.047-1.047Z"
                  transform="translate(-218.873 -365.23)"
                  className={"minioSection"}
                />
              </g>
              <path
                d="M261.159,376.333v-11.1h1.73v11.1Z"
                transform="translate(-213.918 -365.036)"
                className={"minioSection"}
              />
              <path
                d="M272.024,376.582c-4.654,0-7.955-2.207-7.955-5.747,0-3.52,3.322-5.748,7.955-5.748S280,367.294,280,370.835,276.738,376.582,272.024,376.582Zm0-10.023c-3.461,0-6.126,1.511-6.126,4.276,0,2.784,2.665,4.276,6.126,4.276s6.146-1.492,6.146-4.276C278.171,368.07,275.485,366.559,272.024,366.559Z"
                transform="translate(-212.873 -365.087)"
                className={"minioSection"}
              />
            </g>
          </g>
        </g>
      </g>
    </LogoBase>
  );
};

export default KES;
