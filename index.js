// Require Node.js Dependencies
import { spawn } from "node:child_process";
import { createInterface } from "node:readline";

// CONSTANTS
const kProcessName = "powershell.exe";

/**
 * @function isPowershell
 * @description Known if the process parent id is powershell
 * @returns {Promise<boolean>}
 */
export async function isPowershell() {
  if (process.platform !== "win32") {
    return false;
  }
  const ppid = process.ppid.toString();

  const cp = spawn(
    ["cmd", "/c", "WMIC path win32_process get Name,Processid"].join(" "),
    {
      shell: true
    }
  );
  using rl = createInterface({ input: cp.stdout });

  for await (const line of rl) {
    if (
      line.indexOf(ppid) !== -1 &&
      line.indexOf(kProcessName) === 0
    ) {
      return true;
    }
  }

  return false;
}

export default isPowershell;
