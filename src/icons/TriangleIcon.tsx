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

const TriangleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.98508 1.57374C7.29376 1.39595 7.64372 1.30237 7.99994 1.30237C8.35616 1.30237 8.70613 1.39595 9.01481 1.57374C9.32348 1.75154 9.58004 2.0073 9.75878 2.31543L9.76106 2.31937L15.0928 11.65C15.0931 11.6505 15.0934 11.651 15.0937 11.6515C15.2715 11.9601 15.3652 12.31 15.3652 12.6662C15.3653 13.0229 15.2716 13.3734 15.0933 13.6824C14.9151 13.9915 14.6587 14.2482 14.3499 14.4268C14.0411 14.6054 13.6907 14.6996 13.334 14.7H2.66661C2.30986 14.6996 1.95877 14.6054 1.64996 14.4268C1.34114 14.2482 1.08475 13.9915 0.906537 13.6824C0.728322 13.3734 0.634552 13.0229 0.634644 12.6662C0.634735 12.31 0.728373 11.9601 0.90617 11.6515C0.906466 11.651 0.906763 11.6505 0.907059 11.65L6.2411 2.31542C6.41984 2.0073 6.6764 1.75154 6.98508 1.57374ZM7.99994 2.70237C7.88899 2.70237 7.77998 2.73152 7.68384 2.78689C7.58823 2.84196 7.50868 2.92105 7.45305 3.0163L2.12105 12.3473L2.11949 12.35C2.06394 12.4462 2.03467 12.5554 2.03464 12.6665C2.03462 12.7776 2.06382 12.8868 2.11933 12.9831C2.17484 13.0793 2.2547 13.1593 2.35089 13.2149C2.44708 13.2705 2.55621 13.2999 2.66733 13.3H13.3326C13.4437 13.2999 13.5528 13.2705 13.649 13.2149C13.7452 13.1593 13.825 13.0793 13.8806 12.9831C13.9361 12.8868 13.9653 12.7776 13.9652 12.6665C13.9652 12.5554 13.936 12.4462 13.8804 12.35L13.8788 12.3473L8.54684 3.0163C8.49121 2.92105 8.41165 2.84196 8.31605 2.78689C8.2199 2.73152 8.1109 2.70237 7.99994 2.70237Z"
      fill="currentColor"
    />
  </svg>
);
export default TriangleIcon;
