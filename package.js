Package.describe({
  name: "planable:mongo-collection-instances",
  summary: "Access your Mongo instances",
  version: "0.3.6",
  git: "https://github.com/Planable/mongo-collection-instances.git",
});

Package.onUse(function (api) {
  api.versionsFrom("2.3");
  api.use(["mongo", "underscore", "planable:collection-extensions@0.2.3"]);
  api.addFiles("mongo-instances.js");
});

Package.onTest(function (api) {
  api.use([
    "tinytest",
    "accounts-base",
    "mongo",
    "planable:mongo-collection-instances",
  ]);
  api.addFiles("mongo-instances-tests.js");
});
