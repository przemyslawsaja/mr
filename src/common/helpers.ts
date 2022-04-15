export function omit(obj: any, params: any[]) {
  obj = { ...obj };
  params.forEach(param => delete obj[param]);
  return obj;
}