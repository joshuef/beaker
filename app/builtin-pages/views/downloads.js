/*
This uses the beakerDownloads API, which is exposed by webview-preload to all sites loaded over the beaker: protocol
*/

import * as yo from 'yo-yo'
import co from 'co'
import DownloadsList from '../model/downloads-list'
import { render as renderDownloadsList } from '../com/downloads-list'

// globals
// =

var isViewActive = false
var downloadsList

// exported API
// =

export function setup () {
}

export function show () {
  isViewActive = true
  document.title = 'Downloads'
  co(function* () {
    // fetch downloads
    downloadsList = new DownloadsList()
    yield downloadsList.setup()
    downloadsList.on('changed', render)

    // render
    render()
  })
}

export function hide () {
  isViewActive = false
  downloadsList.destroy()
  downloadsList = null
}

// rendering
// =

function render () {
  if (!isViewActive) {
    return
  }

  yo.update(document.querySelector('#el-content'), yo`<div class="pane" id="el-content">
    <div class="downloads">
      <div class="ll-heading">
        File Downloads
        <small class="ll-heading-right">
          <a href="https://github.com/joshuef/beaker" title="Get Help"><span class="icon icon-lifebuoy"></span> Help</a>
        </small>
      </div>
      ${renderDownloadsList(downloadsList)}
    </div>
  </div>`)
}
