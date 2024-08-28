/* eslint-disable @typescript-eslint/no-require-imports */

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
import { getGPUTier } from "detect-gpu";
import get from "lodash/get";
import styled from "styled-components";

import { lightV2 } from "../../global/themes";
import { breakPoints } from "../../global/utils";
import ApplicationLogo from "../ApplicationLogo/ApplicationLogo";
import Box from "../Box/Box";
import { LoginWrapperProps } from "./LoginWrapper.types";

const bgVideo = require("../assets/video/videoBG.mp4");
const poster = require("../assets/background/loginAnimationPoster.png");

const CustomLogin = styled.div(({ theme }) => {
  return {
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundColor: get(theme, "login.promoBG", "#000110"),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    "& .mainContainer": {
      width: "100%",
      maxWidth: 1120,
      display: "flex",
      justifyContent: "space-between",
      marginRight: 120,
      paddingLeft: 30,
      gap: 30,
      zIndex: 500,
      "& .promoContainer": {
        width: "100%",
        maxWidth: "580px",
        "& .promoHeader": {
          color: get(theme, "login.promoHeader", lightV2.white),
          fontSize: "44px",
          textAlign: "left",
          fontWeight: "700",
          lineHeight: "49px",
          letterSpacing: "0.16px",
        },
        "& .promoInfo": {
          marginTop: "31px",
          maxWidth: "542px",
          color: get(theme, "login.promoText", lightV2.white),
          fontSize: "14px",
          textAlign: "left",
          fontWeight: 400,
          lineHeight: "20px",
          letterSpacing: "0.16px",
          textShadow: "0 0 5ppx #000",
          "& a": {
            color: get(theme, "login.promoText", lightV2.white),
            textDecoration: "none",
            fontWeight: "bold",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        },
      },
      "& .loginForm": {
        backgroundColor: get(theme, "login.formBF", lightV2.white),
        width: 405,
        minHeight: 540,
        borderRadius: 16,
        border: `1px solid ${get(theme, "login.formBorder", lightV2.disabledGrey)}`,
        boxShadow: get(theme, "login.formShadow", "none"),
        boxSizing: "border-box",
        padding: "48px 46px",
        "& .logoContainer": {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: 40,
          "& svg": {
            width: "100%",
            maxWidth: 250,
          },
        },
        "& .footer": {
          display: "flex",
          padding: "35px 0",
          textAlign: "center",
          alignItems: "flex-end",
          justifyContent: "center",
          color: get(theme, "login.footerElements", "#000"),
          fontSize: "14px",
          textDecoration: "none",
        },
      },
      [`@media (max-width: ${get(breakPoints, "md", 0)}px)`]: {
        marginRight: "initial",
        maxWidth: "initial",
        paddingLeft: 0,
        "& .promoContainer": {
          display: "none",
          marginRight: 0,
          maxWidth: "initial",
          width: "100%",
        },
        "& .loginForm": {
          width: "100%",
          height: "100vh",
          borderRadius: 0,
        },
      },
    },
    "& .videoContainer": {
      position: "absolute",
      width: "100%",
      height: "auto",
      minHeight: 200,
      bottom: "0",
      right: 0,
      filter: get(theme, "login.bgFilter", "none"),
      transform: "rotateY(180deg)",

      "& .videoBG": {
        width: "100%",
        height: "auto",
        minHeight: 200,
        position: "absolute",
        bottom: -200,
        right: 0,
        filter: get(theme, "login.bgFilter", "none"),
        "&:before": {
          position: "absolute",
          width: "100%",
          height: 60,
          display: "block",
          content: "' '",
          background:
            "linear-gradient(to bottom, rgba(0,1,16,1) 0%,rgba(0,0,0,0.02) 100%)",
          top: 0,
        },
        "&:after": {
          position: "absolute",
          width: 120,
          height: "100%",
          display: "block",
          content: "' '",
          background:
            "linear-gradient(to right, rgba(0,1,16,1) 0%,rgba(0,0,0,0.02) 100%)",
          top: 0,
        },
        "& .videoBG": {
          width: "100%",
        },
      },
      [`@media (max-width: ${get(breakPoints, "md", 0)}px)`]: {
        display: "none",
      },
    },
  };
});

const LoginWrapper: FC<LoginWrapperProps> = ({
  logoProps,
  form,
  formFooter,
  promoInfo,
  promoHeader,
  backgroundAnimation = true,
}) => {
  const [GPUAvailable, setGPUAvailable] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const gpuTier = await getGPUTier();

      setGPUAvailable(!!gpuTier.gpu && gpuTier.tier >= 2);
      return;
    })();
  }, []);

  return (
    <CustomLogin>
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
    </CustomLogin>
  );
};

export default LoginWrapper;
