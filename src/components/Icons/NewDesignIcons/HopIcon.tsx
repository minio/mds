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

const HopIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.858335 9.97525C0.343737 8.17529 0.453477 5.77683 2.34183 3.33183L1.50696 2.49696C1.39756 2.38897 1.31057 2.2604 1.25101 2.11865C1.19088 1.97556 1.15991 1.82191 1.15991 1.6667C1.15991 1.51148 1.19088 1.35783 1.25101 1.21474C1.31114 1.07164 1.39922 0.941988 1.51008 0.833362C1.78622 0.562799 2.22942 0.567322 2.49998 0.843464C2.71276 1.06063 2.75541 1.38112 2.6296 1.6397L3.30123 2.31133C4.18837 1.57022 5.45966 0.91181 6.91816 0.685198C8.73042 0.403622 10.8177 0.792508 12.7758 2.47434C13.1298 2.77843 13.1879 3.30629 12.9204 3.67406C13.6156 4.49894 14.2175 5.39893 14.7148 6.35772C14.7203 6.36833 14.7255 6.37909 14.7305 6.38997C14.8134 6.57213 14.8507 6.77173 14.8393 6.97154C14.8278 7.17136 14.7679 7.36538 14.6647 7.53687C14.6404 7.57734 14.6138 7.61626 14.5851 7.65348C14.9074 8.41207 15.1495 9.20287 15.3071 10.013L15.3098 10.0264C15.3388 10.1931 15.3326 10.364 15.2916 10.5282C15.2507 10.6924 15.1759 10.8462 15.0721 10.9797C15.02 11.0466 14.9612 11.1077 14.8968 11.1621C15.1499 12.0752 15.2984 13.0147 15.3391 13.9627C15.3501 14.1445 15.3228 14.3265 15.259 14.4971C15.1938 14.6712 15.0921 14.8293 14.9607 14.9607C14.8293 15.0921 14.6712 15.1938 14.4971 15.259C14.3244 15.3236 14.1399 15.3508 13.9559 15.3386C13.2892 15.2993 12.1949 15.1945 11.1576 14.9021C11.1043 14.9645 11.0448 15.0214 10.9797 15.0721C10.8462 15.1759 10.6924 15.2507 10.5282 15.2916C10.364 15.3325 10.1931 15.3387 10.0265 15.3096L10.0129 15.3073C9.20283 15.1496 8.41205 14.9074 7.65345 14.5851C7.61624 14.6137 7.57733 14.6403 7.53687 14.6647C7.36538 14.7679 7.17136 14.8278 6.97154 14.8392C6.77173 14.8507 6.57213 14.8133 6.38997 14.7304C6.37909 14.7255 6.36833 14.7202 6.35772 14.7147C5.42924 14.2332 4.5559 13.6535 3.7525 12.986C3.50401 13.1201 3.25551 13.0952 3.10183 13.0564C2.93967 13.0154 2.79682 12.9392 2.68229 12.8641C2.45009 12.712 2.21777 12.4871 2.00329 12.2257C1.56906 11.6965 1.12853 10.9203 0.858335 9.97525ZM2.2044 9.59041C1.78016 8.10649 1.85335 6.00831 3.78534 3.77793C3.79888 3.76418 3.81175 3.75001 3.82393 3.73546C4.48917 3.03545 5.69592 2.2919 7.13311 2.0686C8.3957 1.87243 9.84724 2.07473 11.2942 3.09238C10.5627 3.44661 9.86856 3.53087 9.28869 3.53826C9.02925 3.54156 8.82413 3.53095 8.62555 3.52068C8.51611 3.51502 8.40861 3.50946 8.29514 3.50639C8.16281 3.50281 7.98904 3.5019 7.82705 3.5334C7.68227 3.56155 7.34289 3.65507 7.17211 4.0121C7.06515 4.23569 7.07335 4.46785 7.08108 4.58372C7.09059 4.72629 7.11686 4.87813 7.14444 5.01647C7.16894 5.13934 7.19908 5.27346 7.22858 5.40473L7.24146 5.46208C7.27584 5.61545 7.30976 5.76928 7.33948 5.92432C7.40006 6.24043 7.43573 6.52565 7.42601 6.76344C7.41613 7.00513 7.36238 7.12024 7.31975 7.172C7.22343 7.28894 6.98864 7.40827 6.51688 7.41298C6.06914 7.41745 5.55172 7.3141 5.10771 7.17051C4.43752 6.95376 3.64176 7.40027 3.60163 8.19057C3.56379 8.93554 3.48507 9.85325 3.35162 10.6164C3.29559 10.9368 3.23272 11.2131 3.16517 11.4308C3.1396 11.4021 3.11303 11.3711 3.0856 11.3377C2.77305 10.9567 2.42212 10.3519 2.2044 9.59041ZM4.51647 11.7991C5.20656 12.3878 5.95572 12.9038 6.75208 13.3387C6.81497 12.056 6.53616 10.4436 5.89501 8.77535C5.5777 8.73665 5.26649 8.67121 4.981 8.5932C4.93648 9.30318 4.8576 10.1318 4.73069 10.8575C4.67303 11.1873 4.60294 11.5107 4.51647 11.7991ZM7.36102 8.70552C7.53784 9.20763 7.68617 9.70808 7.80517 10.2006C8.73751 10.466 9.86243 10.5706 10.6096 10.6096L10.6062 10.5478C10.5946 10.4885 10.5905 10.427 10.5949 10.3647C10.546 9.6322 10.4343 8.64031 10.2 7.80754C9.72037 7.69157 9.23334 7.54737 8.74476 7.3754C8.68177 7.61237 8.57519 7.84984 8.40038 8.06208C8.11719 8.4059 7.74467 8.6009 7.36102 8.70552ZM8.08079 11.7081C8.14706 12.2539 8.17248 12.7803 8.15577 13.2772C8.76911 13.5413 9.40664 13.7457 10.0595 13.8874C10.0754 13.2514 9.95597 12.5144 9.84217 11.9594C9.31384 11.9131 8.69309 11.8364 8.08079 11.7081ZM3.00099 11.816L3.00251 11.8142C3.00151 11.8155 3.001 11.8161 3.00099 11.816ZM11.7284 4.43416C10.826 4.83411 9.97951 4.92957 9.30653 4.93815C9.03771 4.94157 8.76709 4.92981 8.55473 4.91939C8.56693 4.97494 8.58012 5.03368 8.5942 5.09634L8.60754 5.15581C8.6422 5.31039 8.68029 5.48258 8.71445 5.66078C8.72838 5.7335 8.74199 5.80878 8.75467 5.88602C9.47533 6.16731 10.1871 6.37899 10.8671 6.52363C10.8827 6.52636 10.8981 6.52961 10.9134 6.53338C11.7924 6.71681 12.6174 6.78785 13.3388 6.75214C12.8865 5.92398 12.3465 5.14688 11.7284 4.43416ZM11.7061 8.0822C11.8335 8.69291 11.9113 9.31372 11.9585 9.84257C12.5166 9.95638 13.2524 10.0754 13.8875 10.0596L13.8896 10.0696C13.9165 10.0637 13.9434 10.0594 13.9702 10.0567C13.9428 10.0579 13.9152 10.0589 13.8875 10.0596C13.7457 9.40669 13.5413 8.76919 13.2773 8.15589C12.7798 8.17289 12.2527 8.14807 11.7061 8.0822ZM8.47742 4.46069C8.47762 4.4609 8.47771 4.46504 8.47712 4.47246C8.47693 4.46419 8.47723 4.46048 8.47742 4.46069ZM11.2563 11.8918C11.5355 11.7615 11.7613 11.5359 11.8917 11.2567C12.3642 11.3466 12.9486 11.4348 13.5251 11.4559C13.7555 12.2635 13.8935 13.0951 13.9362 13.9347C13.2733 13.891 12.3129 13.7839 11.4561 13.5314C11.4355 12.9523 11.3467 12.3652 11.2563 11.8918ZM14.62 10.1467L14.4432 10.1811L14.4391 10.1782L14.62 10.1467ZM14.0983 10.0488C14.0883 10.0497 14.0785 10.0513 14.0689 10.0538C14.0581 10.0533 14.0473 10.0531 14.0365 10.0532C14.0572 10.0519 14.0778 10.0504 14.0983 10.0488Z"
      fill="currentColor"
    />
  </svg>
);
export default HopIcon;