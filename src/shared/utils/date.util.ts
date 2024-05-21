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
    return new Date(date).toLocaleDateString(options.locale, options.format);
  } catch (error) {
    return '';
  }
};
