export const NumberServices = {
  abbreviateNumber: (value: number) =>
    value > 999
      ? value % 1000 === 0
        ? (value / 1000).toFixed(0) + 'k'
        : (value / 1000).toFixed(1) + 'k'
      : value,
}
