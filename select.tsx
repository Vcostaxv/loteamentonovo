
export function Select({ children, onValueChange }: any) {
  return <div>{children}</div>;
}
export function SelectTrigger({ children, className }: any) {
  return <div className={`border p-2 rounded ${className}`}>{children}</div>;
}
export function SelectValue({ placeholder }: any) {
  return <span>{placeholder}</span>;
}
export function SelectContent({ children }: any) {
  return <div className="mt-2 border p-2 bg-white rounded shadow">{children}</div>;
}
export function SelectItem({ children, value }: any) {
  return <div className="cursor-pointer hover:bg-gray-100" onClick={() => console.log(value)}>{children}</div>;
}