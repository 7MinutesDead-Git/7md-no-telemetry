import psList, { ProcessDescriptor } from 'ps-list'
import * as child_process from 'child_process'


async function wait(ms: number): Promise<Function> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function findProcess(): Promise<void> {
    // "Microsoft Compatibility Telemetry"
    let targets = ['telemetry', 'wsqmcons', 'dmwappushservice']
    const pidsToKill: ProcessDescriptor[] = []

    for (const task of await psList()) {
        for (const target of targets) {
            if (task.name.toLowerCase().includes(target)) {
                console.log("Found", task)
                pidsToKill.push(task)
            }
        }
    }

    while (pidsToKill.length > 0) {
        const task = pidsToKill.pop()
        if (task) {
            console.log(`Killing`, task)
            // pid: Specifies the process ID of the process to be terminated
            // f: Specifies that processes be forcefully ended.
            // t: Terminates the specified process and any child processes started by it.
            child_process.exec(`taskkill /pid ${task.pid} /f /t`)
        }
    }

    if (pidsToKill.length !== 0) {
        console.error("Still a process in array!")
        console.error(pidsToKill)
    }
}

async function loop(): Promise<never> {
    let laps = 0
    console.log("Watching for telemetry..")

    while (true) {
        await findProcess()
        await wait(1000)

        if (laps > 1800) {
            console.log(`🦩Still watching as of ${new Date().toLocaleTimeString()}🦩`)
            laps = 0
        }
        laps++
    }
}


await loop()