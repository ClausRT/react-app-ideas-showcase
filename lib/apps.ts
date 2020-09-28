import path from 'path'
import fs from 'fs'

const APPS_FOLDER = path.join(process.cwd, 'pages', 'apps')

type MetaObject = {
  title: string
  from?: string
  tier: string
  href: string
}

async function getAppMeta({
  appPath,
  appName
}: {
  appPath: string
  appName: string
}): Promise<MetaObject> {
  const meta = (await import(appPath)).META
  const urlPath = '/apps/' + 'tier-' + meta.tier + '/' + appName

  return {
    href: urlPath,
    ...(meta as { title: string; from?: string; tier: string })
  }
}

export function getAllAppsMeta(): MetaObject[] {
  let apps = []

  for (let index = 1; index <= 3; index++) {
    const appPath = path.join(APPS_FOLDER, 'tier-' + index)
    const names = fs.readdirSync(appPath)
    const nameAndPath = names.map((name) => {
      return { appPath: path.join(appPath, name), appName: name }
    })
    apps = [].concat(apps, nameAndPath)
  }

  return apps.map((app) => getAppMeta(app))
}
