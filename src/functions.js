import { queue } from './queue.js'

function init (id) {
  queue.update(existing => [ ...existing, { type: 'init', params: [ id ] } ])
}

function trackSingle (id, event, data) {
  queue.update(existing => [ ...existing, { type: 'trackSingle', params: [ id, event, data ] } ])
}

function trackCustom (event, data) {
  queue.update(existing => [ ...existing, { type: 'trackCustom', params: [ event, data ] } ])
}

function track (event, data) {
  queue.update(existing => [ ...existing, { type: 'track', params: [ event, data ] } ])
}

export {
  init,
  trackSingle,
  trackCustom,
  track
}
