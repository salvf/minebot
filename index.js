const mineflayer = require('mineflayer')
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')

var AutoAuth = require('mineflayer-auto-auth')
const { pathfinder, Movements } = require('mineflayer-pathfinder')
const { GoalBlock } = require('mineflayer-pathfinder').goals

/*const bot = mineflayer.createBot({
        plugins: [AutoAuth],
        AutoAuth: {
            logging: true,
            password: '<pelon>',
            ignoreRepeat: true
        },
        host: 'play.nzcraft.net', // minecraft server ip
        username: 'misalchicha300', // minecraft username
        version: "1.18.2", // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
    })*/

    //5000 segundos = 500 pts extractor
    const bot = mineflayer.createBot({
        plugins: [AutoAuth],
        AutoAuth: {
            logging: true,
            password: '<pelon>',
            ignoreRepeat: true
        },
        host: 'omegalion8.aternos.me', // minecraft server ip
        username: 'Yomi_D', // minecraft username
        version: "1.18.2", // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
    })
const mcData = require('minecraft-data')(bot.version)
/*bot.loadPlugin(pathfinder)

bot.once('spawn', () => {
    mineflayerViewer(bot, { port: 3007, firstPerson: false }) // port is the minecraft server port, if first person is false, you get a bird's-eye view

    bot.on('path_update', (r) => {
        const nodesPerTick = (r.visitedNodes * 50 / r.time).toFixed(2)
        console.log(`I can get there in ${r.path.length} moves. Computation took ${r.time.toFixed(2)} ms (${nodesPerTick} nodes/tick). ${r.status}`)
        const path = [bot.entity.position.offset(0, 0.5, 0)]
        for (const node of r.path) {
            path.push({ x: node.x, y: node.y + 0.5, z: node.z })
        }
        bot.viewer.drawLine('path', path, 0xff00ff)
    })

    const defaultMove = new Movements(bot, mcData)

    bot.viewer.on('blockClicked', (block, face, button) => {
        if (button !== 2) return // only right click

        const p = block.position.offset(0, 1, 0)

        bot.pathfinder.setMovements(defaultMove)
        bot.pathfinder.setGoal(new GoalBlock(p.x, p.y, p.z))
    })
})

bot.on("login", function() {
    //console.log("Login to Kingdoms")
    setTimeout(() => {
        bot.setQuickBarSlot(0)
        bot.activateItem()
        setTimeout(() => {
            bot.clickWindow(12, 0, 0);
        }, 1000);
    }, 5000);

})
bot.on('windowOpen', function(windows) {
    console.log("Ventana:", windows.title.text)
        //console.table("Ventana:", windows.slots)
})

/*bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})*/
bot.on('message', msg => console.log(msg.toString()))

// Log errors and kick reasons:
bot.on('kicked', msg => console.log(msg.toString()))
bot.on('error', msg => console.log(msg.toString()))