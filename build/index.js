"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      MemberExpression: function MemberExpression(path) {
        var target = path.node;
        if (!!target.object && target.object.name === "process" && target.property.name === "env") {
          target.object.name = "window";
          target.property.name = "__GS_ENV_VARS__";
        }
      }
    }
  };
};