export const UseSanitizeResponse = (response: any[]) => {
  const sanitized = response.reduce((acc: object[] = [], curr: any) => {
    const item = {
      id: curr.id,
      ...curr.attributes,
    };
    acc.push(item);
    return acc;
  }, []);
  return sanitized;
};
