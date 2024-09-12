import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";

export default {
  extends: [
    js.configs.recommended,
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:react-refresh/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-hooks", "react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      { alphabetize: { order: "asc", caseInsensitive: true } },
    ],
    "import/no-unresolved": [
      "error",
      { ignore: ["^@components/", "^@styles/"] },
    ],
    "no-unused-vars": "warn",
    "import/no-dynamic-require": "warn",
    "import/no-nodejs-modules": "warn",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          "*", // restrict all imports
          "!@components/*", // allow imports from @components
          "!@styles/*", // allow imports from @styles
          "!react", // allow imports from react
          "!vite/*", // allow imports from vite
          "!path", // allow imports from path
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.app.json",
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
