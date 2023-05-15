// @ts-nocheck
import {spawn} from 'child_process'

export function commandSpawn(...args){
    return new Promise((resolve, reject) => {
        // @ts-ignore
        const childProcess = spawn(...args)
        childProcess.stdout.pipe(process.stdout)
        childProcess.stderr.pipe(process.stdout)
        childProcess.on('close',()=>{
            resolve()
        })
        childProcess.on('error', (error)=>{
            reject(error)
        })
    })
}