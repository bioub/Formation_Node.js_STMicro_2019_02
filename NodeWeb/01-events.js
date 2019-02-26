const { EventEmitter } = require('events');

const events = new EventEmitter();

function createUser(user) {
  // TODO write user in database
  // setTimeout, setImmediate, process.nextTick
  // https://dzone.com/storage/temp/8202695-event-loop.png
  // https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
  process.nextTick(() => {
    events.emit('user.created', user);
  });
}

events.on('user.created', (user) => {
  console.log('USER CREATED', user);
});

createUser('Romain');
createUser('Jean');

// events.off('user.created', handleUserCreate);
events.removeAllListeners('user.created');

events.once('user.created', (user) => {
  console.log('USER CREATED once', user);
});
createUser('Toto');
createUser('Titi');

console.log('FIN');
