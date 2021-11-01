"use strict";

// Require Node.js Dependencies
const { spawn } = require("child_process");

// Require Third-party Dependencies
const split = require("split2");

// CONSTANTS
const kProcessName = "powershell.exe";

/**
 * @function isPowershell
 * @description Known if the process parent id is powershell
 * @returns {Promise<boolean>}
 */
async function isPowershell() {
  if (process.platform !== "win32") {
    throw new Error("Cannot execute the method, process.platform must be win32!");
  }
  const ppid = process.ppid.toString();

  const cp = spawn("cmd", ["/c", "WMIC path win32_process get Name,Processid"]);
  const rStream = cp.stdout.pipe(split());

  for await (const line of rStream) {
    if (line.indexOf(ppid) !== -1 && line.indexOf(kProcessName) === 0) {
      return true;
    }
  }

  return false;
}

module.exports = isPowershell;
