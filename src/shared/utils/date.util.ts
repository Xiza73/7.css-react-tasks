export const dateFormat = (
  date: string,
  options: {
    locale?: Intl.LocalesArgument;
    format?: Intl.DateTimeFormatOptions;
  } = {
    locale: 'es-CO',
    format: { timeZone: 'America/Lima' },
  }
): string => {
  try {
    const dateValue = new Date(date);

    return dateValue.toLocaleDateString(options.locale, options.format);
  } catch (error) {
    return '';
  }
};
