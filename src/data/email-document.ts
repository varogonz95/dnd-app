export interface EmailDocument {
	to?: string | string[]
	toUids?: string[]
	message: {
		subject: string
		html: string
	}
}