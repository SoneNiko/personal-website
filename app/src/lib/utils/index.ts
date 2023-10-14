export function formatDate(date: string) {
	const d = new Date(date);
	return (
		d.toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		}) +
		' at ' +
		d.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric'
		})
	);
}

export type Social = {
	name:
		| 'bandsintown'
		| 'behance'
		| 'codepen'
		| 'discord'
		| 'dribbble'
		| 'dropbox'
		| 'email'
		| 'facebook'
		| 'foursquare'
		| 'github'
		| 'google'
		| 'google_play'
		| 'instagram'
		| 'itch.io'
		| 'itunes'
		| 'linkedin'
		| 'mailto'
		| 'medium'
		| 'meetup'
		| 'pinterest'
		| 'rdio'
		| 'reddit'
		| 'rss'
		| 'sharethis'
		| 'smugmug'
		| 'snapchat'
		| 'soundcloud'
		| 'spotify'
		| 'squarespace'
		| 'stackoverflow'
		| 'telegram'
		| 'tiktok'
		| 'tumblr'
		| 'twitch'
		| 'twitter'
		| 'upwork'
		| 'vevo'
		| 'vimeo'
		| 'vine'
		| 'vk'
		| 'vsco'
		| 'wechat'
		| 'whatsapp'
		| 'yelp'
		| 'youtube';
	url: string;
};
