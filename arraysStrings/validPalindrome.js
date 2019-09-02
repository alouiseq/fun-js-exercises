(function(s) {
   const re = /[^a-z0-9]/i
    // Remove non alphanumeric
    let stripped = s.split(re).join('')
    // Ignore cases
    stripped = stripped.toLowerCase()

    const reversed = [...stripped].reverse().join('')
    const normal = [...stripped].join('')
    if (normal === reversed) return true
    return false
})('race a car')