import { Theme } from "@emotion/react";
export declare const codeEditorStyles: (theme: Theme) => {
  [x: string]:
    | string
    | {
        gridTemplateColumns: string;
        marginBottom?: undefined;
        overflow?: undefined;
        border?: undefined;
        borderRadius?: undefined;
        "&.w-tc-editor"?: undefined;
        "& .w-tc-editor-text, .w-tc-editor-preview"?: undefined;
        "& .w-tc-editor-preview pre"?: undefined;
        "& .w-tc-editor-preview pre code"?: undefined;
        display?: undefined;
        alignItems?: undefined;
        background?: undefined;
        borderBottom?: undefined;
        padding?: undefined;
        paddingRight?: undefined;
        justifyContent?: undefined;
        "& button"?: undefined;
      }
    | {
        marginBottom: number;
        gridTemplateColumns?: undefined;
        overflow?: undefined;
        border?: undefined;
        borderRadius?: undefined;
        "&.w-tc-editor"?: undefined;
        "& .w-tc-editor-text, .w-tc-editor-preview"?: undefined;
        "& .w-tc-editor-preview pre"?: undefined;
        "& .w-tc-editor-preview pre code"?: undefined;
        display?: undefined;
        alignItems?: undefined;
        background?: undefined;
        borderBottom?: undefined;
        padding?: undefined;
        paddingRight?: undefined;
        justifyContent?: undefined;
        "& button"?: undefined;
      }
    | {
        overflow: string;
        border: string;
        borderRadius: number;
        gridTemplateColumns?: undefined;
        marginBottom?: undefined;
        "&.w-tc-editor"?: undefined;
        "& .w-tc-editor-text, .w-tc-editor-preview"?: undefined;
        "& .w-tc-editor-preview pre"?: undefined;
        "& .w-tc-editor-preview pre code"?: undefined;
        display?: undefined;
        alignItems?: undefined;
        background?: undefined;
        borderBottom?: undefined;
        padding?: undefined;
        paddingRight?: undefined;
        justifyContent?: undefined;
        "& button"?: undefined;
      }
    | {
        overflow: string;
        gridTemplateColumns?: undefined;
        marginBottom?: undefined;
        border?: undefined;
        borderRadius?: undefined;
        "&.w-tc-editor"?: undefined;
        "& .w-tc-editor-text, .w-tc-editor-preview"?: undefined;
        "& .w-tc-editor-preview pre"?: undefined;
        "& .w-tc-editor-preview pre code"?: undefined;
        display?: undefined;
        alignItems?: undefined;
        background?: undefined;
        borderBottom?: undefined;
        padding?: undefined;
        paddingRight?: undefined;
        justifyContent?: undefined;
        "& button"?: undefined;
      }
    | {
        "&.w-tc-editor": {
          fontSize: number;
          backgroundColor: string;
          color: string;
          fontFamily: string;
          '& code[class*="language-"] .token.cdata,\n      & pre[class*="language-"] .token.cdata,\n      & code[class*="language-"] .token.comment,\n      & pre[class*="language-"] .token.comment,\n      & code[class*="language-"] .token.doctype,\n      & pre[class*="language-"] .token.doctype,\n      & code[class*="language-"] .token.prolog,\n      & pre[class*="language-"] .token.prolog': {
            color: string;
          };
          '& code[class*="language-"] .token.punctuation,\n& pre[class*="language-"] .token.punctuation': {
            color: string;
          };
          '& code[class*="language-"] .namespace,\n& pre[class*="language-"] .namespace': {
            opacity: number;
          };
          '& code[class*="language-"] .token.boolean,\n& pre[class*="language-"] .token.boolean,\n& code[class*="language-"] .token.constant,\n& pre[class*="language-"] .token.constant,\n& code[class*="language-"] .token.deleted,\n& pre[class*="language-"] .token.deleted,\n& code[class*="language-"] .token.number,\n& pre[class*="language-"] .token.number,\n& code[class*="language-"] .token.symbol,\n& pre[class*="language-"] .token.symbol': {
            color: string;
          };
          '& code[class*="language-"] .token.builtin,\n& pre[class*="language-"] .token.builtin,\n& code[class*="language-"] .token.char,\n& pre[class*="language-"] .token.char,\n& code[class*="language-"] .token.inserted,\n& pre[class*="language-"] .token.inserted,\n& code[class*="language-"] .token.selector,\n& pre[class*="language-"] .token.selector,\n& code[class*="language-"] .token.string,\n& pre[class*="language-"] .token.string': {
            color: string;
          };
          '& code[class*="language-"] .style .token.string,\n& pre[class*="language-"] .style .token.string,\n& code[class*="language-"] .token.entity,\n& pre[class*="language-"] .token.entity,\n& code[class*="language-"] .token.property,\n& pre[class*="language-"] .token.property,\n& code[class*="language-"] .token.operator,\n& pre[class*="language-"] .token.operator,\n& code[class*="language-"] .token.url,\n& pre[class*="language-"] .token.url': {
            color: string;
          };
          '& code[class*="language-"] .token.atrule,\n& pre[class*="language-"] .token.atrule,\n& code[class*="language-"] .token.property-access .token.method,\n& pre[class*="language-"] .token.property-access .token.method,\n& code[class*="language-"] .token.keyword,\n& pre[class*="language-"] .token.keyword': {
            color: string;
          };
          '& code[class*="language-"] .token.function,\n& pre[class*="language-"] .token.function': {
            color: string;
          };
          '& code[class*="language-"] .token.important,\n& pre[class*="language-"] .token.important,\n& code[class*="language-"] .token.regex,\n& pre[class*="language-"] .token.regex,\n& code[class*="language-"] .token.variable,\n& pre[class*="language-"] .token.variable': {
            color: string;
          };
          '& code[class*="language-"] .token.bold,\n& pre[class*="language-"] .token.bold,\n& code[class*="language-"] .token.important,\n& pre[class*="language-"] .token.important': {
            color: string;
          };
          '& code[class*="language-"] .token.tag,\n& pre[class*="language-"] .token.tag': {
            color: string;
          };
          '& code[class*="language-"] .token.attr-value,\n& pre[class*="language-"] .token.attr-value,\n& code[class*="language-"] .token.attr-name,\n& pre[class*="language-"] .token.attr-name': {
            color: string;
          };
          '& code[class*="language-"] .token.selector .class,\n& pre[class*="language-"] .token.selector .class,\n& code[class*="language-"] .token.class-name,\n& pre[class*="language-"] .token.class-name': {
            color: string;
          };
        };
        "& .w-tc-editor-text, .w-tc-editor-preview": {
          minHeight: number;
          "& textarea, & *, & *::before, & *::after": {
            fontFamily: string;
          };
        };
        "& .w-tc-editor-preview pre": {
          margin: number;
          padding: number;
          whiteSpace: string;
          fontFamily: string;
          fontSize: string;
        };
        "& .w-tc-editor-preview pre code": {
          fontFamily: string;
        };
        gridTemplateColumns?: undefined;
        marginBottom?: undefined;
        overflow?: undefined;
        border?: undefined;
        borderRadius?: undefined;
        display?: undefined;
        alignItems?: undefined;
        background?: undefined;
        borderBottom?: undefined;
        padding?: undefined;
        paddingRight?: undefined;
        justifyContent?: undefined;
        "& button"?: undefined;
      }
    | {
        display: string;
        alignItems: string;
        background: string;
        borderBottom: string;
        padding: string;
        paddingRight: string;
        justifyContent: string;
        "& button": {
          height: string;
          width: string;
          padding: string;
          " .min-icon": {
            marginLeft: string;
          };
        };
        gridTemplateColumns?: undefined;
        marginBottom?: undefined;
        overflow?: undefined;
        border?: undefined;
        borderRadius?: undefined;
        "&.w-tc-editor"?: undefined;
        "& .w-tc-editor-text, .w-tc-editor-preview"?: undefined;
        "& .w-tc-editor-preview pre"?: undefined;
        "& .w-tc-editor-preview pre code"?: undefined;
      };
  display: string;
  "& .inputLabel": {
    marginBottom: number;
  };
  "& .editorWrapper": {
    overflow: string;
    border: string;
    borderRadius: number;
  };
  "& .editorContainer": {
    overflow: string;
  };
  "& .editor": {
    "&.w-tc-editor": {
      fontSize: number;
      backgroundColor: string;
      color: string;
      fontFamily: string;
      '& code[class*="language-"] .token.cdata,\n      & pre[class*="language-"] .token.cdata,\n      & code[class*="language-"] .token.comment,\n      & pre[class*="language-"] .token.comment,\n      & code[class*="language-"] .token.doctype,\n      & pre[class*="language-"] .token.doctype,\n      & code[class*="language-"] .token.prolog,\n      & pre[class*="language-"] .token.prolog': {
        color: string;
      };
      '& code[class*="language-"] .token.punctuation,\n& pre[class*="language-"] .token.punctuation': {
        color: string;
      };
      '& code[class*="language-"] .namespace,\n& pre[class*="language-"] .namespace': {
        opacity: number;
      };
      '& code[class*="language-"] .token.boolean,\n& pre[class*="language-"] .token.boolean,\n& code[class*="language-"] .token.constant,\n& pre[class*="language-"] .token.constant,\n& code[class*="language-"] .token.deleted,\n& pre[class*="language-"] .token.deleted,\n& code[class*="language-"] .token.number,\n& pre[class*="language-"] .token.number,\n& code[class*="language-"] .token.symbol,\n& pre[class*="language-"] .token.symbol': {
        color: string;
      };
      '& code[class*="language-"] .token.builtin,\n& pre[class*="language-"] .token.builtin,\n& code[class*="language-"] .token.char,\n& pre[class*="language-"] .token.char,\n& code[class*="language-"] .token.inserted,\n& pre[class*="language-"] .token.inserted,\n& code[class*="language-"] .token.selector,\n& pre[class*="language-"] .token.selector,\n& code[class*="language-"] .token.string,\n& pre[class*="language-"] .token.string': {
        color: string;
      };
      '& code[class*="language-"] .style .token.string,\n& pre[class*="language-"] .style .token.string,\n& code[class*="language-"] .token.entity,\n& pre[class*="language-"] .token.entity,\n& code[class*="language-"] .token.property,\n& pre[class*="language-"] .token.property,\n& code[class*="language-"] .token.operator,\n& pre[class*="language-"] .token.operator,\n& code[class*="language-"] .token.url,\n& pre[class*="language-"] .token.url': {
        color: string;
      };
      '& code[class*="language-"] .token.atrule,\n& pre[class*="language-"] .token.atrule,\n& code[class*="language-"] .token.property-access .token.method,\n& pre[class*="language-"] .token.property-access .token.method,\n& code[class*="language-"] .token.keyword,\n& pre[class*="language-"] .token.keyword': {
        color: string;
      };
      '& code[class*="language-"] .token.function,\n& pre[class*="language-"] .token.function': {
        color: string;
      };
      '& code[class*="language-"] .token.important,\n& pre[class*="language-"] .token.important,\n& code[class*="language-"] .token.regex,\n& pre[class*="language-"] .token.regex,\n& code[class*="language-"] .token.variable,\n& pre[class*="language-"] .token.variable': {
        color: string;
      };
      '& code[class*="language-"] .token.bold,\n& pre[class*="language-"] .token.bold,\n& code[class*="language-"] .token.important,\n& pre[class*="language-"] .token.important': {
        color: string;
      };
      '& code[class*="language-"] .token.tag,\n& pre[class*="language-"] .token.tag': {
        color: string;
      };
      '& code[class*="language-"] .token.attr-value,\n& pre[class*="language-"] .token.attr-value,\n& code[class*="language-"] .token.attr-name,\n& pre[class*="language-"] .token.attr-name': {
        color: string;
      };
      '& code[class*="language-"] .token.selector .class,\n& pre[class*="language-"] .token.selector .class,\n& code[class*="language-"] .token.class-name,\n& pre[class*="language-"] .token.class-name': {
        color: string;
      };
    };
    "& .w-tc-editor-text, .w-tc-editor-preview": {
      minHeight: number;
      "& textarea, & *, & *::before, & *::after": {
        fontFamily: string;
      };
    };
    "& .w-tc-editor-preview pre": {
      margin: number;
      padding: number;
      whiteSpace: string;
      fontFamily: string;
      fontSize: string;
    };
    "& .w-tc-editor-preview pre code": {
      fontFamily: string;
    };
  };
  "& .actionsContainer": {
    display: string;
    alignItems: string;
    background: string;
    borderBottom: string;
    padding: string;
    paddingRight: string;
    justifyContent: string;
    "& button": {
      height: string;
      width: string;
      padding: string;
      " .min-icon": {
        marginLeft: string;
      };
    };
  };
};
