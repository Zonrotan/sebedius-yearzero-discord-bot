module.exports = {
	name: 'rolltales',
	type: 'Tales From The Loop',
	description: 'Rolls dice for the *Tales From the Loop* roleplaying game.'
		+ '\nType `help roll` for more details.',
	aliases: ['rollt', 'rt', 'lancet', 'lancert', 'slåt', 'slat'],
	guildOnly: false,
	args: true,
	usage: '<dice> [arguments]',
	execute(args, message, client) {
		args.unshift('tales');
		client.commands.get('roll').execute(args, message, client);
	},
};