class Pubber {
  constructor () {
    this.subs = {}
  }

  sub (evt, callback) {
    if (!this.subs[evt]) {
      this.subs[evt] = []
    }
    this.subs[evt].push(callback)
  }

  notify (evt, ...args) {
    const callbacks = this.subs[evt]
    if (!callbacks) return
    for (const callback of callbacks) {
      callback && callback.apply(this, args)
    }
  }
}