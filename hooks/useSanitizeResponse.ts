export const UseSanitizeResponse = (response: any[]) => {
  let sanitized = response.reduce((acc: object[] = [], curr: any) => {
    const item = {
      id: curr.id,
      stat: curr.stat,
      title: curr.title,
      desc: curr.desc,
    };
    console.log(curr);
    acc.push(item);
    return acc;
  }, []);
  return sanitized;
};

