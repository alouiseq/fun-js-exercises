// Q: Implement your own promise to get the following promise to resolve

class MyPromise {
  constructor(callback) {
    this.queue = [];
    this.state = 'pending';   // ['pending', 'fullfilled', 'rejected']
    this.value = '';

    this.resolve = successMsg => {
      this.state = 'fullfilled';
      this.value = successMsg;
      this.runQueueSubscriber();
    }

    callback(this.resolve);
  }

  runQueueSubscriber() {
    const nextRun = this.queue.shift();
    if (this.state === 'fullfilled' || this.state === 'rejected')  {
      nextRun(this.value);
      this.state = 'pending';
      this.value = '';
    }
  }

  then(fn) {
    if (this.state === 'fullfilled') {
      fn(this.value);
    } else {
      this.queue.push(fn);
    }
    return this;
  }
}

const promise = new MyPromise(resolve => {
  setTimeout(() => resolve('success'), 1000);
});

promise
  .then(res => setTimeout(() => {
    console.log(res);
    promise.resolve(res + ' again');
  }, 1000))
  .then(res => console.log(res));
