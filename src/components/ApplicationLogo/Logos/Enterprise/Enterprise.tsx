// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

const Enterprise: FC<SVGProps<any> & LogoBaseProps> = ({
  inverse,
  onClick,
}) => {
  return (
    <LogoBase viewBox="0 0 249.2 51" inverse={inverse} onClick={onClick}>
      <g transform="translate(26.059 -11)">
        <g transform="translate(-29 11)">
          <g transform="translate(0 0)">
            <g transform="translate(3.025 0)">
              <g transform="translate(0 0.194)">
                <g>
                  <rect
                    x="21.8"
                    y="0"
                    className={"minioSection"}
                    width="3.8"
                    height="11.1"
                  />
                </g>
                <g>
                  <path
                    className={"minioSection"}
                    d="M17.2,0.2L9.6,4.8c-0.1,0.1-0.2,0.1-0.4,0L1.6,0.2C1.4,0.1,1.2,0,1.1,0l0,0C0.5,0,0,0.5,0,1v10h3.8
							V6.3c0-0.2,0.2-0.4,0.4-0.4c0.1,0,0.1,0,0.2,0.1l4.3,2.6c0.4,0.3,1,0.3,1.4,0L14.5,6c0.2-0.1,0.4,0,0.5,0.1
							c0,0.1,0.1,0.1,0.1,0.2v4.8h3.8V1c0-0.6-0.5-1-1-1l0,0C17.6,0,17.4,0.1,17.2,0.2z"
                  />
                </g>
                <g>
                  <path
                    className={"minioSection"}
                    d="M44.3,0h-3.8v5.1c0,0.2-0.2,0.4-0.4,0.4c-0.1,0-0.1,0-0.2,0L30,0.1C29.9,0,29.7,0,29.5,0l0,0
							c-0.6,0-1,0.5-1,1v10h3.8V6c0-0.2,0.2-0.4,0.4-0.4c0.1,0,0.1,0,0.2,0l9.9,5.3C43,11,43.1,11,43.3,11l0,0c0.6,0,1-0.5,1-1V0z"
                  />
                </g>
              </g>
              <g>
                <path
                  className={"minioSection"}
                  d="M47.2,11.3V0.2H49v11.1H47.2z"
                />
              </g>
              <g>
                <path
                  className={"minioSection"}
                  d="M59.2,11.5c-4.7,0-8-2.2-8-5.7s3.3-5.7,8-5.7s8,2.2,8,5.7S63.9,11.5,59.2,11.5z M59.2,1.5
						C55.7,1.5,53,3,53,5.7c0,2.8,2.7,4.3,6.1,4.3s6.1-1.5,6.1-4.3C65.3,3,62.6,1.5,59.2,1.5z"
                />
              </g>
            </g>
          </g>
          <g>
            <path
              className={"minioApplicationName"}
              d="M23.1,45.2v4.2H2.8V21.6h20v4.2H7.3v7.5h15v4.2h-15v7.7H23.1z"
            />
            <path
              className={"minioApplicationName"}
              d="M53.9,21.6v27.8h-4L34.4,29.3l0,20.1h-4.5V21.6h4l15.5,20.1V21.6H53.9z"
            />
            <path
              className={"minioApplicationName"}
              d="M80.9,21.6v4.2h-9v23.5h-4.5V25.9h-9v-4.2H80.9z"
            />
            <path
              className={"minioApplicationName"}
              d="M105.7,45.2v4.2H85.4V21.6h20v4.2H89.9v7.5h15v4.2h-15v7.7H105.7z"
            />
            <path
              className={"minioApplicationName"}
              d="M112.5,21.6h11.4c3.2,0,5.6,0.7,7.3,2.1c1.7,1.4,2.5,3.4,2.5,6c0,2.4-0.8,4.3-2.5,5.7c-1.7,1.5-3.9,2.2-6.8,2.3l9.2,11.7
				h-5.6l-8.9-11.7H117v11.7h-4.5V21.6z M123.8,25.8H117v7.8h6.8c1.8,0,3.1-0.3,4-1c0.9-0.7,1.3-1.7,1.3-3c0-1.3-0.4-2.3-1.3-2.9
				C126.9,26.2,125.6,25.8,123.8,25.8z"
            />
            <path
              className={"minioApplicationName"}
              d="M150.5,38.5h-6.3v10.9h-4.5V21.6h10.8c3.2,0,5.6,0.7,7.3,2.2s2.6,3.6,2.6,6.2s-0.9,4.7-2.6,6.2
				C156.1,37.8,153.7,38.5,150.5,38.5z M150.4,25.9h-6.2v8.4h6.2c1.8,0,3.1-0.3,4-1c0.9-0.7,1.3-1.7,1.3-3.2s-0.4-2.5-1.3-3.2
				C153.6,26.2,152.2,25.9,150.4,25.9z"
            />
            <path
              className={"minioApplicationName"}
              d="M166,21.6h11.4c3.2,0,5.6,0.7,7.3,2.1c1.7,1.4,2.5,3.4,2.5,6c0,2.4-0.8,4.3-2.5,5.7c-1.7,1.5-3.9,2.2-6.8,2.3l9.2,11.7
				h-5.6l-8.9-11.7h-2.3v11.7H166V21.6z M177.3,25.8h-6.8v7.8h6.8c1.8,0,3.1-0.3,4-1c0.9-0.7,1.3-1.7,1.3-3c0-1.3-0.4-2.3-1.3-2.9
				S179.1,25.8,177.3,25.8z"
            />
            <path
              className={"minioApplicationName"}
              d="M197.7,21.6v27.8h-4.5V21.6H197.7z"
            />
            <path
              className={"minioApplicationName"}
              d="M225.8,24.2l-2.3,3.6c-2.5-1.6-5.1-2.4-7.8-2.4c-1.9,0-3.4,0.4-4.5,1.1c-1.2,0.8-1.7,1.8-1.7,3c0,1.1,0.5,1.9,1.4,2.5
				s2.4,1,4.3,1.3l1.9,0.3c6,0.8,9,3.4,9,7.6c0,1.8-0.5,3.4-1.5,4.8c-1,1.4-2.4,2.4-4,3c-1.7,0.7-3.5,1-5.5,1c-2,0-4-0.3-6-1
				s-3.8-1.6-5.1-2.8l2.4-3.6c1,0.9,2.3,1.6,3.9,2.2c1.6,0.6,3.2,0.9,4.8,0.9c1.9,0,3.4-0.4,4.6-1.1c1.2-0.7,1.8-1.7,1.8-3
				c0-1.1-0.5-1.9-1.5-2.5c-1-0.6-2.6-1-4.7-1.3l-2.2-0.3c-0.9-0.1-1.7-0.3-2.5-0.5c-0.8-0.2-1.5-0.5-2.2-1
				c-0.7-0.4-1.3-0.9-1.9-1.4c-0.5-0.5-0.9-1.2-1.2-2.1c-0.3-0.8-0.5-1.7-0.5-2.7c0-1.8,0.5-3.4,1.5-4.7s2.3-2.3,4-3
				c1.6-0.7,3.5-1,5.5-1C219.4,21.2,222.8,22.2,225.8,24.2z"
            />
            <path
              className={"minioApplicationName"}
              d="M252.4,45.2v4.2h-20.3V21.6h20v4.2h-15.5v7.5h15v4.2h-15v7.7H252.4z"
            />
          </g>
        </g>
      </g>
    </LogoBase>
  );
};

export default Enterprise;
