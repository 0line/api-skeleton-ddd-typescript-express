/* eslint-disable camelcase */
const common = [
    "test/Context/**/*.feature",
    "--require-module ts-node/register", // Load TypeScript module
  ];
  
  const Users = [
    ...common,
    "--require test/Context/**/*.steps.ts",
  ].join(" ");

  module.exports = {
    Users,
  };
  