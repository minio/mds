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

const LoadBalancer: FC<SVGProps<any> & LogoBaseProps> = ({
  inverse,
  onClick,
}) => {
  return (
    <LogoBase viewBox="0 0 288.6 51" inverse={inverse} onClick={onClick}>
      <g>
        <path
          className={"minioApplicationName"}
          d="M1,50.5V24.1h4.8v22.4h11.6v4H1z"
        />
        <path
          className={"minioApplicationName"}
          d="M44.1,37.3c0,2.8-0.5,5.3-1.6,7.3s-2.5,3.6-4.3,4.6c-1.8,1.1-3.9,1.6-6.2,1.6c-2.3,0-4.4-0.5-6.2-1.6
		c-1.8-1.1-3.3-2.6-4.3-4.7c-1.1-2-1.6-4.5-1.6-7.3c0-2.8,0.5-5.3,1.6-7.3c1.1-2,2.5-3.6,4.3-4.6c1.8-1.1,3.9-1.6,6.2-1.6
		c2.3,0,4.4,0.5,6.2,1.6c1.8,1.1,3.3,2.6,4.3,4.6C43.6,32.1,44.1,34.5,44.1,37.3z M39.3,37.3c0-2-0.3-3.7-0.9-5.1
		c-0.6-1.4-1.5-2.4-2.6-3.1c-1.1-0.7-2.4-1.1-3.8-1.1c-1.4,0-2.7,0.4-3.8,1.1c-1.1,0.7-2,1.8-2.6,3.1c-0.6,1.4-0.9,3.1-0.9,5.1
		c0,2,0.3,3.7,0.9,5.1c0.6,1.4,1.5,2.4,2.6,3.1c1.1,0.7,2.4,1.1,3.8,1.1c1.4,0,2.7-0.4,3.8-1.1c1.1-0.7,2-1.8,2.6-3.1
		C39,41,39.3,39.3,39.3,37.3z"
        />
        <path
          className={"minioApplicationName"}
          d="M50.6,50.5h-5.1l9.3-26.4h5.9L70,50.5h-5.1l-7.1-21h-0.2L50.6,50.5z M50.8,40.2h13.9V44H50.8V40.2z"
        />
        <path
          className={"minioApplicationName"}
          d="M82.4,50.5h-8.9V24.1h9.1c2.6,0,4.9,0.5,6.8,1.6c1.9,1.1,3.3,2.6,4.4,4.5c1,2,1.5,4.3,1.5,7.1
		c0,2.8-0.5,5.1-1.5,7.1s-2.5,3.5-4.4,4.6C87.4,50,85.1,50.5,82.4,50.5L82.4,50.5z M78.3,46.4h3.9c1.8,0,3.4-0.3,4.6-1
		c1.2-0.7,2.2-1.7,2.8-3c0.6-1.3,0.9-3,0.9-5c0-2-0.3-3.7-0.9-5c-0.6-1.3-1.5-2.3-2.7-3c-1.2-0.7-2.7-1-4.5-1h-4.1L78.3,46.4
		L78.3,46.4z"
        />
        <path
          className={"minioApplicationName"}
          d="M100.7,50.5V24.1h8.9c1.7,0,3.2,0.3,4.3,0.9c1.1,0.6,2,1.4,2.6,2.5c0.6,1,0.9,2.2,0.9,3.5c0,1.1-0.2,2-0.6,2.8
		c-0.4,0.8-0.9,1.4-1.5,1.9c-0.6,0.5-1.3,0.8-2.1,1V37c0.9,0.1,1.7,0.4,2.5,0.9c0.8,0.5,1.5,1.3,2,2.2s0.8,2.1,0.8,3.5
		c0,1.3-0.3,2.5-0.9,3.6c-0.6,1-1.5,1.9-2.7,2.5c-1.2,0.6-2.8,0.9-4.7,0.9H100.7z M103.1,36.1h6.7c1,0,2-0.2,2.7-0.6
		c0.8-0.4,1.4-1,1.8-1.8c0.4-0.8,0.7-1.6,0.7-2.6c0-1.4-0.5-2.5-1.4-3.4c-0.9-0.9-2.3-1.3-4.1-1.3h-6.5V36.1z M103.1,48.4h7
		c2,0,3.5-0.5,4.5-1.4c1-0.9,1.5-2,1.5-3.4c0-1-0.2-1.9-0.7-2.7c-0.5-0.8-1.2-1.5-2-2c-0.9-0.5-1.9-0.7-3.1-0.7h-7.1V48.4z"
        />
        <path
          className={"minioApplicationName"}
          d="M124.2,50.5h-2.5l9.6-26.4h2.6l9.6,26.4H141l-8.3-23.3h-0.2L124.2,50.5z M126,40.4h13.1v2.2H126V40.4z"
        />
        <path
          className={"minioApplicationName"}
          d="M148,50.5V24.1h2.4v24.2H163v2.2H148z"
        />
        <path
          className={"minioApplicationName"}
          d="M170.1,50.5h-2.5l9.6-26.4h2.6l9.6,26.4h-2.5l-8.3-23.3h-0.2L170.1,50.5L170.1,50.5z M171.9,40.4H185v2.2
		h-13.1L171.9,40.4L171.9,40.4z"
        />
        <path
          className={"minioApplicationName"}
          d="M214.5,24.1v26.4h-2.3l-15.6-22.1h-0.2v22.1h-2.4V24.1h2.3l15.6,22.1h0.2V24.1
		C212.1,24.1,214.5,24.1,214.5,24.1z"
        />
        <path
          className={"minioApplicationName"}
          d="M242.1,32.4h-2.4c-0.2-0.9-0.5-1.7-1-2.5c-0.5-0.8-1.1-1.4-1.8-2c-0.7-0.6-1.5-1-2.4-1.3
		c-0.9-0.3-1.9-0.5-2.9-0.5c-1.7,0-3.2,0.4-4.6,1.3c-1.4,0.9-2.5,2.1-3.3,3.8c-0.8,1.7-1.2,3.7-1.2,6.2c0,2.4,0.4,4.5,1.2,6.2
		c0.8,1.7,1.9,2.9,3.3,3.8c1.4,0.9,2.9,1.3,4.6,1.3c1,0,2-0.2,2.9-0.5c0.9-0.3,1.7-0.8,2.4-1.3c0.7-0.6,1.3-1.2,1.8-2
		c0.5-0.8,0.8-1.6,1-2.5h2.4c-0.2,1.2-0.6,2.3-1.2,3.4c-0.6,1-1.3,2-2.2,2.7c-0.9,0.8-1.9,1.4-3.1,1.8c-1.2,0.4-2.5,0.7-3.9,0.7
		c-2.2,0-4.2-0.6-5.9-1.7c-1.7-1.1-3.1-2.7-4-4.7c-1-2-1.5-4.4-1.5-7.2s0.5-5.2,1.5-7.2c1-2,2.3-3.6,4-4.7c1.7-1.1,3.7-1.7,5.9-1.7
		c1.4,0,2.7,0.2,3.9,0.7c1.2,0.4,2.2,1,3.1,1.8c0.9,0.8,1.7,1.7,2.2,2.7C241.5,30,241.9,31.2,242.1,32.4z"
        />
        <path
          className={"minioApplicationName"}
          d="M247.8,50.5V24.1h15.3v2.2h-12.9v9.9h12.1v2.2h-12.1v10h13.2v2.2H247.8z"
        />
        <path
          className={"minioApplicationName"}
          d="M269.4,50.5V24.1h8.5c1.9,0,3.4,0.3,4.7,1c1.3,0.7,2.2,1.6,2.8,2.8c0.6,1.2,1,2.6,1,4.1c0,1.5-0.3,2.9-1,4.1
		c-0.6,1.2-1.6,2.1-2.8,2.8s-2.8,1-4.7,1h-7.3v-2.2h7.2c1.4,0,2.5-0.2,3.4-0.7c0.9-0.5,1.6-1.1,2-1.9c0.5-0.8,0.7-1.8,0.7-3
		c0-1.2-0.2-2.2-0.7-3c-0.5-0.9-1.1-1.5-2.1-2c-0.9-0.5-2.1-0.7-3.5-0.7h-6v24.2H269.4z M281,38.6l6.5,11.9h-2.8l-6.4-11.9H281z"
        />
        <rect
          x="22.3"
          y="0.4"
          className={"minioSection"}
          width="3.8"
          height="11.2"
        />
        <path
          className={"minioSection"}
          d="M17.7,0.5L9.9,5.2c-0.1,0.1-0.2,0.1-0.4,0L1.8,0.5C1.6,0.4,1.4,0.3,1.2,0.3h0c-0.6,0-1.1,0.5-1.1,1.1v10.2H4
		V6.7c0-0.3,0.3-0.5,0.6-0.3l4.4,2.7c0.4,0.3,1,0.3,1.4,0l4.6-2.7c0.3-0.1,0.6,0,0.6,0.3v4.9h3.8V1.4c0-0.6-0.5-1.1-1.1-1.1h0
		C18,0.3,17.8,0.4,17.7,0.5L17.7,0.5z"
        />
        <path
          className={"minioSection"}
          d="M45.2,0.4h-3.9v5.1c0,0.3-0.3,0.5-0.6,0.3L30.7,0.5c-0.2-0.1-0.3-0.1-0.5-0.1h0c-0.6,0-1.1,0.5-1.1,1.1v10.1
		H33V6.5c0-0.3,0.3-0.5,0.6-0.3l10.1,5.4c0.2,0.1,0.3,0.1,0.5,0.1l0,0c0.6,0,1.1-0.5,1.1-1.1L45.2,0.4L45.2,0.4L45.2,0.4z"
        />
        <path
          className={"minioSection"}
          d="M48.3,11.6V0.4h1.8v11.2L48.3,11.6L48.3,11.6z"
        />
        <path
          className={"minioSection"}
          d="M60.3,11.8c-4.7,0-8.1-2.2-8.1-5.9c0-3.6,3.4-5.9,8.1-5.9c4.7,0,8.1,2.2,8.1,5.9S65.1,11.8,60.3,11.8z
		 M60.3,1.6c-3.5,0-6.2,1.5-6.2,4.4c0,2.8,2.7,4.4,6.2,4.4c3.5,0,6.3-1.5,6.3-4.4C66.6,3.1,63.9,1.6,60.3,1.6L60.3,1.6z"
        />
      </g>
    </LogoBase>
  );
};

export default LoadBalancer;
