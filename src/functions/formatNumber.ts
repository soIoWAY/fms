export function formatNumber(num: number): string {
	return num.toLocaleString('uk-UA', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	})
}
