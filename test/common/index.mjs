import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const common = require('./index.js');

const {
  allowGlobals,
  buildType,
  canCreateSymLink,
  childShouldThrowAndAbort,
  enoughTestMem,
  escapePOSIXShell,
  expectsError,
  expectWarning,
  getArrayBufferViews,
  getBufferSources,
  getTTYfd,
  hasCrypto,
  hasSQLite,
  hasIntl,
  hasIPv6,
  isAIX,
  isAlive,
  isFreeBSD,
  isIBMi,
  isInsideDirWithUnusualChars,
  isLinux,
  isOpenBSD,
  isMacOS,
  isSunOS,
  isWindows,
  localIPv6Hosts,
  mustCall,
  mustCallAtLeast,
  mustNotCall,
  mustNotMutateObjectDeep,
  mustSucceed,
  nodeProcessAborted,
  parseTestFlags,
  PIPE,
  platformTimeout,
  printSkipMessage,
  runWithInvalidFD,
  skip,
  skipIf32Bits,
  skipIfEslintMissing,
  skipIfInspectorDisabled,
  skipIfSQLiteMissing,
  spawnPromisified,
} = common;

const getPort = () => common.PORT;

export {
  allowGlobals,
  buildType,
  canCreateSymLink,
  childShouldThrowAndAbort,
  createRequire,
  enoughTestMem,
  escapePOSIXShell,
  expectsError,
  expectWarning,
  getArrayBufferViews,
  getBufferSources,
  getPort,
  getTTYfd,
  hasCrypto,
  hasSQLite,
  hasIntl,
  hasIPv6,
  isAIX,
  isAlive,
  isFreeBSD,
  isIBMi,
  isInsideDirWithUnusualChars,
  isLinux,
  isOpenBSD,
  isMacOS,
  isSunOS,
  isWindows,
  localIPv6Hosts,
  mustCall,
  mustCallAtLeast,
  mustNotCall,
  mustNotMutateObjectDeep,
  mustSucceed,
  nodeProcessAborted,
  parseTestFlags,
  PIPE,
  platformTimeout,
  printSkipMessage,
  runWithInvalidFD,
  skip,
  skipIf32Bits,
  skipIfEslintMissing,
  skipIfInspectorDisabled,
  skipIfSQLiteMissing,
  spawnPromisified,
};
