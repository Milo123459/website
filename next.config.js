module.exports = {
	productionBrowserSourceMaps: true,
	async rewrites() {
		return [
			{
				source: '/tuber_demo',
				destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			},
		];
	},
};
