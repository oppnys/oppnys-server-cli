// @ts-nocheck

import download from "download-git-repo"

export function downloadRepo(url: string, project): Promise<Boolean> {
    return new Promise((resolve, reject) => {
        download(url, project, { clone: true }, (err: any)=>{
            if (!!err){
                reject(false)
            }
            resolve(true)
        })
    })
}