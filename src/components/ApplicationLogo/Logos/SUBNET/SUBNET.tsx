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

const SUBNET: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 184.538 50.008" inverse={inverse} onClick={onClick}>
      <g transform="translate(27.622 -11)">
        <g transform="translate(-29 11)">
          <g transform="translate(0 0)">
            <path
              d="M17.995-18.488a14.283,14.283,0,0,0-7.758-2.161c-4.321,0-8.091,2.2-8.091,6.438,0,3.668,2.61,5.249,6.192,5.814l1.29.2c2.828.45,4.307.972,4.307,2.378,0,1.566-1.74,2.451-3.988,2.451A10.718,10.718,0,0,1,3.48-5.554l-2.1,3.263A14.124,14.124,0,0,0,9.933.363c4.365,0,8.309-2.132,8.309-6.612,0-3.538-2.842-5.09-6.467-5.684l-1.146-.188c-2.436-.406-4.191-.856-4.191-2.349,0-1.537,1.609-2.436,3.886-2.436a10.91,10.91,0,0,1,5.757,1.726ZM38.353-20.3h-4.06V-8.309c0,3.335-1.885,4.8-4.684,4.8s-4.684-1.465-4.684-4.8V-20.3h-4.06V-8.106c0,5.612,3.582,8.468,8.744,8.468s8.743-2.857,8.743-8.468Zm3.654,0V0h8.787c4.872,0,7.642-1.914,7.642-5.815a4.874,4.874,0,0,0-3.379-4.553A4.528,4.528,0,0,0,58-14.674c0-3.871-2.972-5.626-7.7-5.626ZM50.59-8.439c2.233,0,3.64.522,3.64,2.421,0,1.943-1.407,2.465-3.64,2.465l-4.538-.015V-8.439Zm-.406-8.294c2,0,3.6.435,3.6,2.349,0,1.972-1.566,2.393-3.582,2.393H46.052v-4.741ZM79.5-20.3h-4.06V-6.743L65.134-20.3H61.349V0h4.045l.015-13.558L75.7,0h3.8ZM98.557-3.712H87.435V-8.381h10.5v-3.712h-10.5v-4.5H98.441V-20.3H83.39V0H98.557ZM116.769-20.3H100.137v3.785h6.293V0h4.045V-16.516h6.293Z"
              transform="translate(0 38.028)"
              className={"minioApplicationName"}
            />
            <g transform="translate(2.376 0)">
              <g transform="translate(0 0.153)">
                <rect
                  width="2.953"
                  height="8.72"
                  transform="translate(17.103)"
                  className={"minioSection"}
                />
                <path
                  d="M239.926,365.35l-5.993,3.661a.267.267,0,0,1-.279,0l-5.993-3.661a.823.823,0,0,0-.429-.12h-.007a.822.822,0,0,0-.822.822v7.888h2.952v-3.754a.3.3,0,0,1,.449-.252l3.358,2.055a1.051,1.051,0,0,0,1.081.011l3.545-2.08a.3.3,0,0,1,.444.255v3.765h2.951v-7.888a.821.821,0,0,0-.821-.822h-.007A.823.823,0,0,0,239.926,365.35Z"
                  transform="translate(-226.403 -365.23)"
                  className={"minioSection"}
                />
                <path
                  d="M259.769,365.23h-2.994V369.2a.3.3,0,0,1-.434.26l-7.761-4.133a.825.825,0,0,0-.386-.1h-.005a.822.822,0,0,0-.822.822v7.889h2.971v-3.965a.3.3,0,0,1,.433-.26l7.792,4.132a.822.822,0,0,0,.385.1h0a.822.822,0,0,0,.822-.822Z"
                  transform="translate(-224.988 -365.23)"
                  className={"minioSection"}
                />
              </g>
              <path
                d="M261.159,373.95v-8.72h1.359v8.72Z"
                transform="translate(-224.056 -365.077)"
                className={"minioSection"}
              />
              <path
                d="M270.317,374.115c-3.655,0-6.248-1.734-6.248-4.513s2.609-4.515,6.248-4.515,6.264,1.734,6.264,4.515S274.019,374.115,270.317,374.115Zm0-7.872c-2.718,0-4.811,1.187-4.811,3.358s2.093,3.358,4.811,3.358,4.827-1.172,4.827-3.358S273.035,366.243,270.317,366.243Z"
                transform="translate(-223.86 -365.087)"
                className={"minioSection"}
              />
            </g>
          </g>
        </g>
      </g>
    </LogoBase>
  );
};

export default SUBNET;
