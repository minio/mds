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

const DirectPV: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 184.538 50.008" inverse={inverse} onClick={onClick}>
      <g transform="translate(26.456 -11)">
        <g transform="translate(-29 11)">
          <g transform="translate(0 0)">
            <path
              d="M2.544-22.4V0h9.232c7.008,0,11.632-4.448,11.632-11.2S18.784-22.4,11.776-22.4Zm9.184,4.176c4.72,0,7.008,2.912,7.008,7.024,0,4.064-2.288,7.024-7.008,7.024H7.008V-18.224ZM31.088-22.4H26.624V0h4.464Zm4.288,0V0H39.84V-8.912h1.312L47.68,0h5.408l-6.9-8.976c4.3-.416,6.864-2.928,6.864-6.608,0-4.288-2.864-6.816-8.208-6.816Zm9.392,4.112c2.368,0,3.7.848,3.7,2.7,0,1.888-1.264,2.784-3.7,2.784H39.84v-5.488ZM73.072-4.1H60.8V-9.248H72.384v-4.1H60.8V-18.3H72.944v-4.1H56.336V0H73.072Zm14.32-18.72c-6.9,0-11.76,4.88-11.76,11.616S80.5.416,87.392.416A11.153,11.153,0,0,0,96.848-4.32L93.2-6.944a6.855,6.855,0,0,1-5.84,3.072c-3.952,0-7.056-2.832-7.072-7.328,0-4.352,3.008-7.328,7.072-7.328a6.7,6.7,0,0,1,5.792,3.088l3.84-2.352A10.88,10.88,0,0,0,87.392-22.816ZM116.7-22.4H98.352v4.176H105.3V0h4.464V-18.224H116.7ZM128.08-9.12c4.944,0,7.92-2.448,7.92-6.64s-2.976-6.64-7.92-6.64h-8.32V0h1.952V-9.12Zm-.048-11.44c3.744,0,5.936,1.632,5.936,4.8s-2.192,4.784-5.936,4.784h-6.32V-20.56Zm30.4-1.84h-2.016l-8.4,20.464L139.632-22.4h-2.08L146.784,0H149.2Z"
              transform="translate(0 42.065)"
              className={"minioApplicationName"}
            />
            <g transform="translate(2.649 0)">
              <g transform="translate(0 0.17)">
                <rect
                  width="3.292"
                  height="9.721"
                  transform="translate(19.066)"
                  className={"minioSection"}
                />
                <path
                  d="M241.479,365.364l-6.681,4.081a.3.3,0,0,1-.311,0l-6.681-4.081a.917.917,0,0,0-.478-.134h-.008a.917.917,0,0,0-.916.916v8.793h3.29v-4.185a.329.329,0,0,1,.5-.281l3.744,2.291a1.172,1.172,0,0,0,1.206.012l3.952-2.318a.329.329,0,0,1,.5.284v4.2h3.289v-8.793a.916.916,0,0,0-.915-.916h-.008A.917.917,0,0,0,241.479,365.364Z"
                  transform="translate(-226.403 -365.23)"
                  className={"minioSection"}
                />
                <path
                  d="M261.192,365.23h-3.338v4.425a.329.329,0,0,1-.484.29l-8.652-4.608a.919.919,0,0,0-.431-.107h-.006a.917.917,0,0,0-.916.916v8.795h3.312v-4.42a.329.329,0,0,1,.483-.29l8.686,4.607a.916.916,0,0,0,.43.107h0a.917.917,0,0,0,.916-.916Z"
                  transform="translate(-222.419 -365.23)"
                  className={"minioSection"}
                />
              </g>
              <path
                d="M261.159,374.952V365.23h1.515v9.722Z"
                transform="translate(-219.797 -365.06)"
                className={"minioSection"}
              />
              <path
                d="M271.034,375.151c-4.075,0-6.965-1.933-6.965-5.032,0-3.082,2.908-5.033,6.965-5.033s6.983,1.933,6.983,5.033S275.162,375.151,271.034,375.151Zm0-8.776c-3.03,0-5.364,1.323-5.364,3.744,0,2.437,2.334,3.744,5.364,3.744s5.382-1.307,5.382-3.744C276.416,367.7,274.064,366.376,271.034,366.376Z"
                transform="translate(-219.244 -365.087)"
                className={"minioSection"}
              />
            </g>
          </g>
        </g>
      </g>
    </LogoBase>
  );
};

export default DirectPV;
