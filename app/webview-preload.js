import { webFrame } from 'electron'
import importWebAPIs from './lib/fg/import-web-apis'
import { setup as setupLocationbar } from './webview-preload/locationbar'
import { setup as setupNavigatorPermissions } from './webview-preload/navigator-permissions-api'
import babelBrowserBuild from 'browser-es-module-loader/dist/babel-browser-build'
import BrowserESModuleLoader from 'browser-es-module-loader/dist/browser-es-module-loader'

// setup APIs
importWebAPIs()
setupLocationbar()
setupNavigatorPermissions()
window.BrowserESModuleLoader = BrowserESModuleLoader
