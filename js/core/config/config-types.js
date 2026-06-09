// =====================================
// RIGO AI
// CONFIG TYPES
// =====================================

export const CONFIG_SOURCES =
Object.freeze({

  DEFAULT:
  "default",

  LOCAL:
  "local",

  REMOTE:
  "remote",

  RUNTIME:
  "runtime"

});



export const CONFIG_STATES =
Object.freeze({

  UNLOADED:
  "unloaded",

  LOADED:
  "loaded",

  FAILED:
  "failed"

});



export default
Object.freeze({

  SOURCES:
  CONFIG_SOURCES,

  STATES:
  CONFIG_STATES

});
