import { UsersApp } from './UsersApp';

try {
  void new UsersApp().start();
} catch (e) {
  console.error(e);
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.error('uncaughtException', err);
  process.exit(1);
});
