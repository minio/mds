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

import React, { FC, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { getGPUTier } from "detect-gpu";

import ApplicationLogo from "../ApplicationLogo";
import Box from "../Box";
import { customLoginStyles } from "./LoginWrapper.styles";
import { LoginWrapperProps } from "./LoginWrapper.types";

const bgVideo = require("../assets/video/videoBG.mp4");
const poster = require("../assets/background/loginAnimationPoster.png");

const LoginWrapper: FC<LoginWrapperProps> = ({
  logoProps,
  form,
  formFooter,
  promoInfo,
  promoHeader,
  backgroundAnimation = true,
}) => {
  const theme = useTheme();

  const loginWrapperStyles = customLoginStyles(theme);

  const [GPUAvailable, setGPUAvailable] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const gpuTier = await getGPUTier();

      setGPUAvailable(!!gpuTier.gpu && gpuTier.tier >= 2);
      return;
    })();
  }, []);

  return (
    <div css={loginWrapperStyles}>
      <Box className={"mainContainer"}>
        {(promoInfo || promoHeader) && (
          <Box className={"promoContainer"}>
            <Box className={"promoHeader"}>{promoHeader}</Box>
            <Box className={"promoInfo"}>{promoInfo}</Box>
          </Box>
        )}
        <Box className={"loginForm"}>
          <Box className={"logoContainer"}>
            <ApplicationLogo {...logoProps} />
          </Box>
          <Box className={"formContainer"}>
            <Box className={"form"}>{form}</Box>
            {formFooter && <Box className={"footer"}>{formFooter}</Box>}
          </Box>
        </Box>
      </Box>
      <Box className={"videoContainer"}>
        {GPUAvailable && backgroundAnimation ? (
          <video
            autoPlay
            playsInline
            muted
            loop
            disablePictureInPicture
            poster={poster}
            className={"videoBG"}
          >
            <source src={bgVideo} type={"video/mp4"} />
          </video>
        ) : (
          <img src={poster} className={"videoBG"} />
        )}
      </Box>
    </div>
  );
};

export default LoginWrapper;
