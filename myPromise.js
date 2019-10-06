// Q: Implement your own promise to get the following promise to resolve

class MyPromise {
  constructor(cb) {
    this.status = '';
    this.queue = [];
    this.resolve = (msg) => {
      this.status = msg;
      this.runSuccessfulSubscriber();
    }
    cb(this.resolve);
  }

  runSuccessfulSubscriber () {
    const next = this.queue.shift();
    if (next && this.status) {
      next(this.status);
      this.status = '';
    }
  }

  then (cb) {
    if (this.status) {
      cb(this.status);
    } else {
      this.queue.push(cb);
    }
    return this;
  }
}

const promise = new MyPromise(resolve => {
  setTimeout(() => resolve('success'), 1000);
});

promise
  .then(res => {
    console.log(res);
    setTimeout(() => {
      promise.resolve(res + ' again');
    }, 500);
  })
  .then(res => console.log(res));
