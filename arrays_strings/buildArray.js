function makeArrayFromApply() {
  const data = Array.apply(null, {length: 10}).map(() => (
      Math.floor(Math.random() * 10))
  )
  console.log('Array from Array.apply', data)
}

function makeArrayFromFrom() {
  const data = Array.from({length: 10}, () => Math.floor(Math.random() * 10))
  console.log('Array from array.from function', data)
}

makeArrayFromApply()
makeArrayFromFrom()
