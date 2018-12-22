// Require Third-party Dependencies
const fp = require("find-process");

/**
 * @async
 * @func isPowershell
 * @desc Known if the process parent id is powershell
 * @returns {Boolean}
 */
async function isPowershell() {
    const result = await fp("pid", process.ppid);
    if (result.length === 0) {
        return false;
    }

    return result[0].name === "powershell.exe";
}

module.exports = isPowershell;
