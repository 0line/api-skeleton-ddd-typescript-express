/* eslint-disable camelcase */
const common = [
    "--require-module ts-node/register", // Load TypeScript module
  ];
  
  const Users = [
    ...common,
    "test/Context/Server/Infraestructure/Controllers/Status/*.feature",
    "--require test/Context/Server/Infraestructure/Controllers/Status/*.steps.ts",
  ].join(" ");
  
  module.exports = {
    Users,
  };
  