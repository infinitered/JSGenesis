module.exports = (robot) => {
  // Your code here
  console.log('Yay, the app was loaded!')

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/

  // https://developer.github.com/webhooks/

  // Let's see what happens every time a project is created
  robot.on('project.created', async context => {
    // A new issue was opened, what should we do with it?
    robot.log(context)
  })


}
