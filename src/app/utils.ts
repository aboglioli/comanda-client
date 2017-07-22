export function removeEmptyProperties(data: any) {
  for(let prop in data) {
    if(!data[prop]) {
      delete data[prop];
    }
  }

  return data;
}

export function checkProperties(obj: any, props: {name: string, text: string}[]): string[] {
  return props.reduce((propsNotPresent, prop) => {
    if(!obj[prop.name]) {
      return [...propsNotPresent, prop.text];
    }

    return propsNotPresent;
  }, []);
}
