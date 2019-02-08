


function getUser(cb) {
  if (cb == undefined) {
    return
  }
  cb({
    firstname: 'Raj',
    lastname: 'Patel'
  })
}
module.exports = {
  getUser
}