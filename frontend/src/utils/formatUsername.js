export const formatUsername = (username) => {
    return username
      .split(/(?=[A-Z])/)
      .join(' ')
      .toUpperCase();
};
  