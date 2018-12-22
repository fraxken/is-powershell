// Require Node.js Dependencies
const { spawn } = require("child_process");

/**
 * @generator
 * @func split
 * @param {!Buffer} buf buffer
 * @param {Number} [code] charCode
 * @returns {IterableIterator<Buffer>}
 */
function* split(buf, code = "\n".charCodeAt(0)) {
    let index;
    let offset = 0;
    while ((index = buf.indexOf(code, offset)) !== -1) {
        yield buf.slice(offset, index);
        offset = index + 1;
    }
    yield buf.slice(offset);
}

/**
 * @func isPowershell
 * @desc Known if the process parent id is powershell
 * @returns {Promise<Boolean>}
 */
function isPowershell() {
    return new Promise((resolve, reject) => {
        if (process.platform !== "win32") {
            return reject(new Error("Cannot execute the method, process.platform must be win32!"));
        }

        const ppid = Buffer.from(process.ppid.toString());
        const pname = Buffer.from("powershell.exe");

        const cp = spawn("cmd", ["/c", "WMIC path win32_process get Name,Processid"]);

        /** @type {Buffer[]} */
        const stdBuf = [];
        cp.stdout.on("data", (buf) => stdBuf.push(buf));

        cp.on("close", (code) => {
            if (code !== 0) {
                return reject(new Error(`Command terminated with error code ${code}`));
            }

            const lines = Buffer.concat(stdBuf);
            for (const buf of split(lines)) {
                if (buf.indexOf(ppid) !== -1 && buf.indexOf(pname) === 0) {
                    return resolve(true);
                }
            }

            return resolve(false);
        });

        return void 0;
    });
}

module.exports = isPowershell;
