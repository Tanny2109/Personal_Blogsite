interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Tanmay SUTAR', // Site author
	title: 'My Blog website', // Site title.
	description:
		"Showing-off my alternate personalities here 🤴. Please don't read this blog before or after our first date. I am an introvert, I won't have anything to talk to you later on ....", // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 4 // Number of posts per page
}
