import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import { Bot, InlineKeyboard, InputFile } from 'grammy';
const imagePath = './assets/start-img.jpg';
console.log(imagePath);

const img = path.dirname('assets');

dotenv.config();
const bot = new Bot(process.env.TG_ACCESS_KEY);

await bot.api.setMyCommands([
	{ command: 'start', description: 'Start the bot' },
	{ command: 'help', description: 'Show help text' },
	{ command: 'settings', description: 'Open settings' },
]);

bot.command('start', async (ctx) => {
	const chatId = ctx.chat.id;

	await ctx.replyWithPhoto(
		'https://ih1.redbubble.net/image.1643761535.3590/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp',
		{
			caption: `Hello! @${ctx.chat.username} Welcome to the game! Click the button below to start playing:`,
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: `Start Mini App`, // Button text
							web_app: { url: `https://tg-test-beta.vercel.app/` }, // Replace with your frontend URL (hosted)
						},
					],
				],
			},
		}
	);
});
console.log('started');
bot.start();
