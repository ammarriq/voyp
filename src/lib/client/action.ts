export const clickOutside = (node: HTMLElement, handler: () => void) => {
	const listener = (event: MouseEvent) => {
		if (node && !node.contains(event.target as HTMLElement)) handler()
	}

	document.addEventListener('click', listener)

	return {
		destroy: () => document.removeEventListener('click', listener),
	}
}