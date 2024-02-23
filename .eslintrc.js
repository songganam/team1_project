module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier", // Prettier와 충돌하는 ESLint 규칙을 비활성화
  ],
  parserOptions: {
    ecmaVersion: "latest", // 최신 ECMAScript 기능 사용
    sourceType: "module",
    // project: "**/tsconfig.json", // ES 모듈 사용
    ecmaFeatures: {
      jsx: true, // JSX 파싱 허용
    },
  },
  plugins: [
    "react", // 리액트 규칙 사용
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // React 17부터는 JSX에서 React를 import할 필요가 없음
    "react/prop-types": "off", // TypeScript를 사용하는 경우 prop-types를 사용할 필요가 없음
    "no-unused-vars": "off", // TypeScript에서 처리할 수 있으므로 ESLint에서 비활성화
    "react/jsx-no-target-blank": "off", // 이 규칙은 프로젝트 요구사항에 따라 다를 수 있음
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // TypeScript 파일에만 적용됩니다.
      parser: "@typescript-eslint/parser", // TypeScript 파싱
      plugins: ["@typescript-eslint"], // TypeScript 규칙 사용
      extends: [
        "plugin:@typescript-eslint/recommended", // TypeScript 권장 규칙
      ],
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off", // 변수가 할당되었지만 사용되지 않았다는 TypeScript 경고를 비활성화
        "@typescript-eslint/no-explicit-any": ["off"],
      },
    },
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  settings: {
    react: {
      version: "detect", // React 버전 자동 감지
    },
  },
};
